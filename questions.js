var title = $("#question-title");
var options = $("#choices");

//$(document).ready(function(){

choiceA= $("#choices").append("<Input type='radio' id ='choiceA' name='multians' value='A'>A) </Input> <br>");
choiceB= $("#choices").append("<Input type='radio' name='multians' value='B'>B) </Input> <br>");
choiceC= $("#choices").append("<Input type='radio' name='multians' value='C'>C) </Input> <br>");
choiceD= $("#choices").append("<Input type='radio' name='multians' value='D'>D) </Input> <br>");

choiceA.id = choice1;
console.log(choiceA);
//});

$("#start").click(function(){
    title = $("#question-title").text("What is Jquery");
    options = $("choice1").append("Answer 1");

})