// Your code goes here

let funImg = document.querySelector('.img-content');
funImg.addEventListener('drag', function() {
    funImg.textContent = 'Coding is fun!';
});

let imageChange = document.querySelector('.bus-image');
imageChange.addEventListener('dragstart', function() {
    imageChange.classList.add('advChange');
});

let fBus = document.querySelector('h1');
fBus.addEventListener('mouseover', function() {
    fBus.textContent = 'Hop on the Fun Bus!';
});
fBus.addEventListener('mouseout', function() {
    fBus.textContent = 'Fun Bus';
});

let destPick = document.querySelector('.content-destination');
destPick.addEventListener('dblclick', function() {
    destPick.textContent = 'Paris, Lisbon, Barcelona, or Munich';
});

let navPlum = document.querySelector('.nav-container');
navPlum.addEventListener('mouseover', function() {
    navPlum.classList.add('navChange');
});
navPlum.addEventListener('mouseout', function() {
    navPlum.classList.add('navChange2');
});

let containerChange = document.querySelector('.intro');
containerChange.addEventListener('click', function() {
    containerChange.classList.add('introChange');
});

let footerGreen = document.querySelector('footer');
footerGreen.addEventListener('wheel', function() {
    footerGreen.classList.add('footerChange');
});

let slideClick = document.querySelector('.content-destination');
slideClick.addEventListener('click', function() {
    slideClick.classList.add('contentChange');
});