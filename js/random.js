'use strict';

(function () {
  window.random = {
    getRandomElement: function (arr) {
      return arr[Math.floor(Math.random() * arr.length)];
    },

    randomSplice: function (arr) {
      return arr.splice(Math.floor(Math.random() * arr.length), 1);
    }
  };
})();
