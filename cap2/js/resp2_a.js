function medicineDiscount(){
// create reference to the page elements

var inMedicine = document.getElementById("inMedicine");
var inPrice = document.getElementById("inPrice");
var outMedicine = document.getElementById("outMedicine");
var outPricePromo = document.getElementById("outPricePromo");

// get the content of the out and input fields

var medicine =  inMedicine.value;
var price =  Number(inPrice.value);

// Calculate The promo and show the medicine name


var calculateDiscount = Math.floor(price)*2;

// change de answer content

outMedicine.textContent = medicine + " Discount";
outPricePromo.textContent = "Get 2 for just $: " + calculateDiscount.toFixed(2);

}

// logs an event for the button and load a function

var btPromo= document.getElementById("btPromo");

btPromo.addEventListener("click", medicineDiscount );
