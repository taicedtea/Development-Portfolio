var hue = Math.floor(Math.random() * 360);
var pastel = 'hsl(' + hue + ', 100%, 80%)';
var card = document.getElementsByName('card');




card.style.background = pastel;
