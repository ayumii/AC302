console.log("test..");

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
// ctx.moveTo(0,0);
// ctx.lineTo(200,100);
// ctx.stroke();

ctx.moveTo(0,10);
ctx.lineTo(110,50);
ctx.moveTo(90,50);
ctx.lineTo(210,10);
ctx.moveTo(190,10);
ctx.lineTo(300,50);
ctx.strokeStyle="blue";
ctx.lineWidth=5;
ctx.stroke();

ctx.fillStyle = 'rgb(200,50,10)';
ctx.fillRect(75,125,150,100);

ctx.strokeStyle = "green";
ctx.strokeRect(50,100,200,150);
// ctx.strokeStyle = "green";

ctx.clearRect(125,150,50,50);



//challenge1

var c1 = document.getElementById("one");
var ctx1 = c1.getContext("2d");
ctx1.fillStyle = 'rgb(0,100,100)';
ctx1.fillRect(0,0,150,150); //x,y, w, h
ctx1.fillRect(150,150,150,150);






