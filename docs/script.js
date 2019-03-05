'use strict'

//get "code" from returned URL
let activityArray = [];
let currentLocation;
let accessCode;
let runList = [];
linkStravaRemove();

//returns accessCode value, used for collecting access token
function getAccessCode() {
    currentLocation = //window.location.href;
    'https://mitchellgsides.github.io/Strava-PR-Lister/?state=&code=83e00237389734fee9e3dabc4b3de2cf3c62f07e&scope=read_all,read,profile:read_all,profile:write,activity:read_all,activity:write';
    accessCode = (currentLocation.split(/&|=/))[3];
    return accessCode;
}

let accessToken;
let refreshToken;
const client_secret = 'b7abbcd02c9483f9007218aaf47f7a0e929e9ee1';

//returns accessToken and refreshToken
function collectAccessToken() {
    $.post(`https://www.strava.com/oauth/token?client_id=32540&client_secret=${client_secret}&code=${accessCode}&grant_type=authorization_code`, function(data, status) {
          if(status === 'success') {
          accessToken = data.access_token;
          refreshToken = data.refresh_token;
          } else(
          alert('Request Error'));
        })
    return accessToken, refreshToken;
}
let activityPower;
let authenticatedAthlete;

//returns authenticated athlete
function getAuthenticatedAthlete() {
  $.get(`https://www.strava.com/api/v3/athlete/?access_token=${accessToken}`, function(data, status) {
      authenticatedAthlete = data.id;
      $('#authenticated-name').html(`${data.firstname}`)
      $('#authenticated-location').html(`${data.city}, ${data.state}`);
      $('#profile-picture').html(`<img src=${data.profile}>`);
    }, 'jsonp');
    return authenticatedAthlete;
}

//creates activityArray
function getActivityList() {
  $.get(`https://www.strava.com/api/v3/athletes/${authenticatedAthlete}/activities?access_token=${accessToken}`, function(data, status) {
            for(let i = 0; i < data.length; i++) {
              //collect ride activity data
              if(data[i].type === 'Ride') {
              activityArray.push(data[i]); 
              //collect run activity data
              } else if(data[i].type ==='Run') {
                runList.push(data[i]);
              }
            }
   }, 'jsonp');
}

// adds distance and powerData to each activity that has power data available
function addActivityData() {
  for(let i = 0; i < activityArray.length; i++) {
          let id = activityArray[i].id;
          $.get(`https://www.strava.com/api/v3/activities/${id}/streams/?access_token=${accessToken}&keys=watts&key_by_type=true/`, function(data, status) {
          activityArray[i].rideData = data;
          }, 'jsonp');
        }
        $('#load-msg').html('Data Loaded. Click "Show Data" to see your activities');
        alert('Data Loaded. Click "Show Data" to see activities.');
 }


// Section for authentication promises and data import from STRAVA API, which requiires specific order
let accessCodePromise = function() {
   let promise = new Promise(function(resolve, reject){
         resolve(getAccessCode());
   });
   return promise;
};
 
 
 
let accessTokenPromise = function() {
   let promise = new Promise(function(resolve, reject){
         resolve(collectAccessToken());
   });
   return promise;
};
 
let authenticatedAthletePromise = function() {
   let promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         resolve(getAuthenticatedAthlete());
      }, 400);
   });
   return promise;
};

let activityListPromise = function() {
   let promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
         resolve(getActivityList());
      }, 600);
   });
   return promise;
};

let activityDataPromise = function() {
   let promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         resolve(addActivityData());
      }, 900);
   });
   return promise;
};

// run Authentication
function runAuth() {
  $('#user-account').on('click', function(event) { 
    event.preventDefault();
    activityArray = [];
    runList = [];
    $('#js-activity-list').empty();
    $('#js-run-activities').empty();
    $('#authorize').remove();
    $('#act-type-title').css('display', 'none');
    $('#load-msg').html('Gathering data from Strava...');
    $('#js-app-instructions').remove();
    $('#js-show-power').css('display', 'flex');
    $('#js-show-runs').css('display', 'flex');
    $('#user-account').toggle();
    $('#demo-account').css('display', 'block');
    accessCodePromise().then(accessTokenPromise).then(authenticatedAthletePromise).then(activityListPromise).then(activityDataPromise);
})
}

$(runAuth);

function linkStravaRemove() {
  if (accessCode !== undefined) {
    console.log('WORKING');
      $('#authorize').remove();
  }
}

// This section establishes demo account to demo the app.
function demoAccessCode() {
    //currentLocation = window.location.href;
    currentLocation = 'https://mitchellgsides.github.io/Strava-PR-Lister/?state=&code=f81ae3a29974ed99d2939dd63e9104ea2a3ec988&scope=read_all,read,profile:read_all,profile:write,activity:read_all,activity:write#_=_';
    accessCode = (currentLocation.split(/&|=/))[3];
    return accessCode;
}

let demoAccessCodePromise = function() {
   let promise = new Promise(function(resolve, reject){
         resolve(demoAccessCode());
   });
   return promise;
};

function clearActArr() {
  activityArray = [];
  runList = [];
}

function demoAuth() {
  $('#demo-account').on('click', function(event) { 
    event.preventDefault();
    activityArray = [];
    runList = [];
    $('#act-type-title').css('display', 'none');
    $('#js-activity-list').empty();
    $('#js-run-activities').empty();
    $('#js-show-power').css('display', 'flex');
    $('#js-show-runs').css('display', 'flex');
    $('#js-app-instructions').remove();
    $('#demo-account').toggle();
    $('#user-account').toggle();
    $('#load-msg').html('Gathering data from Strava...');
    demoAccessCodePromise().then(accessTokenPromise).then(authenticatedAthletePromise).then(activityListPromise).then(activityDataPromise)
})
}

$(demoAuth);
// end demo account and Authentication sections

// Data analysis functions
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
      //array.slice is what creates sections so that you can find the average power for the duration you want
    newArray.push(average(array.slice(i, i + seconds)))
    }
  }
  return newArray;
};


// returns maximum average power for the duration specified
function maxOfDuration(array, duration) {
  if(duration > 0 && duration < array.length) {
    let avgArr = [];
    for(let i = 0; i < array.length; i++) {
      avgArr.push(average(array.slice(i, i + duration)));
    }
  return Math.max(...avgArr) + 'w';
  }
    return `The ride duration is only: ${Math.round(array.length / 60)} minutes...`
};


// returns normalized power for duration specified. Default is entire duration
function normPow(array, startPoint = 0, duration = array.length - 1) {
  let normArray = rollingAverage(array, 30);
  for(let i = startPoint; i < duration; i++) {
    normArray = normArray.slice(i, i + duration).map(x => x ** 4);
    return Math.round(average(normArray)**(1/4));
  }
  return 'Cannot get Normalized Power';
};


function renderRideData() {
  $('#js-show-power').on('click', function(event) {
    $('#athlete-banner').css('display', 'flex');
    $('#act-type-title').html('Ride Activities');
    $('#act-type-title').css('display', 'block');
    $('#load-msg').html("Select an activity to see personal records from that activity.");
    $('#js-activity-list').css('display', 'flex');
    $('main').css('display', 'flex');
    $('#js-activity-list').empty();
    $('#js-run-activities').empty();
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
        <li class="best-5-power-item"><strong>Best 5min Power:</strong> ${maxOfDuration(activityArray[anId].rideData.watts.data, 300)}</li>
        </li>
        <li class="best-20-power-item"><strong>Best 20min Power:</strong> ${maxOfDuration(activityArray[anId].rideData.watts.data, 1200)}</li>
        </li>`
      );
    } else {$(`#${i}`).append('<strong>No Power Data Available</strong>').css('color', 'black')}
  }
    showPowerAnalysis();
    $('.power-analysis-list').css('display', 'none');
    }
)}

$(renderRideData);


function renderRunData() {
$('#js-show-runs').on('click', function(event) {
  event.preventDefault();
    $('#js-activity-list').empty();
    $('#js-run-activities').empty();
    $('#act-type-title').html('Run Activities')
    $('#act-type-title').css('display', 'block');
    $('#athlete-banner').css('display', 'flex');
    $('#load-msg').html("Select an activity to see personal records from that activity.");
    $('#js-activity-list').css('display', 'flex');
    $('main').css('display', 'flex');
    $('#ride-act-title').css('display', 'block');
  for(let i = 0; i < runList.length; i++) {
    $('#js-run-activities').append(`
    <li class='individual-activity'>
            <span class="title">${runList[i].name}</span>
            <ul class='act-stats title'>
              <li>Date: <br>${dateFormat(runList[i].start_date)}</li>
              <li>Distance: <br>${mToMi(runList[i].distance)}</li>
              <li>Moving Time: <br>${toHHMMSS(runList[i].moving_time)}</li>
            </ul>
            <ul id='${i}' class="run-analysis-list"></ul>
          </li>`)
    $(`#${i}`).append(
        `<li class="average-pace-item"><strong>Average Pace: </strong> ${averageRunPace(runList[i].distance, runList[i].moving_time)}/mile </li>
         <li class='fastest-pace-item'><strong>Max Pace: </strong>${averageRunPace(runList[i].max_speed)}/mile </li>
      `);
   }
   $(showPowerAnalysis);
   $('.run-analysis-list').css('display', 'none');
});
}

$(renderRunData);

//format minutes (for pace)
function minTommss(minutes){
    let sign = minutes < 0 ? "-" : "";
    let min = Math.floor(Math.abs(minutes));
    let sec = Math.floor((Math.abs(minutes) * 60) % 60);
  return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
}

//default time = 1 if pace is already present (as in max_speed)
function averageRunPace(distance, time = 1) {
  //convert distance/time in meters/sec to minutes/mile
  return minTommss(26.8224 / (distance / time).toFixed(2));
}



function showPowerAnalysis() {
  $('.title').on("click", function(event) {
    event.preventDefault();
    $(this).parent().find('.power-analysis-list').toggle();
    $(this).parent().find('.run-analysis-list').toggle();
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