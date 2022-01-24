
function CalcPerfectNumber() {

    var inNumber = document.getElementById("inNumber");
    var outResult = document.getElementById("outResult");
    var outPerfect = document.getElementById("outPerfect");

    var number = Number(inNumber.value);

    if (number == 0 || isNaN(number)) {
        alert("Insert a correct number");
        inNumber.value = "";
        inNumber.focus();
        return;
    }
    /* 
        Em Matemática, um número perfeito é um número natural 
        para o qual a soma de todos os seus divisores naturais próprios 
        é igual ao próprio número
     */

    var answer = "Divider to  " + number+ ": 1";
    var acumulate = 1;

    for (i = 2; i <= number/2; i++) {
        if(number % i == 0) {
            answer = answer + " , " + i;
            acumulate = acumulate + i;
        }
    } 
            answer = answer + " (Soma: " + acumulate + ") ";

            outResult.textContent =  answer;

        
        
        if(acumulate == number){
           
            outPerfect.textContent =  number+ " Is a Perfect Number";
            
        
        }else
        
        outPerfect.textContent =  number+ " Is a not  Perfect Number";
    }






var btShow = document.getElementById("btShow");
btShow.addEventListener("click", CalcPerfectNumber);

var btShow2 = document.getElementById("btShow2");
btShow2.addEventListener("click", CalcPerfectNumber);