$(document).ready(function(){
//hides the end screen by default 
$("#end-screen").hide();
//sets the value of the final score span to 0
$("#final-score").val(0);

//creates variable for final-score span
var input = $('#final-score');

//function that on click starts a timer that counts down from 300 seconds
//It also starts the quiz
$("#start").click(function() {
    var count= 300;
    var counter =setInterval(timer, 1000); 
    function timer () {
        //every 1000 milliseconds the value of the count variable is reduced by 1
        count = count-1;
        //if the count variable reaches -1 it stops counting down 
        if (count<=-1){
            clearInterval(counter);
    
            return;
        }
        //displays the counter in the #time span
        $("#time").text(count + "secs");

        
    };

    //when the first question is submitted if the wrong answers are checked reduce the value of the count variable by 10 
    //this lowers the leftover time by 10 seconds 
    $("#submit1").click(function() {
        if ($('#choiceA:checked').length > 0 || $('#choiceB:checked').length > 0 || $('#choiceC:checked').length > 0) {
            count= count-10;
        }
            //if the right answer is checked create a variable newNumber and set it equal to the input value +1
            else if ($('#choiceD:checked').length>0){
                var newNumber = Number(input.val()) + 1;
                //set the input value and text equal to the new total value 
                input.val(newNumber);
                input.text(newNumber);

            }

    });

    //same for when question 2 is submitted
    $("#submit2").click(function() {
        if ($('#choiceA:checked').length > 0 || $('#choiceB:checked').length > 0 || $('#choiceC:checked').length > 0) {
            count= count-10;
        }
            else if ($('#choiceD:checked').length>0){
                var newNumber = Number(input.val()) + 1;
                input.val(newNumber);
                input.text(newNumber);
            }

    });

    //same for when question 3 is submitted
    $("#submit3").click(function() {
        if ($('#choiceA:checked').length > 0 || $('#choiceB:checked').length > 0 || $('#choiceC:checked').length > 0) {
            count= count-10;
        }
            else if ($('#choiceD:checked').length>0){
                var newNumber = Number(input.val()) + 1;
                input.val(newNumber);
                input.text(newNumber);
            }

    });

    //same for when question 4 is submitted
    $("#submit4").click(function() {
        if ($('#choiceA:checked').length > 0 || $('#choiceB:checked').length > 0 || $('#choiceC:checked').length > 0) {
            count= count-10;
        }
            else if ($('#choiceD:checked').length>0){
                var newNumber = Number(input.val()) + 1;
                input.val(newNumber);
                input.text(newNumber);
            }

    });

    //same for when question 5 is submitted
    $("#submit5").click(function() {
        if ($('#choiceA:checked').length > 0 || $('#choiceB:checked').length > 0 || $('#choiceC:checked').length > 0) {
            count= count-10;
        }
            else if ($('#choiceD:checked').length>0){
                var newNumber = Number(input.val()) + 1;
                input.val(newNumber);
                input.text(newNumber);
            }

    });

    //same for when question 6 is submitted
    $("#submit6").click(function() {
        if ($('#choiceA:checked').length > 0 || $('#choiceB:checked').length > 0 || $('#choiceC:checked').length > 0) {
            count= count-10;
        }
            else if ($('#choiceD:checked').length>0){
                var newNumber = Number(input.val()) + 1;
                input.val(newNumber);
                input.text(newNumber);
            }

    });

    //same for when question 7 is submitted
    $("#submit7").click(function() {
        if ($('#choiceA:checked').length > 0 || $('#choiceB:checked').length > 0 || $('#choiceC:checked').length > 0) {
            count= count-10;
        }
            else if ($('#choiceD:checked').length>0){
                var newNumber = Number(input.val()) + 1;
                input.val(newNumber);
                input.text(newNumber);
            }

    });

    //same for when question 8 is submitted
    $("#submit8").click(function() {
        if ($('#choiceA:checked').length > 0 || $('#choiceB:checked').length > 0 || $('#choiceC:checked').length > 0) {
            count= count-10;
        }
            else if ($('#choiceD:checked').length>0){
                var newNumber = Number(input.val()) + 1;
                input.val(newNumber);
                input.text(newNumber);
            }

    });

    //same for when question 9 is submitted
    $("#submit9").click(function() {
        if ($('#choiceA:checked').length > 0 || $('#choiceB:checked').length > 0 || $('#choiceC:checked').length > 0) {
            count= count-10;
        }
            else if ($('#choiceD:checked').length>0){
                var newNumber = Number(input.val()) + 1;
                input.val(newNumber);
                input.text(newNumber);
            }
    
    });
    //same for when question 10 is submitted
    $("#submit10").click(function() {
        console.log($("input[name=multians]:checked").length);
        if ($('#choiceA:checked').length > 0 || $('#choiceB:checked').length > 0 || $('#choiceC:checked').length > 0) {
            count= count-10;
        }
            else if ($('#choiceD:checked').length>0){
                var newNumber = Number(input.val()) + 1;
                input.val(newNumber);
                input.text(newNumber);
                console.log($("#final-score").val());
            }

    });
});

//create a highscores variable that gets the parsed highscores initals and puts them in an empty array
var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
//create a highscoresVal variable that gets the parsed highscore values and puts them in an empty array
var highscoresVal=JSON.parse(window.localStorage.getItem("highscoresVal")) || [];

//when the submit button on the end screen is clicked 
$("#submit").click(function(){ 
    //set the variable initial name to be that value of the initals input
    var initialName= $('#initials').val();
    //set the variable initialScore to be the value of the final-score span 
    var initialScore= $('#final-score').val();

    //hide the paragraphs of the end screen
    $("#end-screen p").hide();

    //appends a div with the words Score submitted! to the end screen
    $("#end-screen").append("<div> Score Submitted! </div>");

    //pushes the initals enterd in the #initals input at the end of the highscores array
    highscores.push(initialName);

    //pushes the score for the inital given to the end of the highscoresVal array 
    highscoresVal.push(initialScore);

    //stores the highscores initial and score value to local storage
    localStorage.setItem('highscores', JSON.stringify(highscores));
    localStorage.setItem('highscoresVal', JSON.stringify(highscoresVal));

});

    
});
//gets the highscore initals from local storage and sets them equal to the highscores array
var highscores= JSON.parse(localStorage.getItem('highscores'));
//gets the highscores value from local storage and sets them equal to the highscoresVal array
var highscoresVal= JSON.parse(localStorage.getItem('highscoresVal'));

//creates loop that for the length of the highscores array appends the highscores ordered list with the highscores and highscoresVal arrays 
for (var i=0; i< highscores.length; i++) {
    $("#highscores").append("<li>" + $(highscores)[i] + ":  " + $(highscoresVal)[i] + "</li>");

};

//When the clear highscores button is pressed the localStorage and the ordered list in the highscores page are cleared 
$("#clear").click(function(){
    localStorage.clear();
    $("ol").empty();

});
