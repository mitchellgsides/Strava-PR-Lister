'use strict'

//get "code" from returned URL
let currentLocation;
let accessCode;

//returns accessCode value, used for collecting access token
function getAccessCode() {
  currentLocation = window.location.href;
    //'https://mitchellgsides.github.io/Strava-PR-Lister/?state=&code=c49e70775538215f5fefffbcd59f18144f6db446&scope=read_all,read,profile:read_all,profile:write,activity:read_all,activity:write';
    //console.log(currentLocation);
    accessCode = (currentLocation.split(/&|=/))[3];
    return accessCode;
}

let accessToken;
let refreshToken;
//returns accessToken and refreshToken
function collectAccessToken() {
    $.post(`https://www.strava.com/oauth/token?client_id=32540&client_secret=b7abbcd02c9483f9007218aaf47f7a0e929e9ee1&code=${accessCode}&grant_type=authorization_code`, function(data, status) {
          if(status === 'success') {
          //console.log(data);
          accessToken = data.access_token;
          refreshToken = data.refresh_token;
          } else(
          alert('Request Error'));
        })
        return accessToken, refreshToken;
}
let activityPower;
let authenticatedAthlete;
let activityArray;
//returns authenticated athlete
function getAuthenticatedAthlete() {
  $.get(`https://www.strava.com/api/v3/athlete/?access_token=${accessToken}`, function(data, status) {
      authenticatedAthlete = data.id;
      console.log('Authenticated Athlete id ' + authenticatedAthlete);
    }, 'jsonp');
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
 }


let step2 = function() {
   let promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         console.log('Access Code Retrieved');
         resolve(getAccessCode());
      }, 1000);
   });
   return promise;
};
 
 
let step3 = function() {
   let promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         console.log('Access Token Retrieved');
         resolve(collectAccessToken());
      }, 1000);
   });
   return promise;
};
 
let step4 = function() {
   let promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         console.log('Authenticated Athlete Found');
         resolve(getAuthenticatedAthlete());
      }, 1000);
   });
   return promise;
};

let step5 = function() {
   let promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         resolve(getActivityList());
         console.log('activityArray Created');
      }, 1000);
   });
   return promise;
};

let step6 = function() {
   let promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         alert('Data Loaded. Select "Show Data" to see activities.');
         resolve(addActivityData());
      }, 1000);
   });
   return promise;
};


//run authentication
step2().then(step3).then(step4).then(step5).then(step6);

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


$('#js-show-power').on('click', function(event) {
  event.preventDefault();
  renderPage();
})

function renderPage() {
$('#js-show-power').on('click', function(event) {
  event.preventDefault();
  $('#js-activity-list').empty();
  $('.power-analysis-list').empty();
  $('#js-show-power').text('Reset');
  for(let i = 0; i < activityArray.length; i++) {
    $('#js-activity-list').append(`
      <li>
          <ul>
            <a class="title">${activityArray[i].name}</a>
            <ul id='${i}' class="power-analysis-list">`
            );
        $('.power-analysis-list').css('display', 'none');
  let anId = i;
  if(activityArray[i].rideData.hasOwnProperty('watts')) {
    $(`#${i}`).append(
      `<li class="average-power-item">Average Power: ${average(activityArray[anId].rideData.watts.data)}w </li>
      <li class="normalized-power-item">Normalized Power: ${normPow(activityArray[anId].rideData.watts.data)}w </li>
      <li class="best-5-power-item">Best 5min Power: ${maxOfDuration(activityArray[anId].rideData.watts.data, 300)}w</li>
      `//<li><form class="new-power-data"><input type="number"><span>Duration</span><button type="submit" ><span>Add Power</span></form></li></ul></li>`
    )
  }
}
  //newPowerAnalysis();
  showPowerAnalysis();
})
};
$(renderPage);

$('#power-data-button').on('click', function(event) {
  event.preventDefault();
  powerAnalyze();
})

function showPowerAnalysis() {
  $('#js-activity-list > li a').on("click", function(event) {
    event.preventDefault();
    $(this).parent().find('ul').toggle();
  })
};

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

//feature "newPowerAnalysis" removed for now