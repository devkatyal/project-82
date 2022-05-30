var mouse_event="empty"
var last_position_of_X, last_position_of_Y

color= "red"
width_line = 1 

canvas= document.getElementById("myCanvas")
ctx= canvas.getContext("2d")

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
mouse_event="mousedown"
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
mouse_event="mouseup"
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
mouse_event="mouseleave"
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
current_position_of_mouseX= e.clientX-canvas.offsetLeft
current_position_of_mouseY= e.clientY-canvas.offsetTop
if (mouse_event=="mousedown"){
    ctx.beginPath()
    ctx.strokeStyle=color
    ctx.lineWidth= width_line
    console.log("last position of X and Y coordinates=")
    console.log("x="+last_position_of_X+"y="+last_position_of_Y)
    ctx.moveTo(last_position_of_X,last_position_of_Y) 

    console.log("currnt position of X and Y coordinates=")
    console.log("x="+current_position_of_mouseX+"y="+current_position_of_mouseY)
    ctx.lineTo(current_position_of_mouseX,current_position_of_mouseY) 
    ctx.stroke()
}
last_position_of_X=current_position_of_mouseX
last_position_of_Y=current_position_of_mouseY
}
function clear(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height)
}