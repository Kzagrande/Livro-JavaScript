

function mouseCreate(){
    
    var inMouses = document.getElementById("inMouses");
    var inYears = document.getElementById("inYears");  
    var outResult = document.getElementById("outResult");

    var mouses =  Number(inMouses.value);
    var years =  Number(inYears.value);


    if(mouses < 2 || isNaN(mouses)){
        alert("Enter a number greater than a valid number and greater than 1 mouse");
        inMouses.value  = "";
        inYears.value  = "";
        inMouses.focus();
        return;

    }if(years == 0 || isNaN(years)){
        alert("Input a correct Number")
        inYears.value =  "";
        inMouses.value =  "";
        inYears.focus();
        return;}

        var total = 0;
        var answer= "";
        
       
        total = total + mouses;

        for(i=1;i<=years; i++){

            answer = answer +i +"º Ano : " + total+" Mouses" + "\n";
            total =  total*3;

            

        }

        
        outResult.textContent = answer;

        

}

var btShow =  document.getElementById("btShow");
btShow.addEventListener("click", mouseCreate)