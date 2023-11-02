const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

var scaleFactor = 50;
ctx.translate(canvas.width / 2, canvas.height / 2);
ctx.scale(scaleFactor, -scaleFactor);

var XMIN = -5, XMAX = 10;
var XRANGE = XMAX - XMIN;
var XSTEPS = 75;

var f = function f(x) {
    return 1/20 * (Math.pow(x,4) + Math.pow(x,3) - 13*Math.pow(x,2) - x);
    };
function plotF(){
    ctx.strokeStyle = "rgba(0,0,0,1)"; 
    ctx.lineWidth = 1 / scaleFactor;
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
drawAxes();