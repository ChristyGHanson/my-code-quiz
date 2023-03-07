// create global variables
var questionText = ;
var choices = ;
var answer = ;
var timeLeft = 60;
var initials = ;

var choice1 = document.getElementById("choice1")

// idea to have an array of questions 
// each question would be an object
// an array of objects
// each object is a question
// keep track of which question i'm on so create a variable

// zero is for the first question
// questionCounter = 0; 

//object is made of key: value pairs
const questions = [
    {
        questionText: 'This is the first question.',
        choices: ['a', 'b', 'c', 'd'],
        answer: 'b'
    },
    {
        questionText: 'This is the first question.',
        choices: ['a', 'b', 'c', 'd'],
        answer: 'c'
    }
];

questions[1].questionText

// array of questions, display questions in HTML.
// this will be triggered by a button.
// start quiz button or choice button

// Add event listeners to all the buttons. Doesn't matter where I put them. 
// with event listener, I should not put a function parenthesis.
// four event listeners for four buttons.

choice1.addEventListener('click', renderQuestion);

function renderQuestion(event) {
    console.log(event)
    console.log("moving on to the next question");

    //compare user choice with answer
    if (event.target.textContent == questions[questionCounter].answer) {
        // user selected correctly
    } else {
        //incorrect
        //decrement time
        timeLeft -= 5
    }

    questionCounter++;
    //display next question

    questionEl.textContent = questions[questionCounter].questionText;
    choice1.textContent = question[questionCounter].choices[0]
    choice2.textContent = question[questionCounter].choices[1]
    choice3.textContent = question[questionCounter].choices[2]
}

// make a timer using a JS method called setInterval
// This behaves as a timer and behaves as a loop.


// as i render questions, keep track of whether or not the user selected the correct answer.
// I have to use booleans.

// one of the last things is local storage

// setting up local storage with an object
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