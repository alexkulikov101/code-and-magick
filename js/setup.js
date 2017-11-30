'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;

var userDialog = document.querySelector('.setup');

var getRandomElement = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var getRandomName = function (name, surname) {
  return getRandomElement(name) + ' ' + getRandomElement(surname);
};

var wizards = [
  {
    name: getRandomName(WIZARD_NAMES, WIZARD_SURNAMES),
    coatColor: getRandomElement(WIZARD_COAT_COLORS),
    eyesColor: getRandomElement(WIZARD_EYES_COLORS)
  },
  {
    name: getRandomName(WIZARD_NAMES, WIZARD_SURNAMES),
    coatColor: getRandomElement(WIZARD_COAT_COLORS),
    eyesColor: getRandomElement(WIZARD_EYES_COLORS)
  },
  {
    name: getRandomName(WIZARD_NAMES, WIZARD_SURNAMES),
    coatColor: getRandomElement(WIZARD_COAT_COLORS),
    eyesColor: getRandomElement(WIZARD_EYES_COLORS)
  },
  {
    name: getRandomName(WIZARD_NAMES, WIZARD_SURNAMES),
    coatColor: getRandomElement(WIZARD_COAT_COLORS),
    eyesColor: getRandomElement(WIZARD_EYES_COLORS)
  }
];

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();

for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');

var userDialogOpen = document.querySelector('.setup-open');
var userDialogClose = userDialog.querySelector('.setup-close');
userDialogClose.setAttribute('tabindex', 0);
var userDialogIcon = userDialogOpen.querySelector('.setup-open-icon');
userDialogIcon.setAttribute('tabindex', 0);

var onPopupEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    if (evt.target.className !== 'setup-user-name') {
      closePopup();
    }
  }
};

var openPopup = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

userDialogOpen.addEventListener('click', function () {
  openPopup();
});

userDialogOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

userDialogClose.addEventListener('click', function () {
  closePopup();
});

userDialogClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var userName = userDialog.querySelector('.setup-user-name');
userName.setAttribute('minlength', 2);
