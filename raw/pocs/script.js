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

// cElem.beginPath();
// cElem.moveTo(50,50);
// cElem.lineTo(200,50);
// cElem.lineTo(125,150);
// // cElem.lineTo(50,50);//also use closepath
// cElem.closePath(); //it has same efect as abocve line
// cElem.fillStyle = "red";
// cElem.fill();
// cElem.stroke();


// cElem.beginPath();
// cElem.moveTo(250,50);
// cElem.lineTo(400,50);
// cElem.lineTo(325,150);
// // cElem.lineTo(50,50);//also use closepath
// cElem.closePath(); //it has same efect as abocve line
// cElem.fillStyle = "green";
// cElem.fill();
// cElem.stroke();


// cElem.beginPath();
// cElem.moveTo(450,50);
// cElem.lineTo(600,50);
// cElem.lineTo(525,150);
// // cElem.lineTo(50,50);//also use closepath
// cElem.closePath(); //it has same efect as abocve line
// cElem.fillStyle = "yellow";
// cElem.fill();
// cElem.stroke();


// // now lets make a smiley
// let centerX = canvas.width/2;
// let centerY = canvas.height/2;
// cElem.lineWidth = 10;
// cElem.beginPath();
// cElem.fillStyle = "blue"
// cElem.arc(centerX,centerY,200,0,Math.PI * 2);

// // moto for mouth
// cElem.moveTo(centerX + 150,centerY);

// // drawing mouth
// cElem.arc(centerX,centerY,150,0,Math.PI ,false);


// // move to left eye
// cElem.moveTo(centerX - 70,centerY - 100);

// // draw the left eye
// cElem.arc(centerX - 100,centerY - 100,30,0,Math.PI *2);

// // move to center
// cElem.moveTo(centerX + 130,centerY - 100);


// cElem.arc(centerX + 100,centerY - 100,30,0,Math.PI *2);

// cElem.stroke();
// // cElem.fill();




///ANIMATIONS
//lets draw an animation

let circle = {
    x:200,
    y:200,
    size:30,
    dx:6,
    dy:5
};

function drawCircle(){
    cElem.beginPath();
    cElem.arc(circle.x,circle.y,circle.size,0,Math.PI * 2);
    cElem.fillStyle = "grey";
    cElem.fill();
}


function update(){

    cElem.clearRect(0,0,canvas.width,canvas.height);
    drawCircle();
    //change position
    circle.x += circle.dx;
    circle.y += circle.dy;


    // detect side walls
    if(circle.x + circle.size > canvas.width || circle.x - circle.size < 0){
        circle.dx *= -1;
    }

    // detect top and bottom walls
    if(circle.y + circle.size > canvas.width || circle.y - circle.size < 0){
        circle.dy *= -1;
    }


    requestAnimationFrame(update);

}

update();