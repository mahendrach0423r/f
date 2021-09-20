canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "black";
width_of_line = "2";

var width = screen.width;
var height = screen.height;

new_width = width - 70;
new_height = height - 300;

if ( width < 992)
{
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e)
{
    console.log("my_touchstart");

    last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);

function my_touchmove(e)
{
    console.log("my_touchmove");

    current_location_of_x = e.touches[0].clientX - canvas.offsetLeft;
    current_location_of_y = e.touches[0].clientY - canvas.offsetTop;


    ctx.beginPath();
    ctx.strokeStyle = document.getElementById("color_input").value;
    ctx.lineWidth = document.getElementById("width_of_line").value;


    console.log("last position of x and y coordinates=");
    console.log("x=" + last_position_of_x + "y=" + last_position_of_y);
    ctx.moveTo(last_position_of_x, last_position_of_y);


    console.log("current position of x and y coordinates=");
    console.log("x=" + current_location_of_x + "y=" + current_location_of_y);
    ctx.lineTo(current_location_of_x, current_location_of_y);
    ctx.stroke();

    last_position_of_x = current_location_of_x;
    last_position_of_y = current_location_of_y;



  

}

