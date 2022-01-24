function createStars(){

    var inNumber =  document.getElementById("inNumber");
    var outStars =  document.getElementById("outStars");

    var number = Number(inNumber.value);

    if (number == 0 || isNaN(number)){
        alert("Insert a allowed number");
        inNumber.value = "";
        inNumber.focus();
        return;
    }

    stars = "";
     
    // cria uma repetição(Até o número de linhas informado)
    for(i=1;i<=number;i++){
    
    // dentro dessa repetição é criada uma outra(para cada linha, até i)

        for(j=1;j<=i;j++){
        stars =  stars + "*" ;
        }

        stars = stars + "\n";  // faz uma quebra de linha 
        
    }

    outStars.textContent =  stars ;



}




var btCreate =  document.getElementById("btCreate");
btCreate.addEventListener("click",createStars);

var btCreate2 =  document.getElementById("btCreate2");
btCreate2.addEventListener("click",createStars);