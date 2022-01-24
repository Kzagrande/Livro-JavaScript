function calcTriangle(){

    // Create a reference to the elements page
    var inSideA = document.getElementById("inSideA");
    var inSideB = document.getElementById("inSideB");
    var inSideC = document.getElementById("inSideC");
    var outSituation = document.getElementById("outSituation")
    var outType = document.getElementById("outType");

      // get values of the elements page
      var sideA = Number(inSideA.value);
      var sideB = Number(inSideB.value);
      var sideC = Number(inSideC.value);

      // If cash not a number

    if (sideA==0 || sideB==0 || sideC == 0 || isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
        alert("input a correct number");
        inCash.focus();
        return;
    }

    //calculate whether the sides can create a triangle and what type of triangle it is

    

    if(sideA > (sideB+sideC) || sideB > (sideA+sideC) || sideC>(sideA+sideB)){
        outSituation.textContent = " Sides can't form a triangle";
        outType.textContent = "";
        
    }else if(sideA == sideB  && sideA==sideC){
        outSituation.textContent = " Sides can form  triangle";
        outType.textContent = " Type: Equilátero";

    }else if(sideA != sideB  && sideB != sideC && sideC != sideA ){
        outSituation.textContent = " Sides can form  triangle";
        outType.textContent = " Type: Escaleno ";

    }else {
        outSituation.textContent = " Sides can form  triangle";
        outType.textContent = " Type: Isóceles";
    }


}

// create a reference to the button and logs an event associate to the function

var btCheck = document.getElementById("btCheck");
btCheck.addEventListener("click", calcTriangle);

var btCheck = document.getElementById("btCheck2");
btCheck.addEventListener("click", calcTriangle);


/* else if(sideA == sideB  != sideC || sideB == sideC != sideA || sideC==sideA !=sideB){
        outSituation.textContent = " Sides can form  triangle";
        outType.textContent = " Type: Isóceles";
       

    } */