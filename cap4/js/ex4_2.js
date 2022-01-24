function CalcDecTable(){

    // Get the reference to the elements page
    var inNumber =  document.getElementById("inNumber");
    var outDecTable =  document.getElementById("outDecTable");


    // Convert the "inNumero" content Field
    var number =  Number(inNumber.value);

    // Check if the number is allowed
    if(number == 0 || isNaN(number)){
        alert("Please inform a allowed number")
        inNumber.focus();
        return;
    }

    // Create a string variable that will concatenate the answer
    var answer = "Entre: "+number+" e 1: ";

    // Create a repeat loop or "For"
    for(var i=number; i>0; i=i-1 ){
        // The answer variable acumullates news content
        answer = answer + i + ",";
    }

    // The "pre" content is changed to show Multiplicate Table
    outDecTable.textContent = answer;

}

    // create a reference to the button and log an click event to the function
    var btShow = document.getElementById("btDecrease");
    btDecrease.addEventListener("click",CalcDecTable);
    var btShow2 = document.getElementById("btDecrease2");
    btDecrease2.addEventListener("click",CalcDecTable);