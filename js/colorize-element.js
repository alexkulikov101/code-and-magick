'use strict';

(function () {
  window.colorizeElement = function (element, colors, callback) {
    element.addEventListener('click', function () {
      callback(element, colors);
    });
  };
})();
