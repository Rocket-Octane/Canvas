var mouseEvent = "empty";
var last_x, last_y;

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "black";
line_width = 3;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color = document.getElementById("color").value;
    line_width = document.getElementById("width").value;

    mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clinetY - canvas.offsetTop;

    if (mouseEvent == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;

        console.log("Last position of x and y coordinates = ");
        console.log(last_x, last_y);
        ctx.moveTo(last_x, last_y);

        console.log("Current position of x and y coordinates = ");
        console.log(current_x, current_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }

    last_x = current_x;
    last_y = current_y;

    mouseEvent = "mousemove";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "mouseleave";
}

function ClearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}