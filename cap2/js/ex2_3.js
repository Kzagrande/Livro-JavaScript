function ShowDiscount(){

// Create and get references to the elements

var inVehicle = document.getElementById("inVehicle");
var inPrice = document.getElementById("inPrice");
var outVehicle = document.getElementById("outVehicle");
var outDownpayments = document.getElementById("outDownpayments");
var outInstallments = document.getElementById("outInstallments");

// get input fields content 

var vehicle = inVehicle.value;
var price =  inPrice.value;

// calculate the downpayment and installments

var downpayments = price*0.50;
var installments = downpayments/12;

// change paragraph content

outVehicle.textContent = "Promoction "+ vehicle;
outDownpayments.textContent = "Downpayment $ " + downpayments.toFixed(2);
outInstallments.textContent = "12x $" + installments.toFixed(2);   
}

// Create a reference to the btDiscount

var btDiscount = document.getElementById("btDiscount");

 // logs an event for the button and load a function

 btDiscount.addEventListener("click", ShowDiscount);



