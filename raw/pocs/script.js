let canvas = document.querySelector("#canvas");

let cElem = canvas.getContext("2d");  //to instantialte canvas context


// // with this we can give them custom height and width
// // canvas.height = window.innerHeight;
// // canvas.width = window.innerWidth;




// // to change fill color of canvas   --->fillStyle = "color"
// cElem.fillStyle = "aqua"
// // creating rectangle ---> fiilRect(x,y,width ,height)
// cElem.fillRect(20,20,200,200);

// cElem.fillStyle = "#444 "
// cElem.fillRect(270,20,200,200);



// cElem.lineWidth = 10;
// cElem.fillStyle = "coral" //color for rectangualr border
// cElem.strokeRect(300,300,150,150); //border like rect eith it


// //clearrect to clear a rectangle

// cElem.clearRect(280,30,180,180);



// cElem.font="50px Arial"
// cElem.fillStyle = "green"
// cElem.fillText("hello harsh",500,150);






// cElem.lineWidth = 2;
// cElem.strokeStyle = "maroon";
// cElem.strokeText('hello MAM',600,400)


// PATHS

cElem.beginPath();
cElem.moveTo(50,50);
cElem.lineTo(200,50);
cElem.lineTo(125,150);
// cElem.lineTo(50,50);//also use closepath
cElem.closePath(); //it has same efect as abocve line
cElem.fillStyle = "red";
cElem.fill();
cElem.stroke();


