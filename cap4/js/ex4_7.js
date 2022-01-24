function createStars(){

    var inNumber =  document.getElementById("inNumber");
    var outSpace =  document.getElementById("outSpace");

    var num =  Number(inNumber.value);

    if(num == 0 || isNaN(num)){
        alert("Fill the allowed number")
        inNumber.value = "";
        inNumber.focus();
        return;

        
        
    }

    var stars = "";

    for(i=1;i<=num;i++){
        if(i%2 == 1){
            stars = stars + "*";
            

        }else{
            stars = stars + "-";
        }
    }

    outSpace.textContent = stars;
    inNumber.value = "";
        inNumber.focus();

     
    
    

}




    var btFill = document.getElementById("btFill")
    btFill.addEventListener("click", createStars);

    var btFill2 = document.getElementById("btFill2")
    btFill2.addEventListener("click", createStars);