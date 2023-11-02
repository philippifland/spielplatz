const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = window.innerHeight * 0.8;

var scaleFactor = 50;
ctx.translate(canvas.width / 2, canvas.height / 2);
ctx.scale(scaleFactor, -scaleFactor);

var XMIN = -scaleFactor, XMAX = scaleFactor;
var XRANGE = XMAX - XMIN;
var XSTEPS = 50*scaleFactor;

var f = function f(x) {
    return 1/20 * (Math.pow(x,4) + Math.pow(x,3) - 13*Math.pow(x,2) - x);
    };
function plotF(){
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3 / scaleFactor;
    ctx.beginPath();
    ctx.moveTo(XMIN, f(XMIN));
    for(var x = XMIN; x <= XMAX; x+= (XRANGE/XSTEPS)){
        ctx.lineTo(x, f(x));
    }
    ctx.stroke();
    ctx.closePath();
}
plotF();

function drawAxes(){
    ctx.strokeStyle = "rgba(0,0,0,0.5)"; 
    ctx.lineWidth = 1 / scaleFactor;
    ctx.beginPath();
    ctx.moveTo(XMIN, 0);
    ctx.lineTo(XMAX, 0);
    ctx.moveTo(0, XMIN);
    ctx.lineTo(0, XMAX);
    ctx.stroke();
    ctx.closePath();
}
//catch mousedown event
var isMouseDown = false;
var prevX, prevY;
canvas.addEventListener("mousedown", function(e){
    isMouseDown = true;
    prevX = e.clientX;
    prevY = e.clientY;
});
canvas.addEventListener("mouseup", function(e){
    isMouseDown = false;
});
//get drag event
canvas.addEventListener("mousemove", function(e){
    if(isMouseDown){
        var dx = e.clientX - prevX;
        var dy = e.clientY - prevY;
        ctx.translate(dx / scaleFactor, -dy / scaleFactor);
        prevX = e.clientX;
        prevY = e.clientY;
        ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
        drawAxes();
        plotF();
    }
});
canvas.addEventListener("wheel", function(e){
    var delta = e.wheelDelta ? e.wheelDelta : -e.detail;
    if(delta > 0){
        scaleFactor *= 1.1;
        ctx.scale(1.1, 1.1);
    }else{
        scaleFactor *= 0.9;
        ctx.scale(0.9, 0.9);
    }
    XMIN = -scaleFactor
    XMAX = scaleFactor;
    XRANGE = XMAX - XMIN;
    XSTEPS = 50*scaleFactor;

    ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
    drawAxes();
    plotF();
});

drawAxes();
