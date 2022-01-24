function calculateTotalPrice(){

    //Create a reference for page elements

    var inMinPrice = document.getElementById("inMinPrice");
    var inUserTime = document.getElementById("inUserTime");
    var outTotal = document.getElementById("outTotal");

    // get the content of the in and output fields

    var minPrice = Number(inMinPrice.value);
    var userTime = Number(inUserTime.value);

    // calculate how much money user will pay

    var calculateMin = Math.ceil(minPrice/30*userTime);
    
    // change the answare content

    outTotal.textContent = "Amounth to play $: "+ calculateMin;


}

// logs an event for the button and load a function

var btCalculate =  document.getElementById("btCalculate");

    btCalculate.addEventListener("click",calculateTotalPrice );