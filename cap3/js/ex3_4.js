function calcTimeZone(){

    // Create a reference to the page elements
    var inHours =  document.getElementById("inHours");
    var outFranceHours =  document.getElementById("outFranceHours");

    // get the value of this elements
    var brazilHours = Number (inHours.value);

    // creating a condition to verify that the user filled in the fields correctly
    if(inHours.value == "" || isNaN(brazilHours)){

        alert("Fill the fields correctly");
        inHours.focus();
        return;

    }
    var franceHours = brazilHours + 5;
  

    //creating a condition to calculate what time if it is 8 pm in Brazil
    if(franceHours >24){
        franceHours = franceHours-24
    }

      // Change a output content
      outFranceHours.textContent = "It's: " + franceHours.toFixed(.5) + " in France";

}

// create a reference to the button and logs an event associate to the function
var btCalc = document.getElementById("btCalc");
btCalc.addEventListener("click", calcTimeZone);