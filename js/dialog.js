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
    userDialog.removeAttribute('style');
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

  var userDialogForm = userDialog.querySelector('.setup-wizard-form');
  userDialogForm.setAttribute('action', 'https://js.dump.academy/code-and-magick');

  var dialogHandle = userDialog.querySelector('.setup-user-pic');
  dialogHandle.nextElementSibling.classList.add('hidden');

  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var mouseMoveHandler = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      userDialog.style.top = (userDialog.offsetTop - shift.y) + 'px';
      userDialog.style.left = (userDialog.offsetLeft - shift.x) + 'px';
    };

    var mouseUpHandler = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    };

    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
  });

  var shopElement = document.querySelector('.setup-artifacts-shop');
  var artifactsElement = document.querySelector('.setup-artifacts');
  var draggedItem = null;

  shopElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target.cloneNode();
      evt.dataTransfer.setData('text/plain', evt.target.alt);
      artifactsElement.style.outline = '2px dashed red';
    }
  });

  shopElement.addEventListener('dragend', function () {
    artifactsElement.removeAttribute('style');
  });

  artifactsElement.addEventListener('dragstart', function (evt) {
    if (evt.target.tagName.toLowerCase() === 'img') {
      draggedItem = evt.target;
      evt.dataTransfer.setData('text/plain', evt.target.alt);
      artifactsElement.style.outline = '2px dashed red';
    }
  });

  artifactsElement.addEventListener('dragend', function () {
    artifactsElement.removeAttribute('style');
  });

  artifactsElement.addEventListener('dragover', function (evt) {
    evt.preventDefault();
    return false;
  });

  artifactsElement.addEventListener('drop', function (evt) {
    if (evt.target.className === 'setup-artifacts-cell' && !evt.target.firstChild) {
      evt.target.style.backgroundColor = '';
      evt.target.appendChild(draggedItem);
      evt.preventDefault();
    }
  });

  artifactsElement.addEventListener('dragenter', function (evt) {
    if (evt.target.className === 'setup-artifacts-cell' && !evt.target.firstChild) {
      evt.target.style.backgroundColor = 'yellow';
      evt.preventDefault();

    }
  });

  artifactsElement.addEventListener('dragleave', function (evt) {
    if (evt.target.className === 'setup-artifacts-cell' && !evt.target.firstChild) {
      evt.target.style.backgroundColor = '';
      evt.preventDefault();
    }
  });
})();
