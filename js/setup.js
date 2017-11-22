'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var wizards = [
  {
    name: getRandomName,
    coatColor: getRandomCoatColor,
    eyesColor: getRandomEyesColor
  },
  {
    name: getRandomName,
    coatColor: getRandomCoatColor,
    eyesColor: getRandomEyesColor
  },
  {
    name: getRandomName,
    coatColor: getRandomCoatColor,
    eyesColor: getRandomEyesColor
  },
  {
    name: getRandomName,
    coatColor: getRandomCoatColor,
    eyesColor: getRandomEyesColor
  }
];
