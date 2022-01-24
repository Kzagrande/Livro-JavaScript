alert("Type 0 to exit program");

do {

    var num = Number(prompt("Put a Number"));


    if (num == 0) {
        var exit = confirm(" Confirm your exit ?")
        if (exit) {
            break;
        } else {
            continue;
        }
    }

    if (num % 2 == 0) { 
        alert("Twice the number: " + num + " is: " + num * 2);
    } else {
        alert("Triple the number: " + num + " is: " + num * 3);

    }
} while (true);

    alert("Bye Bye...");


 