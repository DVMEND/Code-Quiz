//created variables for the question and choice placeholder html 
var title = $("#question-title");
var options = $("#choices");

$(document).ready(function(){

    //appends html into choices div that adds radio inputs with text next to them.
    $("#choices").append("<Input type='radio' id ='choiceA' name='multians' value='A'>A) <br> <br>");
    $("#choices").append("<Input type='radio' id ='choiceB' name='multians' value='B'>B) <br> <br>");
    $("#choices").append("<Input type='radio' id ='choiceC' name='multians' value='C'>C) <br> <br>");
    $("#choices").append("<Input type='radio' id ='choiceD' name='multians' value='D'>D) <br> <br>");

    //Adds buttons that are going to be used to submit answers
    submitButtonA= $("#questions").append("<button id='submit1'> Submit </button>");
    submitButtonB= $("#questions").append("<button id='submit2'> Submit </button>");
    submitButtonC= $("#questions").append("<button id='submit3'> Submit </button>");
    submitButtonD= $("#questions").append("<button id='submit4'> Submit </button>");
    submitButtonE= $("#questions").append("<button id='submit5'> Submit </button>");
    submitButtonF= $("#questions").append("<button id='submit6'> Submit </button>");
    submitButtonG= $("#questions").append("<button id='submit7'> Submit </button>");
    submitButtonH= $("#questions").append("<button id='submit8'> Submit </button>");
    submitButtonI= $("#questions").append("<button id='submit9'> Submit </button>");
    submitButtonJ= $("#questions").append("<button id='submit10'> Submit </button>");

//Hides the submit buttons before they are used
    $("#submit2, #submit3, #submit4, #submit5, #submit6, #submit7, #submit8, #submit9, #submit10").hide();

});

//Adds first question when the start button is pressed 
$("#start").click(function(){
    title = $("#question-title").text("What is JQuery?");
    //hides the start button
    $("#start").hide();
    $("#questions").removeClass("hide");

    $('#choiceA')[0].nextSibling.data = 'A) Choice A';
    $('#choiceB')[0].nextSibling.data = 'B) Choice B';
    $('#choiceC')[0].nextSibling.data = 'C) Choice C';
    $('#choiceD')[0].nextSibling.data = 'D) Choice D';


});
//question2
$(document).ready(function(){
    $('#submit1').click(function(){
        title = $("#question-title").text("What is HTML?");
        $('#choiceA')[0].nextSibling.data = 'A) Choice E';
        $('#choiceB')[0].nextSibling.data = 'B) Choice F';
        $('#choiceC')[0].nextSibling.data = 'C) Choice G';
        $('#choiceD')[0].nextSibling.data = 'D) Choice H';
        //hides first button and shows the second 
        $("#submit1").hide();
        $("#submit2").show();

    });
});
//question3
$(document).ready(function(){
    $('#submit2').click(function(){
        title = $("#question-title").text("What is Bootstrap?");
        $('#choiceA')[0].nextSibling.data = 'A) Choice I';
        $('#choiceB')[0].nextSibling.data = 'B) Choice J';
        $('#choiceC')[0].nextSibling.data = 'C) Choice K';
        $('#choiceD')[0].nextSibling.data = 'D) Choice L';
        $("#submit2").hide();
        $("#submit3").show();
    
    });
});
//question4
$(document).ready(function(){
    $('#submit3').click(function(){
        title = $("#question-title").text("What is Figma?");
        $('#choiceA')[0].nextSibling.data = 'A) Choice M';
        $('#choiceB')[0].nextSibling.data = 'B) Choice N';
        $('#choiceC')[0].nextSibling.data = 'C) Choice O';
        $('#choiceD')[0].nextSibling.data = 'D) Choice P';
        $("#submit3").hide();
        $("#submit4").show();
    
    });
});
//question5
$(document).ready(function(){
    $('#submit4').click(function(){
        title = $("#question-title").text("What are classes?");
        $('#choiceA')[0].nextSibling.data = 'A) Choice Q';
        $('#choiceB')[0].nextSibling.data = 'B) Choice R';
        $('#choiceC')[0].nextSibling.data = 'C) Choice S';
        $('#choiceD')[0].nextSibling.data = 'D) Choice T';
        $("#submit4").hide();
        $("#submit5").show();
    
    });
});
//question6
$(document).ready(function(){
    $('#submit5').click(function(){
        title = $("#question-title").text("What are for loops?");
        $('#choiceA')[0].nextSibling.data = 'A) Choice U';
        $('#choiceB')[0].nextSibling.data = 'B) Choice V';
        $('#choiceC')[0].nextSibling.data = 'C) Choice W';
        $('#choiceD')[0].nextSibling.data = 'D) Choice X';
        $("#submit5").hide();
        $("#submit6").show();
    
    });
});
//question7
$(document).ready(function(){
    $('#submit6').click(function(){
        title = $("#question-title").text("What is javascript?");
        $('#choiceA')[0].nextSibling.data = 'A) Choice Y';
        $('#choiceB')[0].nextSibling.data = 'B) Choice Z';
        $('#choiceC')[0].nextSibling.data = 'C) Choice AA';
        $('#choiceD')[0].nextSibling.data = 'D) Choice BB';
        $("#submit6").hide();
        $("#submit7").show();
    
    });
});
//question8
$(document).ready(function(){
    $('#submit7').click(function(){
        title = $("#question-title").text("What is an API?");
        $('#choiceA')[0].nextSibling.data = 'A) Choice CC';
        $('#choiceB')[0].nextSibling.data = 'B) Choice DD';
        $('#choiceC')[0].nextSibling.data = 'C) Choice EE';
        $('#choiceD')[0].nextSibling.data = 'D) Choice FF';
        $("#submit7").hide();
        $("#submit8").show();
    
    });
});
//question9
$(document).ready(function(){
    $('#submit8').click(function(){
        title = $("#question-title").text("What is the console?");
        $('#choiceA')[0].nextSibling.data = 'A) Choice GG';
        $('#choiceB')[0].nextSibling.data = 'B) Choice HH';
        $('#choiceC')[0].nextSibling.data = 'C) Choice II';
        $('#choiceD')[0].nextSibling.data = 'D) Choice JJ';
        $("#submit8").hide();
        $("#submit9").show();
    
    });
});
//question10
$(document).ready(function(){
    $('#submit9').click(function(){
        title = $("#question-title").text("What is the DOM?");
        $('#choiceA')[0].nextSibling.data = 'A) Choice KK';
        $('#choiceB')[0].nextSibling.data = 'B) Choice LL';
        $('#choiceC')[0].nextSibling.data = 'C) Choice MM';
        $('#choiceD')[0].nextSibling.data = 'D) Choice NN';
        $("#submit9").hide();
        $("#submit10").show();
    
    });
});
//when the 10th question is submitted hide the questions and show the end-screen
$(document).ready(function(){
    $('#submit10').click(function(){
        $("#submit10").hide();
        $("#questions").addClass("hide");
        $("#end-screen").show();
        $("#start-screen p").hide();
    
    });
});
