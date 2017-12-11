'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var NUMBER_WIZARDS = 4;

  var userDialog = document.querySelector('.setup');

  var getWizardObjects = function (numberWizards) {
    var arr = [];

    for (var i = 0; i < numberWizards; i++) {
      arr.push({
        name: window.random.getRandomName(WIZARD_NAMES, WIZARD_SURNAMES),
        coatColor: window.random.getRandomElement(WIZARD_COAT_COLORS),
        eyesColor: window.random.getRandomElement(WIZARD_EYES_COLORS)
      });
    }

    return arr;
  };

  var wizards = getWizardObjects(NUMBER_WIZARDS);

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

  var mainWizard = userDialog.querySelector('.setup-wizard');
  var coatMainWizard = mainWizard.querySelector('.wizard-coat');
  var eyesMainWizard = mainWizard.querySelector('.wizard-eyes');
  var fireballWizard = userDialog.querySelector('.setup-fireball-wrap');

  var randomFillElement = function (element, color) {
    element.style.fill = window.random.getRandomElement(color);
  };

  var changeElementRandomBackground = function (element, color) {
    element.style.backgroundColor = window.random.getRandomElement(color);
  };

  window.colorizeElement(coatMainWizard, WIZARD_COAT_COLORS, randomFillElement);
  window.colorizeElement(eyesMainWizard, WIZARD_EYES_COLORS, randomFillElement);
  window.colorizeElement(fireballWizard, WIZARD_FIREBALL_COLORS, changeElementRandomBackground);
})();
