'use strict'


function maxPower(array) {
    return Math.max(...array);
}

function average(array) {
  let currentValue = 0;
  for(let i = 0; i < array.length; i++) {
    currentValue += array[i];
  }
  return Math.round(currentValue/array.length);
}

function rollingAverage(array, seconds) {
  let newArray = [];
  for(let i = 0; i < array.length-1; i++) {
      if(i > seconds) {
      //array.slice is what creates sections so that you can find the average of the duration you want
    newArray.push(average(array.slice(i, i + seconds)))
    }
  }
  return newArray;
}

function findMax(array, seconds) {
  if(seconds > 0) {
 return Math.round(Math.max(...(rollingAverage(array, seconds))));
  }
  console.log('Please enter an integer greater than 0 for "seconds"')
  return 'Please enter an integer greater than 0 for "seconds"'
}



function normPow(array, startPoint = 0, duration = array.length - 1) {
  let normArray = rollingAverage(array, 30);
  for(let i = startPoint; i < duration; i++) {
    normArray = normArray.slice(i, i + duration).map(x => x ** 4);
    return Math.round(average(normArray)**(1/4));
  }
  return 'Cannot get Normalized Power';
}

//get "code" from returned URL
let currentLocation;
let accessCode;

//returns accessCode value, used for collecting access token
function getAccessCode() {
  currentLocation = //window.location.href;
    'https://mitchellgsides.github.io/Strava-PR-Lister/?state=&code=c49e70775538215f5fefffbcd59f18144f6db446&scope=read_all,read,profile:read_all,profile:write,activity:read_all,activity:write';
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


function getActivityList() {
  $.get(`https://www.strava.com/api/v3/athletes/${authenticatedAthlete}/activities?access_token=${accessToken}`, function(data, status) {
      activityArray = data;
      console.log(activityArray);
   }, 'jsonp');
}

function addActivityData() {
  for(let i = 0; i < activityArray.length; i++) {
          let id = activityArray[i].id;
          $.get(`https://www.strava.com/api/v3/activities/${id}/streams/?access_token=${accessToken}&keys=watts&key_by_type=true/`, function(data, status) {
          activityArray[i].rideData = data;
          console.log(activityArray[i].rideData);
          }, 'jsonp');
        }
 }

$('#step2').on('click', function(event) {
  event.preventDefault();
  $('#js-activity-list')
  .append(`<li>${activityArray[i].name}</li>
            <ul>
              <li>Average Power: ${average(activityArray[i].rideData.watts.data)}w</li>
              <li>Normalized Power: ${}w</li>
              <
            </ul>`)
})

$('#js-activity-list').on('click', function(event) {
    event.preventDefault();
    for(let i = 0; i < activityArray.length; i++) {
    $('#js-activity-list').append(`<li id="js-activity-list-item">${activityArray[i].name}</li>`)
    }
})






let step2 = function() {
   let promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         console.log('step 2 completed');
         resolve(getAccessCode());
      }, 1000);
   });
   return promise;
};
 
 
let step3 = function(someStuff) {
   let promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         console.log('step 3 completed');
         resolve(collectAccessToken());
      }, 500);
   });
   return promise;
};
 
let step4 = function(someStuff) {
   let promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         console.log('step 4 completed');
         resolve(getAuthenticatedAthlete());
      }, 500);
   });
   return promise;
};

let step5 = function(someStuff) {
   let promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         console.log('step 5 completed');
         resolve(getActivityList());
      }, 500);
   });
   return promise;
};

let step6 = function(someStuff) {
   let promise = new Promise(function(resolve, reject){
      setTimeout(function() {
         console.log('step 6 completed');
         resolve(addActivityData());
      }, 500);
   });
   return promise;
};

//run authentication
step2().then(step3).then(step4).then(step5).then(step6);
