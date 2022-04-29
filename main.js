    //Create "mouseEvent" variable and set it as “Empty”.
var mouseEvent = "empty";

    //Create two variables "last_position_of_x" and  "last_position_of_y".
    var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    //Define two variables color and width_of_line and assign values.
    color = "Dark green";
    width_of_line = 6;

    canvas.addEventListener("mousedown", my_mousedown);

    function my_mousedown(e)
    {
        //Addictonal Activity start
        
        //Addictonal Activity ends

        mouseEvent = "mousedown";
    }

    //Create the addEventListener() function for mouseup(). 
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseUP";
}
    //Create the addEventListener() function for mouseleave(). 




canvas.addEventListener("mousemove", my_mousemove);
   //Create the my_mouseup() function. Assign “mouseUP” in the variable mouseEvent.
    function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        //Check whether the mouseEvent is "mousedown".  
        if (mouseEvent == "mouseDown") {
            ctx.bigenPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width_of_line;

            console.log("last position of x and y coordinates = ");
            console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
            ctx.moveTo(last_position_of_x, last_position_of_y);

            console.log("Current position of x and y coordinates = ");
            console.log("x = " + current_position_of_mouse_x + current_position_of_mouse_y);
            ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
            ctx.stroke();
        }



        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;

    }