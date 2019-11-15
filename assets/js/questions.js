var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
        title: "console.log( 2 + '2' ) will output what to the console?",
        choices: ["4", "undefined", "22", "'unexpected error'"],
        answer: "22"
    },
    {
        title: "console.log( 2 - '2' ) will output what to the console",
        choices: ["0", "undefined", "22", "'unexpected error'"],
        answer: "0"
    },
    {
        title: "",
        choices: [""],
        answer: ""
    },
  ];

  sessionStorage.setItem("storeQuestions", JSON.stringify(questions));
  
  