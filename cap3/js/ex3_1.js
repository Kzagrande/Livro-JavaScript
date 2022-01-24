function calcMedia() {

    // create reference to the page elements
    var inStudentName = document.getElementById("inStudentName");
    var inStudentGrade1 = document.getElementById("inStudentGrade1");
    var inStudentGrade2 = document.getElementById("inStudentGrade2");
    var outGradeAverage = document.getElementById("outGradeAverage");
    var outSituation = document.getElementById("outSituation");



    // get the content of the edit page fields
    var studentName = inStudentName.value;
    var studentGrade1 = Number(inStudentGrade1.value);
    var studentGrade2 = Number(inStudentGrade2.value);

    // calculate grade avarage
    var calcGrade = (studentGrade1 + studentGrade2) / 2;

    // Show grade and change outGradeAverage content
    outGradeAverage.textContent = "Your grade average is: " + calcGrade.toFixed(1);

    // Create the condition
    if (calcGrade >= 7) {
        outSituation.textContent = "Congrats " + studentName + " you were aproved";
        outSituation.style.color = "blue"; //create a color to the letters

    } else if (calcGrade >= 5) {

        outSituation.textContent = "Ops... " + studentName + " you need to take the exam";
        outSituation.style.color = "green";


    } else {
        outSituation.textContent = "Ops.. " + studentName + " you were not aproved";
        outSituation.style.color = "red";
    }



}

// create a reference to the element button
var btShowMedia = document.getElementById("btShowMedia");

// Log an event associate a button to create a function
btShowMedia.addEventListener("click", calcMedia)

