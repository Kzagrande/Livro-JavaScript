
//Declare, initialize counters and accumulators (global variables)
var numAccount = 0;
var valTotal = 0;

// Variable string thath acumulate the accounts
var answer = "";

function registerAccount() {

    // create a reference to elements page 
    var inDescript =  document.getElementById("inDescript");
    var inAmounth =  document.getElementById("inAmounth");
    var outAccountList =  document.getElementById("outAccountList");
    var outTotal =  document.getElementById("outTotal");

    // Get value of this elements
    var descript =  inDescript.value;
    var amounth = Number(inAmounth.value);

    // Check that the user entered the correct value in the fields
    if(amounth ==0 || isNaN(amounth) || descript == ""){
        alert("Please, insert a allowed number");
        inAmounth.focus();
       return;
    }

    // Add values to counters and accumulators
    numAccount++;
    valTotal = valTotal + amounth;

    // concatenate the accounts
     answer =  answer + descript + " $ : " + amounth.toFixed(2) +"\n";

    // change the answer tags content

    outAccountList.textContent = answer + "______________________________________"
    outTotal.textContent =  numAccount + " Account(s) - Total $: "+ valTotal.toFixed(2);

    // Clear fields and redirect focus
        inDescript.value =  "";
        inAmounth.value = "";
        inDescript.focus();;
        return;

}

    // Create a reference to the button and logs an event to the function
    var btRegister =  document.getElementById("btRegister")
    btRegister.addEventListener("click",registerAccount)
    
    var btRegister2 =  document.getElementById("btRegister2")
    btRegister2.addEventListener("click",registerAccount)