var bar = document.body.querySelector('#bar');
var circleContainer = document.body.querySelector('#circle-container');
var sineContainer = document.body.querySelector('#sine-container');

//insert array of 50 new divs into the DOM
var divs = [];
var arrlen = 500;
for(var i = 0; i < arrlen; i++){
    divs.push(document.createElement('div'));
    divs[i].classList.add('sine-element');
    var iteration = i/arrlen * 2 * Math.PI;
    divs[i].style.top = 250 + 250 * Math.sin(iteration) + 'px';
    sineContainer.appendChild(divs[i]);
}

console.log(divs)

function moveStuff(){
    moveBar();
    moveDots();
}

var start = 0;
function moveBar(){
    bar.style.top = 245 - 245 * Math.sin( start ) + 'px';
    bar.style.left = -245 * Math.cos( start ) + 245 + 'px';
    bar.style.width = 245 + 245 * Math.cos(start) + 'px';
    start += Math.PI/100/2.5;
}

var start2 = 0;
function moveDots(){
    for(var i=0; i<arrlen; i++){
        divs[i].style.left = (i+125*start)%arrlen+'px';
    }
    start2++;
    if(start2>=arrlen){
        start2=0;
    }
}
window.setInterval(moveStuff, 10);