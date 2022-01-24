 function CalcMultTable(){

    // Get the reference to the elements page
    var inNumber =  document.getElementById("inNumber");
    var outMultTable =  document.getElementById("outMultTable");


    // Convert the "inNumero" content Field
    var number =  Number(inNumber.value);

    // Check if the number is allowed
    if(number == 0 || isNaN(number)){
        alert("Please inform a allowed number")
        inNumber.focus();
        return;
    }

    // Create a string variable that will concatenate the answer
    var answer = "";

    // Create a repeat loop or "For"
    for(var i=1; i<=10; i++ ){
        // The answer variable acumullates news content
        answer = answer +number+ " x "+i+" = "+ number*i+"\n"; 
    }

    // The "pre" content is changed to show Multiplicate Table
    outMultTable.textContent = answer;

}

    // create a reference to the button and log an click event to the function
    var btShow = document.getElementById("btShow");
    btShow.addEventListener("click",CalcMultTable);
    var btShow2 = document.getElementById("btShow2");
    btShow2.addEventListener("click",CalcMultTable);