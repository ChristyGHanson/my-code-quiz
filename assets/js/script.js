// create global variables
// var questionText = ;
// var choices = ;
// var answer = ;
var timeLeft = 60;
var score = 0; // Perfect score = 5
// var initials = ;
// Set questionCounter to 0 for now.
var questionCounter = 0;
var questionEl = document.getElementById("questions");
// Manipulate HTML ID element with choice1.
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");


// idea to have an array of questions 
// each question would be an object
// an array of objects
// each object is a question
// keep track of which question i'm on so create a variable

// zero is for the first question
// questionCounter = 0; 

//object is made of key value pairs
// will be dynamically showing these to the users.
const questions = [
    // array of objects
    {
        questionText: 'What does CSS stand for?',
        // user can select from this array.
        choices: ['Cascading Style Sheets', 'Christys Shrimp Shack', 'Crabby-patty shrimp shack', 'Wrong Answer, Clearly'],
        answer: 'Cascading Style Sheets'
    },
    {
        questionText: 'What does HTML stand for?',
        // each value has its own index starting from 0
        choices: ['Happy Time Media Lounge', 'Hyper Markdown Text Language', 'I dont know', 'Wrong Answer, Clearly'],
        answer: 'Hyper Markdown Text Language'
    },
    {
        questionText: 'This is the third question.',
        // each value has its own index starting from 0
        choices: ['1', '2', '3', '4'],
        answer: 'c'
    },
    {
        questionText: 'This is the fourth question.',
        // each value has its own index starting from 0
        choices: ['1', '2', '3', '4'],
        answer: 'c'
    },
    {
        questionText: 'This is the fifth question.',
        // each value has its own index starting from 0
        choices: ['1', '2', '3', '4'],
        answer: 'c'
    },
];

// i want to get the value from questions. Get the question only.
questions[1].questionText;

// array of questions, display questions in HTML.
// this will be triggered by a button.
// start quiz button or choice button

// Four event listeners for each of the four buttons. 

// Add event listener to HTML element added in JS.
// first parameter is click.
choice1.addEventListener('click', renderQuestion); //increased question counter by 1. 
choice2.addEventListener('click', renderQuestion);
choice3.addEventListener('click', renderQuestion);
choice4.addEventListener('click', renderQuestion);

// invoking question.
function renderQuestion(event) {
    // 
    console.log('User Choice', event.target.textContent)
    console.log('Current question', questions[questionCounter]);
    //compare user choice with answer.\
    // determine what the next question is. 
    if (event.target.textContent == questions[questionCounter].answer) {
        // user selected correctly, increase score by one point
        score++;
        console.log('User score has gone up', score)
    } else {
        //incorrect
        //decrement time by 5.
        timeLeft -= 5;
        console.log('Incorrect: Time remaining ', timeLeft)
    }

    questionCounter++;
    console.log("moving on to the next question");
    //display next question

    questionEl.textContent = questions[questionCounter].questionText;
    // button a, wants to update dynamically = questions (array)
    // passing in questionCounter (init 0, ++)
    // textContent is a property.
    choice1.textContent = questions[questionCounter].choices[0];
    choice2.textContent = questions[questionCounter].choices[1];
    choice3.textContent = questions[questionCounter].choices[2];
    choice4.textContent = questions[questionCounter].choices[3];
}

// I need to make a timer using a JS method called setInterval
// This behaves as a timer and behaves as a loop.


// As I render questions, I need to keep track of whether or not the user selected the correct answer.
// I have to use booleans.

// one of the last things is local storage.

// I need to set up local storage with an object
// score can be the time left. 
// initials are user input for their own initials. 

// saving score logic to be inside another function
function saveScore() {
    var data = {
        score: timeLeft,
        initials: initials //define intials 'inputEl.value'
    }

    // this method enables local storage. 
    localStorage.setItem('highscores', JSON.stringify(data));

}

// review to past activity as a reference.
// break it down piece by piece.
// code quiz has a lot of lines of code.
// see what requirements are
// add HTML to display timer in browser. console log it.
// Dynamically display it. --> see requirements for it.
// Look into setting intervals as far as the timer goes. 
