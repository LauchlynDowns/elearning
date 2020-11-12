//put html elements into variables
const gamecontainer = document.getElementById("symbolgame");
const addicon = document.getElementById("addicon");
const subtracticon = document.getElementById("subtracticon");
const multiplyicon = document.getElementById("multiplyicon");
const divideicon = document.getElementById("divideicon");
var currentIcon;
//check what object was draggedthe object to be dragged
function drag(icon) {
    console.log(icon.id);
    currentIcon = icon.id;
    console.log(currentIcon)
}

function drop(icon) {
    console.log(icon.id);
}