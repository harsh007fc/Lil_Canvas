let canvas = document.querySelector("#canvas");

let cElem = canvas.getContext("2d");  //to instantialte canvas context


// with this we can give them custom height and width
// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;




// to change fill color of canvas   --->fillStyle = "color"
cElem.fillStyle = "aqua"
// creating rectangle ---> fiilRect(x,y,width ,height)
cElem.fillRect(20,20,200,200);

cElem.fillStyle = "#444 "
cElem.fillRect(270,20,200,200);


cElem.fillStyle = "coral" //color for rectangualr border
cElem.strokeRect(300,300,150,150);

