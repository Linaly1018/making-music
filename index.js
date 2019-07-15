var red = $('.red');
var orange = $('.orange');
var yellow = $('.yellow');
var green = $('.green');
var blue = $('.blue');
var purple = $('.purple');

var bruh = new Audio('./assets/bruh.mp3');
var ilb = new Audio('./assets/im_legally_blind.mp3');
var jeff = new Audio('./assets/my_name_is_jeff.mp3');
var shoes = new Audio('./assets/what-are-those.mp3');
var yeet = new Audio('./assets/yeet.mp3');
var youtube = new Audio('./assets/youtube.mp3');

red.on("click", playboi);
function playboi(){
  bruh.play();
}
orange.on("click", playboitwo);
function playboitwo(){
  ilb.play();
}
yellow.on("click", playboithree);
function playboithree(){
  jeff.play();
}
green.on("click", playboifour);
function playboifour(){
  shoes.play();
}
blue.on("click", playboifive);
function playboifive(){
  yeet.play();
}
purple.on("click", playboisix);
function playboisix(){
  youtube.play();
}
