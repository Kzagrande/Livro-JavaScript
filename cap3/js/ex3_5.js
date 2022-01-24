function calcRoot(){

    // create a referente to the elementes page
    var inNumber = document.getElementById("inNumber");
    var outRoot = document.getElementById("outRoot");

    //get value of this elements
    number = Number(inNumber.value);

    // creating a condition to verify that the user filled in the fields correctly
    if(inNumber.value == "" || isNaN(number)){
        alert("Fill the correctly number");
        inNumber.focus();
        return;
    }

    //calculate number square root
    var root = Math.sqrt(number);

    // creating a condition if the root is not exact

    if(Math.floor(root) == root){

        outRoot.textContent = "The root of this number is: "+ root;
    }else{
        alert("Dont exist a exact root for " + number);
    }
}

    // create a reference to the button and logs an event associate to the function

    var btCalc = document.getElementById("btCalc btCalc2")
    btCalc.addEventListener("click", calcRoot);




