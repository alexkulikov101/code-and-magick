'use strict';

(function () {
  var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var WIZARD_FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var NUMBER_WIZARDS = 4;

  var userDialog = document.querySelector('.setup');
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < NUMBER_WIZARDS; i++) {
      fragment.appendChild(renderWizard(window.random.randomSplice(wizards)[0]));
    }
    similarListElement.appendChild(fragment);

    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'position: absolute; width: 100%; z-index: 100; font-size: 50px; text-align: center; color: red;';
    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler);

  var form = userDialog.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      userDialog.classList.add('hidden');
    }, errorHandler);

    evt.preventDefault();
  });

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
