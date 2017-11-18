'use strict';

var findMaxElement = function (arr) {
  var max = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i + 1] > max) {
      max = arr[i + 1];
    }
  }

  return max;
};

var getRandomOpacity = function (rgba) {
  var min = 0.3;
  return rgba.replace('random', min + Math.random() * (1 - min));
};

var sortElement = function (arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    var max = arr[i];

    for (var j = i + 1; j < arr.length; j++) {
      if (max < arr[j]) {
        var oldMax = arr[i];
        max = arr[j];
        arr[i] = max;
        arr[j] = oldMax;
      }
    }
  }
};

window.renderStatistics = function (ctx, names, times) {
  ctx.beginPath();
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.moveTo(110, 20);
  ctx.quadraticCurveTo(320, 10, 530, 20);
  ctx.quadraticCurveTo(540, 165, 530, 290);
  ctx.quadraticCurveTo(320, 300, 110, 290);
  ctx.quadraticCurveTo(120, 165, 110, 20);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = 'rgba(255, 255, 255, 1)';
  ctx.moveTo(100, 10);
  ctx.quadraticCurveTo(310, 0, 520, 10);
  ctx.quadraticCurveTo(530, 155, 520, 280);
  ctx.quadraticCurveTo(310, 290, 100, 280);
  ctx.quadraticCurveTo(110, 155, 100, 10);
  ctx.fill();

  ctx.fillStyle = 'rgb(0, 0, 0)';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var histogramHeight = 150;
  var maxHeight = findMaxElement(times);
  var step = histogramHeight / (maxHeight - 0);
  var barWidth = 40;
  var indent = barWidth + 50;
  var initialX = 120;
  var initialY = 250;
  var lineHeight = 15;

  sortElement(times);

  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomOpacity('rgba(0, 0, 255, random)');
    }

    ctx.fillText(Math.floor(times[i]), initialX + indent * i, initialY - (times[i] * step + lineHeight));
    ctx.fillRect(initialX + indent * i, initialY, barWidth, -(times[i] * step));
    ctx.fillText(names[i], initialX + indent * i, initialY + lineHeight);
  }
};
