let nav_btn = document.querySelector('.mobile-btn');
let nav_header = document.querySelector('.header');
let toggleNavbar = () =>{
nav_header.classList.toggle('active')
}
nav_btn.addEventListener('click', () => toggleNavbar());

// =====slides======
let myslide = document.querySelectorAll('.myslide');
let dot = document.querySelectorAll('.dots');

let counter = 1;
fun(counter);

let timer = setInterval(autoslide, 8000);

function autoslide(){
    counter += 1;
    fun(counter);
}

function plusSlides(n){
    counter += n;
    fun(counter);
    resetTimer();
}

function currentSlide(n){
    counter = n;
    fun(counter);
    resetTimer();
}

function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoslide, 8000);
}

function fun(n){
    let i;
    for (let i = 0; i < myslide.length; i++){
        myslide[i].style.display = "none";
    }
    for (let i = 0; i < dot.length; i++){
        dot[i].classList.remove('active1');
    }
    if (n > myslide.length) {
        counter = 1;
    }
    if(n < 1){
        counter = myslide.length;
    }
    myslide[counter - 1].style.display = "block";
    dot[counter - 1].classList.add('active1');
}

// =====About us=====

function readMoreLess(){
    let dots1 = document.getElementById("dots1");
    let invisible = document.getElementById("invisibleText");
    let btnTxt = document.getElementById("btn");
    if(dots1.style.display !== "none"){
        dots1.style.display = "none";
        invisible.style.display = "inline";
        btnTxt.innerHTML = "READ LESS"
    }
    else{
        dots1.style.display = "inline";
        invisible.style.display = "none";
        btnTxt.innerHTML = "READ MORE";
    }
}

// ==========Contact=====

let form = document.querySelector('form');
form.addEventListener("submit", (e) => {
    e.preventDefault;
    if(!validiteForm(form)) return;
    alert('Message sent successfully')
});
let validiteForm = (form) => {
    let valid = true;
    let name = form.querySelector('.name');
    let email = form.querySelector('.email');
    let message = form.querySelector('.message');

    if(name.value === ''){
    giveError(name, "Please enter your name");
    valid = false;
    }

    let  emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let emailValue = email.value;
    if(!emailRegex.test(emailValue)){
        giveError(email, "Please enter your email");
        valid = false;
    }

    if(valid) {
        return true;
    }

    if(message.value === ''){
        giveError(message, "Please enter your message");
        valid = false;
        }

};
let giveError = (field, message) => {
    let parentElement = field.parentElement;
    parentElement.classList.add("error");
    let existingError = parentElement.querySelector('.err-msg')

    if (existingError){
        existingError.remove()
    }
    let error = document.createElement('span');
    error.textContent = message;
    error.classList.add('err-msg');
    parentElement.appendChild(error); 
};

let inputs = document.querySelectorAll('input');
let textarea = document.querySelectorAll('textarea');

let allFields = [... inputs, ...textarea];

allFields.forEach((field) => {
    field.addEventListener('input', () => {
    removeError(field);
    });

});

let removeError = (field) => {
    let parentElement = field.parentElement;
    parentElement.classList.remove('error');
    let error = parentElement.querySelector('err-msg');
    if(error) {
        error.remove(); 
    }
}