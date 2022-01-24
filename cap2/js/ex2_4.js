function CalculatePrice(){

// Create reference to the page elements

var inKilogram = document.getElementById("inKilogram");
var inGram = document.getElementById("inGram");
var outValor = document.getElementById("outValor");

// Get the content of the input fields 

var Kilogram = Number(inKilogram.value);
var Gram = Number(inGram.value);

// Calculate the  price to pay

var calculateGram = (Kilogram/1000)* Gram;


//Chage de answer content 

outValor.textContent = "Valor to Pay $: " + calculateGram.toFixed(2);

//Create a ref to btCalculate

}

var btCalculate =  document.getElementById("btCalculate");

 // logs an event for the button and load a function

 btCalculate.addEventListener("click", CalculatePrice);






