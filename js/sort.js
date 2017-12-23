'use strict';
(function () {
  var NUMBER_WIZARDS = 4;

  var getRank = function (wizard, coatColor, eyesColor) {
    if (coatColor === '') {
      coatColor = 'rgb(101, 137, 164)';
    } else if (eyesColor === '') {
      eyesColor = 'black';
    }

    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var updateSimilarWizards = function (wizards) {
    window.setup.removeSimilarWizards();

    var fragment = document.createDocumentFragment();
    var similarListElement = document.querySelector('.setup-similar-list');

    for (var i = 0; i < NUMBER_WIZARDS; i++) {
      fragment.appendChild(window.setup.renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
  };

  window.sort = function (coatColor, eyesColor) {
    updateSimilarWizards(window.data.slice().sort(function (left, right) {
      var rankDiff = getRank(right, coatColor, eyesColor) - getRank(left, coatColor, eyesColor);
      if (rankDiff === 0) {
        rankDiff = window.data.indexOf(left) - window.data.indexOf(right);
      }
      return rankDiff;
    }));
  };
})();
