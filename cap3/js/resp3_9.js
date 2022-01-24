function calcParking() {

    // Create a reference to the elements page
    var inCash = document.getElementById("inCash");
    var outTime = document.getElementById("outTime");
    var outRest = document.getElementById("outRest");

    // get values of the elements page
    cash = Number(inCash.value);


    // If cash not a number

    if (cash < 1 || isNaN(cash)) {
        alert("Insufficient or wrong value. Min value: 1");
        inCash.focus();
        return;
    }

    //calculate ramaining time and show The rest of your money

    var rest;
    var time;

    if (cash >= 3.00) {
        time = 120;
        rest = cash - 3.00;

    } else if (cash >= 1.75) {
        time = 60;
        rest = cash - 1.75;

    } else {
        time = 30;
        rest = cash - 1;

    }

outTime.textContent = "Time: " + time+ "min"
if(rest>0){
outRest.textContent = "Rest of your money is $: " + rest.toFixed(2);
}









}
// create a reference to the button and logs an event associate to the function

var btCash = document.getElementById("btCash");
btCash.addEventListener("click", calcParking);

var btCash2 = document.getElementById("btCash2");
btCash.addEventListener("click", calcParking);




/* var minTime = 30; (MINHA LÓGICA)
var price1 = 1.00
var price2 = 1.75;
var price3 = 3.00;

if(cash >= 1 && cash < price2){
  var rest = cash - price1;
  outTime.textContent =  "Minutes left: " + (minTime);
  outRest.textContent =  "Rest of your money is $: " + rest.toFixed(2);
  
}else if(cash >= 1 && cash < price3){
  var rest = cash - price2;
  outTime.textContent =  "Minutes left: " + (minTime*2);
  outRest.textContent =  "Rest of your money is $: " + rest.toFixed(2);


}else{
  var rest = cash - price3;
  outTime.textContent =  "Minutes left: " + (minTime*4);
  outRest.textContent =  "Rest of your money is $: " + rest.toFixed(2);
} */











