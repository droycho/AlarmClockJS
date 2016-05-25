(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.alarmClock = function(goal) {
  setInterval(function () {
    if (moment().format("HH:mm") === goal) {
      alert("wakeup");
      return;
    }
  }, 1000);
};


// var AlarmClock = function (alarmTime) {
// this.newAlarmTime = alarmTime;
// };
//
// AlarmClock.prototype.alarmSet = function() {
//   var timeContinuum = function() {
//     var foo = alert("wakeup");
//     var currentTime = moment().format("HH:mm");//what format to use?
//     if (currentTime === this.alarmTime) {
//       return foo;
//     } else {
//       timeContinuum();
//     }
//   };
// };
//
// exports.AnAlarmClock = AlarmClock;

},{}],2:[function(require,module,exports){
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

$(document).ready(function(){
  $('#time').text(moment());
});

},{"./../js/alarm-clock.js":1}]},{},[2]);
