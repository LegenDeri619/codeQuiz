var getQuestions = JSON.parse(sessionStorage.getItem("storeQuestions"));

$(document).ready(function() {     
    $("#play-btn").on("click", function(){
    $("#quiz-field").css("display", "block");
    $(this).hide();   
    startTimer(); 
        
        
    var score = 0;
    var j = 0;

        //need to build cards sets for each question
        
            //filling question field           
            var titleDiv = $("<div>"); 
            titleDiv.text(getQuestions[j].title);        
            $("#title-field").append(titleDiv);
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
            });
            
    });
});

//function for global timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(oneMinutes, display);
};
//time bar = 100% = green bar
//render each second red bar: (elapsed time/total time) * 100%

function highScore(score) {
    
};




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
