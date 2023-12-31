// Constant variable containing an array of quiz questions and their respective
// answers and trivias
/*jshint multistr: true */
/*jshint esversion: 6 */
/*jshint esversion: 8 */

// Required main variables
let questions = [];
const question = document.getElementById("question");
const optionButtons = document.getElementById("option-buttons");
let questionsArrayIndex = 0;
const nextQuestionButton = document.getElementById("next-question-btn");
let dogsFound = 0;
let currentDogsFound = document.getElementById("correct-answer");
let dogsLost = 0;
let currentDogsLost = document.getElementById("wrong-answer");
const userAnswerResult = document.getElementById("correct-wrong");
const sadDog = document.getElementById("sad-dog");
const happyDog = document.getElementById("happy-dog");
const happyResult = document.getElementById("happy-result");
const sadResult = document.getElementById("sad-result");
const trivia = document.getElementById("trivia");
const startQuizButton = document.getElementById("start-quiz-btn");
const instructionsPage = document.getElementById("instructions-page");
const quizPage = document.getElementById("game-page");
const header = document.getElementById("header-image");
const backToInstructions = document.getElementById("back-to-instructions");
const username = document.getElementById("username");

// Calls to go to the story/instructions page: initial page of the quiz
// Only the story/instructions page will be displayed initially
header.addEventListener("click", () => {
    quizPage.classList.add("hide");
    instructionsPage.classList.remove("hide");
    happyDog.classList.add("hide");
    sadDog.classList.add("hide");
    userAnswerResult.classList.add("hide");
    //Refreshes the page when user decides to exit game. 
    //Also eliminates previous users username in the input field
    location.reload();
});

/**
 * Fetches questions and answers to display from the questions object in json
 * 
 */
const loadQuestions = async () => {
    const response = await fetch("assets/js/questions.json");
    const json = await response.json();
    questions = json.questions;
};

loadQuestions();

//Mandatory text input required by the user otherwise, quiz start button is 
//disabled
username.addEventListener("keyup", () => {
    startQuizButton.disabled = !username.value;
});

// Calls to start quiz
startQuizButton.addEventListener("click", () => {
    // Checks input if empty
    if (username.value == "null" || username.value == "undefined" || username.value.trim() == "") {
        alert("Please type your name in the blue box provided.");
        return false;
    } else {
        startQuiz();
        return true;
    }
});

/**
 * Starts the quiz from the first question with 0 score 
 */
function startQuiz() {
    // These variables are set to 0 at the beginning of the quiz
    questionsArrayIndex = 0;
    dogsFound = 0;
    currentDogsFound.innerHTML = 0;
    dogsLost = 0;
    currentDogsLost.innerHTML = 0;

    nextQuestionButton.innerHTML = "Hurry! Find more dogs!";

    // Codes for which game page to display
    quizPage.classList.remove("hide");
    instructionsPage.classList.add("hide");
    backToInstructions.classList.add("hide");
    displayQuestion();

    // Hides the results images when user retakes the quiz
    sadResult.classList.add("hide");
    happyResult.classList.add("hide");
}

/**
 * Displays the questions and options derived from the questions array variable
 */
function displayQuestion() {
    hideDefaultOptionsButtons();
    // Hides the trivia section before user chooses answer
    trivia.classList.add("hide");
    // Hides the next question button before user chooses an answer
    nextQuestionButton.classList.add("hide");
    // Hides button that takes you back to instructions after playing quiz
    backToInstructions.classList.add("hide");

    let currentQuestion = questions[questionsArrayIndex];

    // Displays current question
    question.innerHTML = currentQuestion.question;
    // Calls all options from the options array using forEach method
    currentQuestion.options.forEach(function (answer, index) {
        // New buttons created for each option (Replaced default buttons)
        const button = document.createElement("button");
        button.innerHTML = answer;
        optionButtons.appendChild(button);
        // Retrieves the original button styling from css
        button.classList.add("option-btn");
    });

    // Calls checkAnswer() once user chose an option by clicking
    optionButtons.addEventListener("click", checkAnswer);
}

// This code were extracted from Youtube 
// https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw
/**
 * Hides the default options buttons once options 
 * are already derived from the questions array
 */
function hideDefaultOptionsButtons() {
    while (optionButtons.firstChild) {
        optionButtons.removeChild(optionButtons.firstChild);
    }
}

/** Checks user's answer and identifies whether clicked option is 
 * the correct/wrong answer
 */
function checkAnswer(e) {
    const clickedOption = e.target;
    // Displays user answer result 
    userAnswerResult.classList.remove("hide");
    // Displays trivia about the question/answer
    trivia.classList.remove("hide");
    backToInstructions.classList.add("hide");
    optionButtons.classList.add("nohover");
    let currentQuestion = questions[questionsArrayIndex];
    trivia.innerHTML = currentQuestion.trivia;

    // 
    if (clickedOption.innerHTML === currentQuestion.correctAnswer) {
        clickedOption.classList.add("correct-answer");
        userAnswerResult.innerHTML = `${username.value}, YOU FOUND A DOG!`;
        happyDog.classList.remove("hide");

        // Increments number of correct answers
        dogsFound++;
        currentDogsFound.innerHTML = `${dogsFound}`;
    } else {
        clickedOption.classList.add("wrong-answer");
        userAnswerResult.innerHTML = `OOOPPS! ${username.value}, YOU LOST ONE DOG!`;
        sadDog.classList.remove("hide");
        quizPage.classList.add("change-background");

        // Increments number of wrong answers
        dogsLost++;
        currentDogsLost.innerHTML = `${dogsLost}`;
    }

    Array.from(optionButtons.children).forEach(button => {
        if (button.innerHTML === currentQuestion.correctAnswer) {
            button.classList.add("correct-answer");
        }

        // Prevents user from choosing another answer after clicking an option
        button.disabled = true;

    });

    // Displays the button for the next question once user has chosen an answer
    nextQuestionButton.classList.remove("hide");
}

/**
 * Code to display the following question, one after another
 */
function handleNextQuestionButton() {
    questionsArrayIndex++;
    optionButtons.classList.remove("nohover");
    if (questionsArrayIndex < questions.length) {
        displayQuestion();
        // Re-hide the previous question's trivia and dog GIF
        userAnswerResult.classList.add("hide");
        trivia.classList.add("hide");
        happyDog.classList.add("hide");
        sadDog.classList.add("hide");
    } else {
        // Code to be developed yet
        displayDogsRescued();
    }

    // Returns page background to its default (if background color changed
    // due to wrong answer)
    quizPage.classList.remove("change-background");
}

/**
 * Displays the final result of the quiz
 */
function displayDogsRescued() {
    hideDefaultOptionsButtons();
    trivia.classList.add("hide");
    userAnswerResult.classList.add("hide");
    happyDog.classList.add("hide");
    sadDog.classList.add("hide");

    if (dogsFound <= 15) {
        question.innerHTML = `${username.value}, ${username.value}, 
                                ${username.value}... You only found ${dogsFound}! 
                                You've got plenty of explaining to do! 
                                We should get RSPCA involved!`;
        // Shows GIF Image
        sadResult.classList.remove("hide");

    } else if (dogsFound <= 20) {
        question.innerHTML = `You found ${dogsFound} adorable cute 
                                dogs! Better make sure they do not escape 
                                again! But what about the other ${dogsLost}?`;
        // Shows GIF Image
        sadResult.classList.remove("hide");

    } else if (dogsFound <= 25) {
        question.innerHTML = `You found ${dogsFound} adorable cute dogs!
                              These dogs are so lucky to have you! You deserve
                              an award! Let's be positive though, just keep 
                              looking for the other ${dogsLost} still missing.`;
        // Shows GIF Image
        happyResult.classList.remove("hide");

    } else {
        question.innerHTML = `Way to go ${username.value}! You retrieved 
                                ${dogsFound} dogs! You are a certified dog guru!`;
        // Shows GIF Image
        happyResult.classList.remove("hide");
    }

    backToInstructions.classList.remove("hide");
    nextQuestionButton.innerHTML = "Retake Quiz";
}

// Back to the Kennel Event Listener
backToInstructions.addEventListener("click", () => {
    quizPage.classList.add("hide");
    instructionsPage.classList.remove("hide");
    location.reload();
});

// Previous code won't work without this eventListener
// This code will also keep displaying questions until all questions have been 
// answered
nextQuestionButton.addEventListener("click", () => {
    if (questionsArrayIndex < questions.length) {
        handleNextQuestionButton();
    } else {
        // Restarts the quiz all over again
        startQuiz();
    }
});











