'use strict';

(function () {
  var userDialog = document.querySelector('.setup');
  var userDialogOpen = document.querySelector('.setup-open');
  var userDialogClose = userDialog.querySelector('.setup-close');
  userDialogClose.setAttribute('tabindex', 0);
  var userDialogIcon = userDialogOpen.querySelector('.setup-open-icon');
  userDialogIcon.setAttribute('tabindex', 0);

  var onPopupEscPress = function (evt) {
    if (evt.target.className !== 'setup-user-name') {
      window.util.isEscEvent(evt, closePopup);
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
    window.util.isEnterEvent(evt, openPopup);
  });

  userDialogClose.addEventListener('click', function () {
    closePopup();
  });

  userDialogClose.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, closePopup);
  });

  var userName = userDialog.querySelector('.setup-user-name');
  userName.setAttribute('minlength', 2);

  var mainWizard = userDialog.querySelector('.setup-wizard');
  var coatMainWizard = mainWizard.querySelector('.wizard-coat');
  var eyesMainWizard = mainWizard.querySelector('.wizard-eyes');
  var fireballWizard = userDialog.querySelector('.setup-fireball-wrap');

  coatMainWizard.addEventListener('click', function () {
    coatMainWizard.style.fill = window.colorize.getCoatColor();
  });

  eyesMainWizard.addEventListener('click', function () {
    eyesMainWizard.style.fill = window.colorize.getEyesColor();
  });

  fireballWizard.addEventListener('click', function () {
    fireballWizard.style.background = window.colorize.getFireballColor();
  });

  var userDialogForm = userDialog.querySelector('.setup-wizard-form');
  userDialogForm.setAttribute('action', 'https://js.dump.academy/code-and-magick');
})();
