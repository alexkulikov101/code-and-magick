'use strict';

var findMaxElement = function (arr) {
  var max = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
};

var getRandomOpacity = function (red, green, blue) {
  return 'rgba(' + red + ', ' + green + ', ' + blue + ', ' + Math.random() + ')';
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

  var renderColoredText = function (color, font, text, x, y) {
    ctx.fillStyle = color;
    ctx.font = font;
    ctx.fillText(text, x, y);
  };

  var renderColumnsHistogram = function (color, x, y, width, height) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
  };

  for (var i = 0; i < times.length; i++) {
    var colorHistogram = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : getRandomOpacity(0, 0, 255);

    renderColumnsHistogram(colorHistogram, initialX + indent * i, initialY, barWidth, -(times[i] * step));
    renderColoredText('skyblue', '16px PT Mono', Math.floor(times[i]), initialX + indent * i, initialY - (times[i] * step + lineHeight));
    renderColoredText('peru', '16px PT Mono', names[i], initialX + indent * i, initialY + lineHeight);
  }
};
