'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var getRandomName = function(name, surname) {
  return name[Math.floor(Math.random() * name.length)] + '' + surname[Math.floor(Math.random() * surname.length)];
};

var wizards = [
  {
    name: getRandomName(WIZARD_NAMES, WIZARD_SURNAMES),
    coatColor: getRandomCoatColor,
    eyesColor: getRandomEyesColor
  },
  {
    name: getRandomName(WIZARD_NAMES, WIZARD_SURNAMES),
    coatColor: getRandomCoatColor,
    eyesColor: getRandomEyesColor
  },
  {
    name: getRandomName(WIZARD_NAMES, WIZARD_SURNAMES),
    coatColor: getRandomCoatColor,
    eyesColor: getRandomEyesColor
  },
  {
    name: getRandomName(WIZARD_NAMES, WIZARD_SURNAMES),
    coatColor: getRandomCoatColor,
    eyesColor: getRandomEyesColor
  }
];
