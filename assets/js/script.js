// create global variables

var timeLeft = 60;
var score = 0; // Perfect score = 5
// Set questionCounter to 0 for now.
var questionCounter = 0;
var questionEl = document.getElementById("questions");
// Manipulate HTML ID element with choice1.
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");

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
        choices: ['Happy Time Media Lounge', 'Hypertext Markup Language', 'IDK!', 'Wrong Answer, Clearly'],
        answer: 'Hypertext Markup Language'
    },
    {
        questionText: 'What does the ++ operator mean in JavaScript?',
        // each value has its own index starting from 0
        choices: ['Increment by 2', 'Increment by 10', 'Increment by 1', 'increment by 11'],
        answer: 'Increment by 1'
    },
    {
        questionText: 'What is a Boolean in computer science?',
        // each value has its own index starting from 0
        choices: ['A science fiction species.', 'A planet in Star Wars.', 'Something having to do with math.', 'A binary variable, having two possible values called “true” and “false".'],
        answer: 'A binary variable, having two possible values called “true” and “false.'
    },
    {
        questionText: 'What is JavaScript used for?',
        // each value has its own index starting from 0
        choices: ['Web development', 'Writing stories about coffee', 'Baristas need this for latte art.', 'Local dialect from the isle of Java.'],
        answer: 'Web development'
    },
];

// Get the value from questions. Get the question only.
questions[1].questionText;

// Add event listener to HTML element added in JS.
// first parameter is click.
choice1.addEventListener('click', renderQuestion); //increased question counter by 1. 
choice2.addEventListener('click', renderQuestion);
choice3.addEventListener('click', renderQuestion);
choice4.addEventListener('click', renderQuestion);

// Function that invokes the question.
function renderQuestion(event) {
    console.log('User Choice', event.target.textContent)
    console.log('Current question', questions[questionCounter]);
    // Compare user choice with answer.
    // Determine what the next question is. 
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

// saving score logic to be inside another function
function saveScore() {
    let data = {
        score: timeLeft,
        initials: initials //define intials 'inputEl.value'
    }

    // this method enables local storage. 
    localStorage.setItem('highscores', JSON.stringify(data));

}


// To do:
// add HTML to display timer in browser. console log it.
// Dynamically display it. --> see requirements for it.
// Look into setting intervals as far as the timer goes. 
