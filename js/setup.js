'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var getRandomName = function (name, surname) {
  return name[Math.floor(Math.random() * name.length)] + '' + surname[Math.floor(Math.random() * surname.length)];
};

var getRandomColor = function (color) {
  return color[Math.floor(Math.random() * color.length)];
};

var wizards = [
  {
    name: getRandomName(WIZARD_NAMES, WIZARD_SURNAMES),
    coatColor: getRandomColor(WIZARD_COAT_COLORS),
    eyesColor: getRandomColor(WIZARD_EYES_COLORS)
  },
  {
    name: getRandomName(WIZARD_NAMES, WIZARD_SURNAMES),
    coatColor: getRandomColor(WIZARD_COAT_COLORS),
    eyesColor: getRandomColor(WIZARD_EYES_COLORS)
  },
  {
    name: getRandomName(WIZARD_NAMES, WIZARD_SURNAMES),
    coatColor: getRandomColor(WIZARD_COAT_COLORS),
    eyesColor: getRandomColor(WIZARD_EYES_COLORS)
  },
  {
    name: getRandomName(WIZARD_NAMES, WIZARD_SURNAMES),
    coatColor: getRandomColor(WIZARD_COAT_COLORS),
    eyesColor: getRandomColor(WIZARD_EYES_COLORS)
  }
];
