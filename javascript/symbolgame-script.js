//put html elements into variables
const gamecontainer = document.getElementById("symbolgame");
const addicon = document.getElementById("addicon");
const subtracticon = document.getElementById("subtracticon");
const multiplyicon = document.getElementById("multiplyicon");
const divideicon = document.getElementById("divideicon");
var currentIcon;
//check what object was draggedthe object to be dragged
function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  }

