var alarmClock = require('./../js/alarm-clock.js').alarmClock;

$(document).ready(function(){
  $('#alarm-clock').submit(function(event){
    event.preventDefault();
    var goal = $('#goal').val();
    var output = alarmClock(goal);

    console.log(goal);
    console.log(moment().format("HH:mm"));
    $('#solution').append(goal);
     });
   });
