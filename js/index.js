// Your code goes here

let funImg = document.querySelector('.img-content');
funImg.addEventListener('drag', function() {
    alert('Coding is not a drag with events!');
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
destPick.addEventListener('dblclick', function() {
    destPick.classList.add('destchange');
});