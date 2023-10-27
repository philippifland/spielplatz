var bar = document.body.querySelector('#bar');
var circleContainer = document.body.querySelector('#circle-container');
var sineContainer = document.body.querySelector('#sine-container');

//insert array of 50 new divs into the DOM
var divs = [];
var arrlen = 500;
for(var i = 0; i < arrlen; i++){
    divs.push(document.createElement('div'));
    divs[i].classList.add('sine-element');
    var position = i/arrlen * 2 * Math.PI;
    divs[i].style.top = 250 + 250 * Math.sin(position) + 'px';
    sineContainer.appendChild(divs[i]);
}

console.log(divs)

function moveStuff(){
    count();
    moveBar(2*Math.PI*position/arrlen);
    moveDots(position);
}

var position = 0;
function count(){
    position+=0.6;
    if(position>arrlen) position = 0;
}

function moveBar(y){
    bar.style.top = 250 - 250 * Math.sin( y ) + 'px';
    bar.style.left = -250 * Math.cos( y ) + 245 + 'px';
    bar.style.width = 100 + 250 + 250 * Math.cos(y) + 'px';
}

function moveDots(x){
    for(var i=0; i<arrlen; i++){
        divs[i].style.left = (i+x)%(arrlen)+'px';
    }
}
window.setInterval(moveStuff, 5);