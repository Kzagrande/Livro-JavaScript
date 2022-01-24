function calcCash(){
    //create a reference to the elemtens page

    var inCash = document.getElementById("inCash");
    var outCash__100 =document.getElementById("outCash__100");
    var outCash__50 =document.getElementById("outCash__50");
    var outCash__10 =document.getElementById("outCash__10");


    
    // Clear fields (if you choose the second option)
    outCash__100.textContent = "";
    outCash__50.textContent = "";
    outCash__10.textContent = "";

    // get value of inCash
    var cash = Number(inCash.value);

    // If not filled or not a number
        if(cash == 0 || isNaN(cash)){
            alert("Enter the correct withdrawal amount ");
            inCash.focus();
            return;
        }

    // check if the withdrawal is a multiple of ten

    if(cash % 10 !=0 ){
        alert("Icorrect value to the available notes")
        inCash.focus();
        return;

    }

    // calculate grades of 10,50,100

    var cash100 = Math.floor(cash/100);
    var rest = cash%100;

    var cash50 =  Math.floor(rest/50);
    rest = rest%50;
    
    var cash10 = Math.floor(rest/10);

    // Show notes only if the machine have

    if(cash100>0){
        outCash__100.textContent = "Ten bills: "+ cash100;

    } if(cash50>0){
        outCash__50.textContent = "Fift bills: "+ cash50;

    } if(cash10>0){
        outCash__10.textContent = "Hundred bills: "+cash10;

    } 
    
}
    // Create a reference to the button and log an event associate to the function

    var btCash = document.getElementById("btCash",);
    btCash.addEventListener("click", calcCash);

    var btCash2 = document.getElementById("btCash2",);
    btCash2.addEventListener("click", calcCash);







    






    

