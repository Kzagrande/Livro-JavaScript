
    // Resquest a Number and repeat the reading while invalid
    do{
        var num =  Number(prompt("Número"));
        if(num == 0 || isNaN(num)){
            alert("Please, whrite a correct number");
        }
        }while(num == 0 || isNaN(num));

    // Declare and show the variable thath show pairs    
    var pairs = "The pairs between 1 and " + num + " is: "    

    // Isolate the first pair(To avoid the last comma)
     if(num>1){
         pairs =  pairs + "2"
     } 

     // Loop to acumulate pairs(start with 4 because 2 have alredy been assigned)
     for(i=4;i<=num;i=i+2){
         var pairs =  pairs + "," + i;
     }

     // Show pairs number list
     alert(pairs);



    
    
