function calcSpeed(){

    // Create a reference to the elements page
    var inAllowedSpeed = document.getElementById("inAllowedSpeed");
    var inDriverSpeed =  document.getElementById("inDriverSpeed");
    var outResult = document.getElementById("outResult");



    // get values of the elements page
    var allowedSpeed = Number(inAllowedSpeed.value);
    var driverSpeed = Number(inDriverSpeed.value);

  // If speed not a number
  if(allowedSpeed == 0 || isNaN(allowedSpeed)){
    alert("Enter the correct allowed speed value ");
    allowedSpeed.focus();
    return;
  }
  if(driverSpeed == 0 || isNaN(driverSpeed)){
    alert("Enter the correct driver speed value ");
    driverSpeed.focus();
    return;
}

    //calculate speed and show alert according to conditions
    var fine = allowedSpeed + (allowedSpeed*(20/100));

    if(driverSpeed <= allowedSpeed){
        outResult.textContent = "Situation: no fine"; 
      

    }else if(driverSpeed  <= fine){
        outResult.textContent = "Situation: Light fine";
        

    }else if(driverSpeed > fine){
        outResult.textContent = "Situation: Heavy fine";
    }
    
}

 // create a reference to the button and logs an event associate to the function

 var btCheck =  document.getElementById("btCheck");
 btCheck.addEventListener("click",calcSpeed);

 var btCheck2 =  document.getElementById("btCheck2");
 btCheck.addEventListener("click",calcSpeed);
