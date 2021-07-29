
$("#start").click(function() {
    var count= 10;
    var counter =setInterval(timer, 1000); 
    
    function timer () {
        count = count-1;
        if (count<=-1){
            clearInterval(counter);
    
             return;
         }
    
        $("#time").text(count + "secs");
    };

    $("#start").hide();
    $("#questions").removeClass("hide");

});

$("#end-screen").hide();


