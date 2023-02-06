$("#btnsend").click(function () {
    //create the category variable
    var assignment = parseFloat($("#assignmentpct").val());
    var groupproject = parseFloat($("#groupprojectpct").val());
    var quizzes = parseFloat($("#quizpct").val());
    var midtermexam = parseFloat($("#midtermexampct").val());
    var finalexam = parseFloat($("#finalexampct").val());
    var intex = parseFloat($("#intexpct").val());


    //Calculate total percentage
    var totalPercentage = (assignment + groupproject + quizzes + midtermexam + finalexam + intex);
    $("#percentage").text(totalPercentage + "%");


    //calculate the letter grade
    var letterGrade;
    if (totalPercentage >= 94) {
        letterGrade = "A";
    } else if (totalPercentage >= 90) {
        letterGrade = "A-";
    } else if (totalPercentage >= 87) {
        letterGrade = "B+";
    } else if (totalPercentage >= 84) {
        letterGrade = "B";
    } else if (totalPercentage >= 80) {
        letterGrade = "B-";
    } else if (totalPercentage >= 77) {
        letterGrade = "C+";
    } else if (totalPercentage >= 74) {
        letterGrade = "C";
    } else if (totalPercentage >= 70) {
        letterGrade = "C-";
    } else if (totalPercentage >= 67) {
        letterGrade = "D+";
    } else if (totalPercentage >= 64) {
        letterGrade = "D";
    } else if (totalPercentage >= 60) {
        letterGrade = "D-";
    } else {
        letterGrade = "E";
    }
    $("#letter-grade").text(letterGrade);

});


        
