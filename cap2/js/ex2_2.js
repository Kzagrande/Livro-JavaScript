

function convertMin(){

// Create a reference to the page elements

var inTitle =  document.getElementById("inTitle");
var inMintime = document.getElementById("inMintime");
var outTitle = document.getElementById("outTitle");
var outTime = document.getElementById("outTime");

// get content of the input fields

var title =  inTitle.value;
var Mintime =  inMintime.value;

// rounds down a split result

var hours = Math.floor(Mintime/60);

// get rest of split btwween two numbers

var restMin = Mintime%60;

// Change the answer paragraph content 

outTitle.textContent = title;
outTime.textContent = hours + " Hours and "+ restMin + " Minutes"
}

// Create a reference to the button element

var btConvert = document.getElementById("btConvert");

// logs an event for the button and load a function

btConvert.addEventListener("click", convertMin)