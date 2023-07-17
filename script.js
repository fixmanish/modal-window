'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// selecting all the modal windows at once
// gives a list as array containing class selectors elements
const openModal = document.querySelectorAll('.show-modal');

const closeModal = document.querySelector('.close-modal');

// dispaly the model after pressing
const btnsDisplayModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

// hide modal after pressing
const btnsHideModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let modalButton = 0; modalButton < openModal.length; modalButton++) {
  openModal[modalButton].addEventListener('click', btnsDisplayModal);
}

// closing modal window by cross button
closeModal.addEventListener('click', btnsHideModal);

// closing modal window by outside clicks
overlay.addEventListener('click', btnsHideModal);

modal.setAttribute('tabindex', 0);
modal.focus();

document.addEventListener('keydown', function (event) {
  console.log(event);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    btnsHideModal();
  }
});
