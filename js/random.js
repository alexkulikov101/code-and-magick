'use strict';

(function () {
  window.random = {
    getRandomElement: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },

    getRandomName: function (name, surname) {
      return window.random.getRandomElement(name) + ' ' + window.random.getRandomElement(surname);
    }
  };
})();
