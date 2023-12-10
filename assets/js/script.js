// Constant variable containing an array of quiz questions and their respective
// answers and trivias
const questions = [
    {
        question: "What part of a dog is as unique as a human fingerprint?",
        options: ["Ears", "Tail", "Nose", "Stomach"],
        correctAnswer: "Nose",
        trivia: "Dog’s nose, when combined with the shape of its nostril \
                 openings, is believed to make a mark that is distinctive \
                 enough to conclusively identify one dog among all others."
    },
    {
        question:"What is a group of puppies called?",
        options:["A litter", "A pack", "A group", "Puppies"],
        correctAnswer:"A litter",
        trivia:"A litter is a number of young animals (can also be kittens) \
                born to a mom at one time."
    },
    {
        question: "Where did Golden Retrievers originate from?",
        options: ["Germany", "France", "China", "Scotland"],
        correctAnswer: "Scotland",
        trivia: "Golden Retrievers were developed in Scotland in the 19th \
                 century as gundogs and water retrievers to assist hunters \
                 in recovering game birds."
    },
    {
        question: "What part of the body does a dog sweat from?",
        options: ["Stomach", "Back", "Paws", "Tail"],
        correctAnswer: "Paws",
        trivia: "Instead of sweat sweeping down their face, most dog sweat \
                 is released through glands in the paw pads."
    },
    {
        question: "Which of these senses does a dog use the most?",
        options: ["Hearing", "Sight", "Smelling", "Touch"],
        correctAnswer: "Smelling",
        trivia: "It has been estimated that a dog’s sense of smell is \
                 100,000 times more powerful than human’s."
    },
    {
        question: "What is the average lifespan of a dog?",
        options: ["13 to 16 years", "10 to 13 years", "8 to 9 \
                   years", "12 to 15 years"],
        correctAnswer: "10 to 13 years",
        trivia: "Your furry friend’s lifespan depends on size and breed, \
                 but on the average, dogs have a lifespan of 10 – 13 years."
    },
    {
        question: "What animal did dogs descend from?",
        options: ["Wolves", "Lions", "Cows", "Bears"],
        correctAnswer: "Wolves",
        trivia: "Genetic studies tell us that all dogs trace back to an \
                 extinct wolf species shared with the gray golf, Canis lupus."
    },
    {
        question: "What is the most common training command taught to a dog?",
        options: ["Sit", "Bark", "Bite", "Stay"],
        correctAnswer: "Sit",
        trivia: "'Sit' is the correct answer. It’s also probably the easiest \
                 command to teach, at least according to some animal \
                 behaviourists."
    },
    {
        question: "What is the favourite dog breed of the late \
                   Queen of England, Elizabeth II?",
        options: ["Golden Retriever", "Chihuahua", "Corgi", "Shih Tzu"],
        correctAnswer: "Corgi",
        trivia: "The Queen was very fond of corgis since she was small \
                 child, having fallen in love with the corgis owned by the \
                 children of the Marquess of Bath. King George VI brought \
                 home Dookie in 1933."
    },
    {
        question: "Which dog breed’s coat has a texture that is \
                   similar to human hair?",
        options: ["Pomeranian", "Poodle", "Yorkshire Terrier", "Smooth Fox \
                   Terrier"],
        correctAnswer: "Yorkshire Terrier",
        trivia: "Yorkshire Terriers (Yorkies) have long, flowing, silky \
                 coats that are similar to human hair. Their hair can \
                 tangle into knots if you don’t brush it regularly."
    },
    {
        question: "Which dog breed has black tongue?",
        options: ["Chow Chow", "Poodle", "Husky", "Labrador"],
        correctAnswer: "Chow Chow",
        trivia: "Any dog breed can have a tongue with dark pigment, but \
                 a few breeds are more prone to it, including the Chow Chow."
    },
    {
        question: "What breed is Scooby Doo?",
        options: ["Great Dane", "Dalmatian", "German Shepherd", "Shar Pei"],
        correctAnswer: "Great Dane",
        trivia: "Scooby Doo is a Great Dane! The average male Great Dane \
                 can weigh up to 200lbs and stand up to 34 inches tall \
                 with all four paws on the floor. No wonder Scooby Doo \
                 loves his food!"
    },
    {
        question: "What is the name of the smallest dog breed?",
        options: ["Shih Tzu", "Shar Pei", "Chihuahua", "Yorkshire Terrier"],
        correctAnswer: "Chihuahua",
        trivia: "Weighing in at a maximum of 6 pounds, Chihuahua \
                 is the world’s smallest dog breed."
    },
    {
        question: "Which medical condition affects dogs the most?",
        options: ["Diabetes", "Arthritis", "Obesity", "Anxiety and Depression"],
        correctAnswer: "Obesity",
        trivia: "Regularly go for a walk with your dog! Without proper \
                 exercise and balanced diet, dogs can suffer from obesity \
                 and all the diseases linked to it!"
    },
    {
        question: "What dog breed is considered the heaviest?",
        options: ["Great Dane", "Labrador", "St. Bernard", "French Bulldog"],
        correctAnswer: "St. Bernard",
        trivia: "Originally bred to be rescue dogs in the Swiss Alps, \
                 the St. Bernard dog breed can grow up to 260 pounds! \
                 Despite their size, St. Bernards are sociable and \
                 loyal to their owners."
    },
    {
        question: "Which dog’s name translates to 'dwarf dog'?",
        options: ["Chihuahua", "Corgi", "Mastiff", "Dachshund"],
        correctAnswer: "Corgi",
        trivia: "The Welsh translation of the name Corgi is 'dwarf dog'."
    },
    {
        question: "Why do dogs curl up when they sleep?",
        options: ["To show dominance", "To protect their organs", "To ease \
                   aches and pains", "To make themselves invisible"],
        correctAnswer: "To protect their organs",
        trivia: "In addition to providing dogs with greater body heat, \
                 they also curl up to protect their body organs."
    },
    {
        question: "Which four colours can a dog see?",
        options: ["Red, Black, White, Green", "Yellow, Purple, Orange, \
                   Red", "Black, White, Blue, Yellow", "Black, \
                   Green, Red, Orange"],
        correctAnswer: "Black, White, Blue, Yellow",
        trivia: "Contrary to the myth that dogs are color blind, research\
                 has found that they can see black, white, blue, and yellow!"
    },
    {
        question: "What is Snoopy’s dog breed?",
        options: ["Chihuahua", "Jack Russell", "Beagle", "Shih Tzu"],
        correctAnswer: "Beagle",
        trivia: "Cartoon royalty’s Snoopy is one of the world’s \
                 most beloved Beagle!"
    },
    {
        question: "Which dog breed is the most popular in the United States?",
        options: ["Golden Retriever", "German Shepherd", "Chihuahua",
                   "Labrador Retriever"],
        correctAnswer: "Labrador Retriever",
        trivia: "The American Kennel Club reports that the most popular \
                 dog breed in the United States is the Labrador Retriever \
                 and has taken the title for 25 consecutive years. It is \
                 also the most popular breed in the United Kingdom."
    },
    {
        question: "Which sense are puppies born without?",
        options: ["Smell", "Sight", "Hearing", "Sight"],
        correctAnswer: "Hearing",
        trivia: "When puppies are born, the cannot use their hearing \
                 sense yet. They start hearing until they \
                 are about 3 weeks old."
    },
    {
        question: "Which dog breed cannot swim?",
        options: ["Newfoundland", "Labrador", "Golden \
                   Retriever", "Basset Hound"],
        correctAnswer: "Basset Hound",
        trivia: "Basset Hounds are not meant for the water! They are bred \
                 for hunting. Their long ears and short legs make it \
                 impossible for them to swim. "
    },
    {
        question: "Which breed is the world’s oldest?",
        options: ["Irish Wolfhound", "Mastiff", "Corgi", "Saluki"],
        correctAnswer: "Saluki",
        trivia: "During the times of Ancient Egyptians, Salukis were sent \
                 out to help track game. They are the world’s oldest \
                 dog breed."
    },
    {
        question: "Which of these groups do dogs belong to?",
        options: ["Canines", "Felines", "Bovines", "Equines"],
        correctAnswer: "Canines",
        trivia: "Dogs and their relatives in the Canidae family – wolves, \
                 foxes, coyotes -  are often called canines."
    },
    {
        question: "What was the name of the first dog in space?",
        options: ["Luka", "Justin", "Bob", "Laika"],
        correctAnswer: "Laika",
        trivia: "The first animal to take orbital spaceflight around \
                 Earth was the dog Laika aboard Sputnik 2 on November 1957. "
    },
    {
        question: "Why do dogs chase their tails?",
        options: ["Boredom", "Excitement", "Dealing with fleas", 
                   "All of the above"],
        correctAnswer: "All of the above",
        trivia: "Dogs chase their tails for many reasons! Sometimes, \
                 they just want to expel some energy too!"
    },
    {
        question: "Which breed is the most commonly used as a Guide \
                   Dog for the blind?",
        options: ["Staffordshire Bull Terrier", "Labrador Retriever", "Border \
                   Collie", "Jack Russell"],
        correctAnswer: "Labrador Retriever",
        trivia: "Labradors are widely used as guide dogs for the blind, \
                 owing to their friendly nature and adaptability. "
    },
    {
        question: "Which of the following dog breeds has a “holy” history \
                   and was developed by the Tibetan monks to provide them \
                   an alarm should any unwelcome visitors breach the \
                   sanctity of their monastery?",
        options: ["Chihuahua", "St. Bernard", "Lhasa Apso", "Shih Tzu"],
        correctAnswer: "Lhasa Apso",
        trivia: "In Buddhism, it is believed that the souls of lamas or \
                 priests are frequently reborn as Lhasa Apso just before \
                 they are born as humans. "
    },
    {
        question: "Akita is also known as the national treasure in which \
                   nation in the world? ",
        options: ["China", "South Korea", "Japan", "Taiwan"],
        correctAnswer: "Japan",
        trivia: "In 1931, The Japanese government declared the Akita \
                 breed to be a national monument and to be one of \
                 Japan’s national treasures! The most famous Akita \
                 in Japan, if not in the world, is Hachiko!"
    },
    {
        question: "Which dog breed does not bark, but yodel?",
        options: ["Basset hound", "Yorkshire Terrier", "Saluki", "Basenji"],
        correctAnswer: "Basenji",
        trivia: "Basenji is known as the 'barkless dog'. This is because \
                 Basenji’s larynx is shaped differently than those in most \
                 other dogs, so they cannot produce a bark. But don’t worry, \
                 they can still growl!"
    },
];

// Required main variables
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
const backToInstructions = document.getElementById("back-to-instructions")

// Calls to go to the story/instructions page: initial page of the quiz
// Only the story/instructions page will be displayed initially
header.addEventListener("click", () => {
    quizPage.classList.add("hide");
    instructionsPage.classList.remove("hide");
}); 

// Calls to start quiz
startQuizButton.addEventListener("click", () => {
    startQuiz();
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
    backToInstructions.classList.add("hide")
    displayQuestion(); 
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
    backToInstructions.classList.add("hide")

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
        button.classList.add("option-btn")
    });

    // Calls checkAnswer() once user chose an option by clicking
    optionButtons.addEventListener("click", checkAnswer);
}

// These codes were extracted from Youtube 
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
    backToInstructions.classList.add("hide")

    let currentQuestion = questions[questionsArrayIndex];
    trivia.innerHTML = currentQuestion.trivia;

    if (clickedOption.innerHTML === currentQuestion.correctAnswer) {
        clickedOption.classList.add("correct-answer");
        userAnswerResult.innerHTML = "YOU FOUND A DOG!";
        happyDog.classList.remove("hide");
        // Increments number of correct answers
        dogsFound++;
        currentDogsFound.innerHTML = `${dogsFound}`;
    } else {
        clickedOption.classList.add("wrong-answer");
        userAnswerResult.innerHTML = "OOOPPS! YOU LOST ONE DOG!";
        sadDog.classList.remove("hide");
        // Increments number of wrong answers
        dogsLost++;
        currentDogsLost.innerHTML = `${dogsLost}`;
    }

    Array.from(optionButtons.children).forEach(button => {
        if (button.innerHTML === currentQuestion.correctAnswer) {
            button.classList.add("correct-answer");
        }

        // Disallows user to choose another answer after clicking an option
        button.disabled = true;
    });

    // Displays the button for the next question once user has chosen an answer
    nextQuestionButton.classList.remove("hide");
}

/**
 * Code to display the following question, one after another
 */
function handleNextQuestionButton () {
    questionsArrayIndex++;
    if (questionsArrayIndex < questions.length) {
        displayQuestion();
        // Re-hide the previous question's trivia and dog GIF
        userAnswerResult.classList.add("hide");
        trivia.classList.add("hide");
        happyDog.classList.add("hide");
        sadDog.classList.add("hide");
    } else {
        // Code to be developed yet
        displayDogsRescued()
    };
}

function displayDogsRescued() {
    hideDefaultOptionsButtons();
    trivia.classList.add("hide");
    userAnswerResult.classList.add("hide");
    happyDog.classList.add("hide");
    sadDog.classList.add("hide");

    if (dogsFound <= 15) {
        question.innerHTML = `OH NO! You only found ${dogsFound} adorable cute 
                                dogs! You've got plenty of explaining
                                to do!`;
        // PLANNED GIF TO BE ADDED HERE
        sadResult.classList.remove("hide");
        
    } else if (dogsFound <= 20) {
        question.innerHTML = `You found ${dogsFound} adorable cute 
                                dogs! Better make sure they do not escape 
                                again!`;
        // PLANNED GIF TO BE ADDED HERE
        happyResult.classList.remove("hide");

    } else if (dogsFound <= 25) {
        question.innerHTML = `You found ${dogsFound} adorable cute dogs!
                              These dogs are so lucky to have you! You deserve
                              an award!`; 
        // PLANNED GIF TO BE ADDED HERE
        happyResult.classList.remove("hide");

    } else { 
        question.innerHTML = `Way to go! You retrieved ${dogsFound} dogs! You
                                are a certified dog guru!`;
        happyResult.classList.remove("hide");
    } 
    
    backToInstructions.classList.remove("hide");
    nextQuestionButton.innerHTML = "Retake Quiz";
}

backToInstructions.addEventListener("click", () => {
    quizPage.classList.add("hide");
    instructionsPage.classList.remove("hide");
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