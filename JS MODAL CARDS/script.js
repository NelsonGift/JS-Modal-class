'use Strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosemodal = document.querySelector('.close-modal');
const btnOpenmodal = document.querySelectorAll('.show-modal');

// console.log (btnOpenmodal);

// for(i=0; i<btnOpenmodal.length; i++)
// console.log(btnOpenmodal[i].textContent);

const openModal = function(){
    modal.classList.remove('hidden');
    modal.classList.remove('hidden');
    };

for(i=0; i<btnOpenmodal.length; i++)
btnOpenmodal[i].addEventListener('click', openModal);


const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};
btnClosemodal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

//using escape key to close the modal window

document.addEventListener('keydown', function(e){
    // console.log(e.key);
    if(e.key === 'Escape' && !modal.classList.contains('hidden') ){
        closeModal(); 
    }

});


