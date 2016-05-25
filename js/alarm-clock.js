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
