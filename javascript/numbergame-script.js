const sum = document.getElementById("sum");
const submitButton = document.getElementById("submitbutton");
const sumpreview = document.getElementById("sum");
const answerinput = document.getElementById("answerinput");

//generate a number when the page is loaded
window.addEventListener('load', (event) => {
  generateNumber();
});
//look for button click and if clicked, call the function to validate input
submitbutton.addEventListener("click", function () { validateInput() })



function generateNumber() {
  //array to store the numbers
  var numbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20"
  ];

  let firstnumber = numbers[Math.floor(Math.random() * numbers.length)];
  let secondnumber = numbers[Math.floor(Math.random() * numbers.length)];
  console.log(firstnumber, secondnumber)
  totalsum(firstnumber, secondnumber);
}

function totalsum(fnum, snum) {
  var displaySum = fnum + "+" + snum + " = ?";
  fnum = parseInt(fnum);
  snum = parseInt(snum);
  totalofSum = fnum + snum;
  initialise(displaySum);
}


function initialise(displaySum) {
  sumpreview.innerHTML = displaySum;
}


function validateInput() {
  if (answerinput.value.length === 0) {
    console.log("answerinput is empty!")
    //send message saying please enter answer

  } else {
    if (answerinput.value == totalofSum) {
      //correct
      answerinput.value = ""
      generateNumber();
    } else {
      submitButton.textContent = "incorrect. try again"
      submitButton.style.width = "70%"
    }

  }
}
