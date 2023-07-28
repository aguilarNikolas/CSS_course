// Just to test if the javascript was being called
// alert('this works!');

// First we need to get access of the DOM (Document object model) element, the DOM is essentially what the browser makes of our HTML code
// it parses the HTML and then creates a virtual  representation of it.

// declaring a variable: this variable should hold a value, it should hold a reference to HTML element, to the DOM element.

// the "document" object below is a default object that you can access in the Javascript code provided by the browser
// , it gives us access to the parsed document
// the "querySelector" method gives you access to an elements from CSS, just the first.
// if you use "querySelectorAll", it gives you a array

var backdrop = document.querySelector('.backdrop');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton= document.querySelector('.main-nav__item--cta');

// console.log(backdrop);
// console.dir(selectPlanButtons);
// console.dir(modal);

// backdrop.style.display = 'block';

// Adding an event listener


// creating a loop through the buttons list
for(var i=0; i < selectPlanButtons.length; i++){
    selectPlanButtons[i].addEventListener('click', function(){
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = 'open'; //This will actually overwrite the complete class list
        modal.classList.add('open');
        backdrop.classList.add('open');

    });

}

backdrop.addEventListener('click', function(){
    // mobileNav.style.display = 'none'
    mobileNav.classList.remove('open');
    closeModal();

});

if(modalNoButton){
    modalNoButton.addEventListener('click', closeModal);
}



function closeModal(){
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    if(modal){
        modal.classList.remove('open');
    }
    
    backdrop.classList.remove('open');

}

toggleButton.addEventListener('click', function() {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});


ctaButton.addEventListener('animationstart', function(event){
    console.log('animation started',event);
})

ctaButton.addEventListener('animationend', function(event){
    console.log('animation ended',event);
})

ctaButton.addEventListener('animationiteration', function(event){
    console.log('animation iteration',event);
})