console.log("test....")

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d"); //gives access to all 2d canvas methods such as moveTo, lineTo and stroke to draw shapes
// ctx.moveTo(0,0); //starting point
// ctx.lineTo(200, 100); //defines where you want to end your line


ctx.moveTo(0,10);
ctx.lineTo(110,50);
ctx.moveTo(90,50);
ctx.lineTo(210,10);
ctx.moveTo(190,10);
ctx.lineTo(300,50)
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.stroke(); //go ahead and draw our shape

ctx.fillStyle = 'rgb(200,50,10)';
ctx.fillRect(75,125,150,100);

ctx.strokeStyle = "green";
ctx.strokeRect(50,100,200,150);
// ctx.strokeStyle = "green";

ctx.clearRect(125,150,50,50);




//challenge 1
var c1 = document.getElementById("one");
var ctx1 = c1.getContext("2d");
ctx1.fillStyle = 'rgb(0,100,100)';
ctx1.fillRect(0,0,150,150);
ctx1.fillRect(150,150,150,150);

//chalenge 2
var c2 = document.getElementById("two");
var ctx2 = c2.getContext("2d");
ctx2.fillStyle = 'rgb(0,100,100)';

/**ctx2.fillRect(0,0,150,150);
ctx2.clearRect(15,15,120,120);
ctx2.fillRect(150,0,150,150);
ctx2.clearRect(165,15,120,120);
ctx2.fillRect(0,150,150,150);
ctx2.clearRect(15,165,120,120);
ctx2.fillRect(150,150,150,150);
ctx2.clearRect(165,165,120,120);**/

ctx2.fillRect(0,0,300,300);
ctx2.clearRect(20,20,120,120);
ctx2.clearRect(160,20,120,120);
ctx2.clearRect(20,160,120,120);
ctx2.clearRect(160,160,120,120);

//challenge 3
var c3 = document.getElementById("three");
var ctx3 = c3.getContext("2d");
ctx3.fillStyle = 'rgb(0,100,100)';

/** ctx3.fillRect(0,0,100,100);
ctx3.fillRect(200,0,100,100);
ctx3.fillRect(100,100,100,100);
ctx3.fillRect(0,200,100,100);
ctx3.fillRect(200,200,100,100);

OR **/

ctx3.fillRect(0,0,300,300);
ctx3.clearRect(0,100,100,100);
ctx3.clearRect(100,0,100,100);
ctx3.clearRect(200,100,100,100);
ctx3.clearRect(100,200,100,100);

//challenge 4
var c4 = document.getElementById("four");
var ctx4 = c4.getContext("2d");
ctx4.fillStyle = 'rgb(0,100,100)';
var x = 0;
var y = 0;
var height = 300;
var width = 300;
ctx4.fillRect(x,y, width, height);

// count = 0 
while(width > 0){
	// count++
	// console.log("start x: " + x + " y: " + y + " width: " + width + " height: " + height);

	x += 10;
	y += 10;
	width -= 20;
	height -= 20;
	ctx4.clearRect(x,y,width,height);

	x += 10;
	y += 10;
	width -= 20;
	height -= 20;
	ctx4.fillRect(x,y,width,height);

	// console.log("x: " + x + " y: " + y + " width: " + width + " height: " + height);

}
// console.log("count: " + count);





