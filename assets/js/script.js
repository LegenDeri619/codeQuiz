

$(document).ready(function() {     
    $("#play-btn").on("click", function(){
    $("#quiz-field").css("display", "block");
    $(this).hide();    
        
        
    var score = 0;
    var j = 2;
    var page = (getQuestions.length - j);

        //need to build cards sets for each question
        
    render();
            //filling question field
        function render() {    
            var titleDiv = $("<div>"); 
            titleDiv.text(getQuestions[j].title);        
            $("#title-field").append(titleDiv);
            $("#title-field").attr("z-index", page);
            console.log(j);

            //unordered list for answers
            for (var i = 0; i < getQuestions[j].choices.length; i++) {
                var choicesUL = $("<div>");
                choicesUL.addClass("btn");                
                choicesUL.append(getQuestions[j].choices[i]);
                $("#answer-buttons").append(choicesUL);
                         
            };
            //click event to check user's answer to actual answer
            $(".btn").on("click", function(){
                console.log(this);
                if ($(this).text() === (getQuestions[j].answer)) {
                    score++;
                    console.log(score);
                    alert("yay");
                } 
                else {
                    score--;
                    console.log(score);
                }
                $("#results-field").append("Score: " + score);
            });

        };
    });
});

//function to cycle through z-index

//function for global timer
//use a progress bar, 
//time bar = 100% = green bar
//render each second red bar: (elapsed time/total time) * 100%

//function for question time (optional)
// number count down




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

//function for global timer for the entire quiz

//function for timer of each question

//high score page
//heading
//take locally stored scores
//sort high to low
