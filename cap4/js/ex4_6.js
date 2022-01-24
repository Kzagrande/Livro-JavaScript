function checkPrimeNumbers(){

    // create reference to the elementes page
    var inNumber =  document.getElementById("inNumber");
    var outAnswer = document.getElementById("outAnswer");

    // gete value of elemente page
    number = Number(inNumber.value);

    //Check if user has filled the filds correctly
    if(number == 0 || isNaN(number)){
        alert("Fill a correct number");
        inNumber.value = "";
        inNumber.focus();
        return ;
    }

    var numDivisor = 0 ; // Declarate and init contator 

    //Run all possible divisors of the number
    for(i=1;i<=number;i++){
        
        // Iff the rest of number is 0 
        if(number%i ==0){
            numDivisor++; //increment accontant
        }
    }
        if(numDivisor == 2){
            outAnswer.textContent = number + " is a Prime number" ;
            inNumber.value = "";
        }else{
            outAnswer.textContent = number + " Is not a Prime Number";
            inNumber.value = "";
        }

    

}

    //create a reference to the button and log an event to the function
    var btCheck = document.getElementById("btCheck");
    btCheck.addEventListener("click",checkPrimeNumbers);
    
    var btCheck2 = document.getElementById("btCheck2");
    btCheck2.addEventListener("click",checkPrimeNumbers);
    
    


// or the better way that you can do this 


    // Declarate and initialize the variable flag

    /* var haveDivider =  0;

    for(i=2; i<=number/2; i++){

        if(number%i == 0){
            haveDivider = 1;
            break;
        }

        if(number >1 && !haveDivider){
            outAnswer.textContent = number + " is a Prime number" ;
            inNumber.value = "";
        }else{
            outAnswer.textContent = number + " Is not a Prime Number";
            inNumber.value = "";
        }

        }

        
     */