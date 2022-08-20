'use strict';
// SELECT ELEMENTS
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModals = document.querySelectorAll('.show-modal')


// FUNCTION TO CONTROL MODALS
const openModal = () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// FOR LOOP TO SELECT EACH BUTTON AND ADD EVENT
for(let i = 0; i < btnOpenModals.length; i++){
    btnOpenModals[i].addEventListener('click', openModal );
};

// CLOSE MODALS
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
// KEYBOARD EVENT
document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
})
        