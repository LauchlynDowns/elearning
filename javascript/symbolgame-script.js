//put html elements into variables
const gamecontainer = document.getElementById("symbolgame");
const addicon = document.getElementById("addicon");
const subtracticon = document.getElementById("subtracticon");
const multiplyicon = document.getElementById("multiplyicon");
const divideicon = document.getElementById("divideicon");
const checkbutton = document.getElementById("checkbutton");
const subtractcontainer = document.getElementById("subtract");
const dividecontainer = document.getElementById("divide");
const multiplycontainer = document.getElementById("multiply");
const addcontainer = document.getElementById("add");
const correctmessage = document.getElementById("correctmessage");
//declare variable to hold number of correct elements
let correctcounter = 0;
//event listener to check for button click
checkbutton.addEventListener("click", function () {
    checkResult()
});



//code for drag/drop
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
    //call function to show button if ready
    DisplayButton();
}

function DisplayButton() {
    //get the number of items in the div that
    numberofitems = document.getElementById("draggablewords").childElementCount;
    //check if number of items in div is empty, if so display the check button
    if (numberofitems === 1) {
        console.log("div is empty");
        checkbutton.style.display = "block";
    } else {
        console.log("div has " + numberofitems + " in it")
    }
}



function checkResult() {
    //hide button
    //check subtract
    var subtractcontains = subtractcontainer.children.item(0).id;
    if (subtractcontains === "subtracticon") {
        var subtractcorrect = true;

    } else {
        var subtractcorrect = false;
        correctmessage.style.display = "none";
    };
    //check divide
    var dividecontains = dividecontainer.children.item(0).id;
    if (dividecontains === "divideicon") {
        var dividecorrect = true;
    } else {
        var dividecorrect = false;
        correctmessage.style.display = "none";
    };
    //check add
    var addcontains = addcontainer.children.item(0).id;
    if (addcontains === "addicon") {
        var addcorrect = true;
    } else {
        var addcorrect = false;
        correctmessage.style.display = "none";
    };
    //check multiply
    var multiplycontains = multiplycontainer.children.item(0).id;
    if (multiplycontains === "multiplyicon") {
        var multiplycorrect = true;
    } else {
        var multiplycorrect = false;
        correctmessage.style.display = "none";
    };

    if (subtractcorrect === true && dividecorrect === true && addcorrect === true && multiplycorrect === true) {
        checkbutton.style.display = "none";
        correctmessage.style.display = "block";
    } else {
        console.log("some are not correct, keep trying!");
        checkbutton.innerHTML = "some are not correct, keep trying!";
        correctmessage.style.display = "none";

    }
}
