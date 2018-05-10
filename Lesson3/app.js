console.log("test....")

var c1 = document.getElementById("myCanvas1");
var ctx1 = c1.getContext("2d"); 
ctx1.beginPath();
ctx1.arc(150,150,120,0,6.28); // x,y, radius, start_angle, end_angle
ctx1.closePath();
ctx1.stroke();
ctx1.fillStyle = "cyan"; //define fill color
ctx1.fill();


var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d"); 
ctx2.beginPath();
ctx2.strokeStyle = "lime"; //outerline
ctx2.moveTo(150,25);  // coordinate 1 (top)
ctx2.lineTo(225,150); // coordinate 2 (right)
ctx2.lineTo(75,150);  //coordinate 3 (left)
ctx2.closePath(); //connect last point to the starting point
ctx2.stroke();
ctx2.fillStyle = "green"; //fill shape with colour
ctx2.fill();


var c3 = document.getElementById("myCanvas3");
var ctx3 = c3.getContext("2d"); 
ctx3.beginPath();
ctx3.strokeStyle = "blue";
ctx3.moveTo(150,25);
ctx3.lineTo(225,150);
ctx3.lineTo(150,275);
ctx3.lineTo(75,150);
ctx3.closePath(); 
ctx3.stroke();
ctx3.fillStyle = "red";
ctx3.fill();

var c4 = document.getElementById("myCanvas4");
var ctx4 = c4.getContext("2d");
ctx4.beginPath();
ctx4.strokeStyle = "red";
ctx4.moveTo(0,0);
ctx4.lineTo(300,300);
ctx4.lineTo(300,0);
ctx4.lineTo(0,300);
ctx4.closePath();
ctx4.stroke();
ctx4.fillStyle="blue";
ctx4.fill();


var c5 = document.getElementById("myCanvas5");
var ctx5 = c5.getContext("2d");
ctx5.beginPath();
ctx5.strokeStyle = "orange";
ctx5.moveTo(0,0);
ctx5.lineTo(300,300);
ctx5.lineTo(300,150);
ctx5.lineTo(0,150);
ctx5.lineTo(0,0);

ctx5.moveTo(300,0);
ctx5.lineTo(0,300);
ctx5.lineTo(150,300);
ctx5.lineTo(150,0);

ctx5.closePath();
ctx5.stroke();
ctx5.fillStyle = "brown";
ctx5.fill();


var c6 = document.getElementById("myCanvas6");
var ctx6 = c6.getContext("2d");
ctx6.beginPath();
ctx6.strokeStyle = "grey";
ctx6.moveTo(150,50);  //coordinate 1 (top)
ctx6.lineTo(200,200);
ctx6.arc(150,200,50,0,3.14);
ctx6.closePath();  //or ctx6.lineTo(150,50);
ctx6.stroke();
ctx6.fillStyle = "silver";
ctx6.fill();














