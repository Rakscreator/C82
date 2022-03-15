var mouse_event = "empty";
var last_position_of_x,last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "black";
line_width = 2;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(a){
    color = document.getElementById("color").value;
    line_width = document.getElementById("width_line").value;
    mouse_event = "mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(b){
    current_position_of_x = b.clientX - canvas.offsetLeft;
    current_position_of_y = b.clientY - canvas.offsetTop;

    if(mouse_event == "mouseDown"){

        ctx.beginPath();
        ctx.strokeStyle = color ;
        ctx.lineWidth = line_width ;

        console.log("last positions of x and y = ")
        console.log("x = " + last_position_of_x + " y = " + last_position_of_y);

        ctx.moveTo(last_position_of_x,last_position_of_y);
        
        console.log("current positions of x and y = ")
        console.log("x = " + current_position_of_x + " y = " + current_position_of_y);

        ctx.lineTo(current_position_of_x,current_position_of_y);
        ctx.stroke();
        
    }

    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(c){
    mouse_event = "mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(d){
    mouse_event = "mouseLeave";
}

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}