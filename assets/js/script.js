$(document).ready(function() {     
    $("#play-btn").on("click", function(){
        $("#quiz-field").css("display", "block");
        var hidePlayBtn = $("#play-btn");
        $(this).hide();    
        
        
        var titleDiv = $("<div>");
        
        var userScore = 0;
        
        titleDiv.text(getQuestions[0].title);        
        $("#title-field").append(titleDiv);
        
        for (var i = 0; i < getQuestions[0].choices.length; i++) {
            var choicesUL = $("<ul>");
            choicesUL.addClass("choices-list");
            
            choicesUL.append(getQuestions[0].choices[i]);

            $("#choices-field").append(choicesUL);            
        };
        $(".choices-list").on("click", function(){
            if ($(this).text() === (getQuestions[0].answer)) {
                alert("yay");
            }
                
            
            
        });
        


    });
});

var getQuestions = JSON.parse(sessionStorage.getItem("storeQuestions"));

// start button
//menu button
//view high scores

//Extra option menu to choose difficult with explaination 
//into options for easy medium hard

//start quiz
//randomly pick a question from questions.js
//Display question with answers with buttons
    //if the user chooses the correct answer
    //  change button color to green
    //  output the user was correct
    //  increase points
    //else
    //  change button color to red
    //  decrease points
    //remove question from array
    //move to next question
//when quiz finishes, display score, number questions answer correctly out of number questions asked 
//display high scores page
//  if user makes top scores, prompt user for initials, add user initals and score sorted and store locally

//function for gobal timer for the entire quiz

//function for timer of each question

//high score page
//heading
//take locally stored scores
//sort high to low
