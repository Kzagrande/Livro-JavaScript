function fruitRepeat(){

    var inFruit =  document.getElementById("inFruit");
    var inNumber =  document.getElementById("inNumber");
    var outFruit =  document.getElementById("outFruit");

    var fruit = inFruit.value;
    var number = Number(inNumber.value);

    if(number == 0 || isNaN(number)){
        alert("Insert a correct number");
        inNumber.value = "";
        inFruit.value = "";
        inNumber.focus();
        return;
    }

    var repeat = "";

    for (i=1; i<=number;i++){

        repeat = repeat + "*" + fruit;

    }

    outFruit.textContent =  repeat;

}

var btRepeat =  document.getElementById("btRepeat");
btRepeat.addEventListener("click",fruitRepeat);