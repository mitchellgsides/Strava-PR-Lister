'use strict'

//get "code" from returned URL
let activityArray;
let currentLocation;
let accessCode;

//returns accessCode value, used for collecting access token
function getAccessCode() {
  currentLocation = window.location.href;
    console.log(currentLocation);
    accessCode = (currentLocation.split(/&|=/))[3];
    console.log('Access Code Retrieved');
    return accessCode;
}

function getAccessCodeDemo() {
  currentLocation = 'https://mitchellgsides.github.io/Strava-PR-Lister/?state=&code=c49e70775538215f5fefffbcd59f18144f6db446&scope=read_all,read,profile:read_all,profile:write,activity:read_all,activity:write';
  accessCode = (currentLocation.split(/&|=/))[3];
  console.log('Access Code Retrieved')
}


let accessToken;
let refreshToken;
const client_secret = 'b7abbcd02c9483f9007218aaf47f7a0e929e9ee1';

//returns accessToken and refreshToken
function collectAccessToken() {
    $.post(`https://www.strava.com/oauth/token?client_id=32540&client_secret=${client_secret}&code=${accessCode}&grant_type=authorization_code`, function(data, status) {
          if(status === 'success') {
          //console.log(data);
          accessToken = data.access_token;
          refreshToken = data.refresh_token;
          } else(
          alert('Request Error'));
        })
        console.log('Access Token Retrieved');
        return accessToken, refreshToken;
}
let activityPower;
let authenticatedAthlete;

//returns authenticated athlete
function getAuthenticatedAthlete() {
  $.get(`https://www.strava.com/api/v3/athlete/?access_token=${accessToken}`, function(data, status) {
      authenticatedAthlete = data.id;
      console.log('Authenticated Athlete id ' + authenticatedAthlete);
    }, 'jsonp');
    console.log('Authenticated Athlete Found');
    return authenticatedAthlete;
}

//creates activityArray
function getActivityList() {
  $.get(`https://www.strava.com/api/v3/athletes/${authenticatedAthlete}/activities?access_token=${accessToken}`, function(data, status) {
      activityArray = data;
   }, 'jsonp');
}

function addActivityData() {
  for(let i = 0; i < activityArray.length; i++) {
          let id = activityArray[i].id;
          $.get(`https://www.strava.com/api/v3/activities/${id}/streams/?access_token=${accessToken}&keys=watts&key_by_type=true/`, function(data, status) {
          activityArray[i].rideData = data;
          }, 'jsonp');
        }
        console.log('activityArray Created');
        $('#load-msg').html('Data Loaded. Click "Show Data" to see your activities');
        alert('Data Loaded. Click "Show Data" to see activities.');
 }


let step2 = function() {
   let promise = new Promise(function(resolve, reject){
         resolve(getAccessCode());
   });
   return promise;
};
 
 
 
let step3 = function() {
   let promise = new Promise(function(resolve, reject){
         resolve(collectAccessToken());
   });
   return promise;
};
 
let step4 = function() {
   let promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         resolve(getAuthenticatedAthlete());
      }, 400);
   });
   return promise;
};

let step5 = function() {
   let promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
         resolve(getActivityList());
      }, 600);
   });
   return promise;
};

let step6 = function() {
   let promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         resolve(addActivityData());
      }, 900);
   });
   return promise;
};


let step7 = function() {
   let promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         resolve(renderPage());
      }, 900);
      console.log('Page Rendered');
   });
   return promise;
};

//run Authentication
function runAuth() {
  $('#user-account').on('click', function(event) { 
    event.preventDefault();
    step2().then(step3).then(step4).then(step5).then(step6).then(step7);
})
}

$(runAuth);

//demo Authentication
let step2Demo = function() {
   let promise = new Promise(function(resolve, reject){
         resolve(getAccessCodeDemo());
   });
   return promise;
};

function demoAuth() {
  $('#demo-account').on('click', function(event) {
    event.preventDefault();
    step2Demo().then(step3).then(step4).then(step5).then(step6).then(step7);
  })
}

$(demoAuth)

const timeArr = [1, 5, 10, 12, 20, 30, 60, 120, 300, 360, 600, 720, 1200, 1800, 3600, 5400];

function createPowDurCurve(array, time) {
  let powArr = [];
  for(let i = 0; i < time.length; i++) {
  powArr.push(maxOfDuration(array, time[i]));
    
  }
  return powArr;
}

function maxPower(array) {
    return Math.max(...array);
};

function average(array) {
  let currentValue = 0;
  for(let i = 0; i < array.length; i++) {
    currentValue += array[i];
  }
  return Math.round(currentValue/array.length);
};

function rollingAverage(array, seconds) {
  let newArray = [];
  for(let i = 0; i < array.length-1; i++) {
      if(i > seconds) {
      //array.slice is what creates sections so that you can find the average of the duration you want
    newArray.push(average(array.slice(i, i + seconds)))
    }
  }
  return newArray;
};

function maxOfDuration(array, duration) {
  if(duration > 0 && duration < array.length) {
    let avgArr = [];
    for(let i = 0; i < array.length; i++) {
      avgArr.push(average(array.slice(i, i + duration)));
    }
  return Math.max(...avgArr);
  }
    return `Error: Please enter an integer between 0 and ${array.length}s (the duration of your ride)...`
};

function normPow(array, startPoint = 0, duration = array.length - 1) {
  let normArray = rollingAverage(array, 30);
  for(let i = startPoint; i < duration; i++) {
    normArray = normArray.slice(i, i + duration).map(x => x ** 4);
    return Math.round(average(normArray)**(1/4));
  }
  return 'Cannot get Normalized Power';
};

function renderPage() {
  $('#js-show-power').on('click', function(event) {
    $('#load-msg').remove();
    $('#js-activity-list').css('display', 'flex');
    $('#js-activity-list').empty();
    $('.power-analysis-list').empty();
    $('#js-show-power').html('<span>Reset</span>');
    for(let i = 0; i < activityArray.length; i++) {
      $('#js-activity-list').append(`
        <li class='individual-activity'>
          <span class="title">${activityArray[i].name}</span>
          <ul class='act-stats title'>
            <li>Date: <br>${dateFormat(activityArray[i].start_date)}</li>
            <li>Distance: <br>${mToMi(activityArray[i].distance)}</li>
            <li>Moving Time: <br>${toHHMMSS(activityArray[i].moving_time)}</li>
          </ul>
          <ul id='${i}' class="power-analysis-list"></ul>
        </li>`
              );
    let anId = i;
    if(activityArray[i].rideData.hasOwnProperty('watts')) {
      $(`#${i}`).append(
        `<li class="average-power-item"><strong>Average Power:</strong> ${average(activityArray[anId].rideData.watts.data)}w </li>
        <li class="normalized-power-item"><strong>Normalized Power:</strong> ${normPow(activityArray[anId].rideData.watts.data)}w </li>
        <li class="best-5-power-item"><strong>Best 5min Power:</strong> ${maxOfDuration(activityArray[anId].rideData.watts.data, 300)}w</li>
        </li>
        <li class="best-20-power-item"><strong>Best 20min Power:</strong> ${maxOfDuration(activityArray[anId].rideData.watts.data, 1200)}w</li>
        </li>`
      );
    } else {$(`#${i}`).append('No Power Data Available').css('color', 'black')}
  }
    //newPowerAnalysis();
    showPowerAnalysis();
    $('.power-analysis-list').css('display', 'none');
    }
)}

$(renderPage);

$('#power-data-button').on('click', function(event) {
  event.preventDefault();
  powerAnalyze();
})

const canvas = document.getElementById('power-comparison-chart');
//let disNewChart = canvas.getContext('2d');

$('#instructions-button').on('click', function(event) {
  event.preventDefault();
  $('.instructions').toggle();
})

function showPowerAnalysis() {
  $('.title').on("click", function(event) {
    event.preventDefault();
    
    $(this).parent().find('.power-analysis-list').toggle();
    //clears Dataset
    chartDataset = [];
    let actArrIndex = $(this).parent().find('.power-analysis-list').attr('id');
    if(activityArray[actArrIndex].rideData.hasOwnProperty('watts')) {
    let value = {
      label: activityArray[actArrIndex].name + 'Power Records (watts)',
      backgroundColor: 'rgb(0, 0, 0, 0.8)',
      borderColor: 'rgb(0, 0, 0, 0.8)',
      fill: false,
      data: createPowDurCurve(activityArray[actArrIndex].rideData.watts.data, timeArr)
    };
    toggleArrayItem(chartDataset, value);
    //makeDisChart(disNewChart);
  }
  })
};

let toHHMMSS = (secs) => {
    let sec_num = parseInt(secs, 10)    
    let hours   = Math.floor(sec_num / 3600) % 24
    let minutes = Math.floor(sec_num / 60) % 60
    let seconds = sec_num % 60    
    return [hours,minutes,seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v,i) => v !== "00" || i > 0)
        .join(":")
}

function mToMi(meters) {
  return (meters * 0.00062137).toFixed(1) + ' miles';
}

function dateFormat(date) {
  let d = new Date(date);
  let month = d.getMonth();
  let monthArr = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let day = d.getDate();
  let year = d.getFullYear();

  return `${monthArr[month]} ${day}, ${year}`;
}

/* Feature on hold now


function newPowerAnalysis() {
$('.new-power-data').on('submit', function(event) {
  event.preventDefault();
  let anId = $(this).parent().parent().attr('id');
  let duration = $(this).find('input').val();
  let powerData = activityArray[anId].rideData.watts.data;
  let newDataPoint = maxOfDuration(powerData, duration);
  $(this).closest('ul li').append(`<li>${`Best ${duration}s Power: ${newDataPoint}w`}</li>`)
})
};
*/

/* Chart for Individual Rides Tabled For Now
function chartData() {
  for(let i = 0; i < activityArray.length; i++) {
    if(activityArray[i].rideData.hasOwnProperty('watts')) {
      activityArray[i].dataset = {
        label: activityArray[i].name,
        backgroundColor: 'rgb(0, 0, 0)',
        borderColor: 'rgb(0, 0, 0)',
        fill: false,
        data: createPowDurCurve(activityArray[i].rideData.watts.data, timeArr),
      }
    } else {console.log('no power data')}
  }
}
*/


// format for activity duration
function secondstotime(secs) {
    var t = new Date(1970,0,1);
    t.setSeconds(secs);
    var s = t.toTimeString().substr(0,8);
    if(secs > 86399)
        s = Math.floor((t - Date.parse("1/1/70")) / 3600000) + s.substr(2);
    return s;
}

//power duration curve label format
function pdFormatting(secs) {
  if(secs >= 60) {
    return secs/60 + 'min';
  }
return secs + 's';
};

//CHARTS.JS!!!

function toggleArrayItem(array, value) {
  let i = array.indexOf(value);
  if(i === -1) {
    array.push(value);}
  else {
    array.splice(i, 1);
  }
}

const labelArr = ['1s', '5s', '10s', '12s', '20s', '30s', '1min', '2min', '5min', '6min', '10min', '12min', '20min', '30min', '60min', '90min'];

let chartDataset =[];
/*
function makeDisChart(theContext) {
  let chart = new Chart(theContext, {
      // The type of chart we want to create
      type: 'line',
      // The data for our dataset
      data: {
          labels: labelArr,
          datasets: chartDataset,
      },
      // Configuration options go here
      options: {
        elements: {
          line: {
            tension: 0.2,
          },
        },
        animation: {
          duration: 0,
        },
        hover: {
          animationDuration: 0,
        },
        responsiveAnimationDuration: 0,
        responsive: 'true',
        scales: {
          gridlines: {
            display: true,
          },
          xAxes: [{
            ticks: {
              min: 0,
            },
            scaleLabel: {
              display: true
            },
            ticks: {
              beginAtZero: true,
            }
          }], 
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 120,
            },
          }],
        }

      }
  });
}
*/