function calcOddOrEven(){

    // Create a reference to elements page

    var inNumber = document.getElementById("inNumber");
    var outResult = document.getElementById("outResult");

    // get inNumber value
    var number= Number(inNumber.value); 

    // Calculate if this number is Odd or Even;


      // If not filled or not a number
      if(number == 0 || isNaN(number)){
        alert("Enter the correct withdrawal amount ");
        inNumber.focus();
        return;
    }
    
    if(number % 2 !=0 ){

        outResult.textContent = number + " is odd";
 
    }else{
        outResult.textContent = number + " is even";
    }

    // create a reference to the button and logs an event associate to the function


}


var btShow = document.getElementById("btShow");
btShow.addEventListener("click",calcOddOrEven);

var btShow = document.getElementById("btShow2");
btShow.addEventListener("click",calcOddOrEven);
