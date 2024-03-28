import { _updateUI } from "./ui.js";

const countdownTimer = (function () {
  // Variables

  const days = document.querySelector(".js-days");
  const hours = document.querySelector(".js-hours");
  const minutes = document.querySelector(".js-minutes");
  const seconds = document.querySelector(".js-seconds");
  const animationElements = {
    secTop: document.querySelector(".js-second-top-part"),
    secBottom: document.querySelector(".js-second-bottom-part"),
    minTop: document.querySelector(".js-minute-top-part"),
    minBottom: document.querySelector(".js-minute-bottom-part"),
    hourTop: document.querySelector(".js-hour-top-part"),
    hourBottom: document.querySelector(".js-hour-bottom-part"),
    dayTop: document.querySelector(".js-day-top-part"),
    dayBottom: document.querySelector(".js-day-bottom-part"),
  };
  const countItems = {
    second: Number(seconds.innerHTML),
    minute: Number(minutes.innerHTML),
    hour: Number(hours.innerHTML),
    day: Number(days.innerHTML),
  };
  let interval;

  // FunC

  const _startTimer = function () {
    interval = setInterval(_countDown, 1000);
  };

  const _countDown = function () {
    countItems.second--;
    _updateUI(
      seconds,
      countItems.second,
      animationElements.secTop,
      animationElements.secBottom
    );
    if (countItems.second == 1) {
      countItems.second = 60;
      countItems.minute--;
      _updateUI(
        minutes,
        countItems.minute,
        animationElements.minTop,
        animationElements.minBottom
      );
    } else if (countItems.minute == 0) {
      countItems.minute = 59;
      countItems.hour--;
      _updateUI(
        hours,
        countItems.hour,
        animationElements.hourTop,
        animationElements.hourBottom
      );
    } else if (countItems.hour == 0) {
      countItems.hour = 23;
      countItems.day--;
      _updateUI(
        days,
        countItems.day,
        animationElements.dayTop,
        animationElements.dayBottom
      );
    }
  };

  return {
    init: function () {
      _startTimer();
    },
  };
})();

document.addEventListener("DOMContentLoaded", function () {
  countdownTimer.init();
});
