# WHO LET THE DOGS OUT?
"WHO LET THE DOGS OUT?" is an interactive quiz about man's bestfriend, dogs. It targets those who consider themselves as pet lovers, pet enthusiasts, dog gurus, dog trainers, of even those who know nothing about dogs but want to immerse themselves in this simple but challenging quiz!

It consists of 30 multiple choice questions which are displayed individually with their respective possible answers. There are four options the user can choose from. The quiz also interacts with the user by showing trivias and explanations related to the question or correct answer once an option is clicked. 

The quiz is designed to be immersive by utilising a storyline that users can read before engaging with the quiz. From the title itself, the storyline revolves around the user being tasked to look after the dogs in a kennel but something goes wrong! In the story, the dogs got out and the only way to find them is by answering the quiz questions! One correct answer equates to one dog found, and one wrong answer equates to one dog lost!

The quiz can be accessed though this live site [here](https://mikel072889.github.io/dogs-quiz-project2/).

![Quiz Page 1](docs/readme-images/main-quiz-1.jpg)
![Quiz Page 2](docs/readme-images/main-quiz-2.jpg)

## Features

### Existing Features
* Header 
    * The header of the page displays the quiz name and shows an image of a collection of various breeds of dogs. This is where the color mottiff of the quiz will be based from to make it more color coordinated. 
    * The header gives information as to what this page is all about.
    * The header can also be clicked by the user to exit the quiz. This is clearly stated within the instructions.

    ![Header Image](docs/readme-images/header.jpg)

* Instructions Area
    * The quiz allows users to feel immersed to the quiz by giving the instructions through the use of a simple storyline. With this, users will be more inclined to follow-through with the quiz and will give them the urge to finish the quiz as they would want to finish the story by finishing the quiz.

    ![Instructions](docs/readme-images/instructions.jpg)

    * Username Input Field
        * This provides the user to enter their name so the quiz can be customised for them. 
        * This is a mandatory field to enable the Start Quiz function. The input field is designed to accept
        any text character, including numbers, as the user might not wish to divulge their real name or they might choose to use a different name.
        * It has a contrasting red color so users cannot miss it. It is clearly indicated in the instructions that users need to fill this input field up.

        ![Input field](docs/readme-images/input-field.jpg)

        * An error message is displayed if the input field is not filled up. This input field will not accept spaces as username.
     
        ![Error Message](docs/readme-images/error-message.jpg)

    * Start Quiz Button
        * The start quiz button is not labelled "Start Quiz" for a reason. The button is labelled "Let's go find your dogs!" to add more consistency with the storyline.
        * This button will take the user to the initial quiz question. 
        * This is disabled by default and will only be enabled once user has entered name on the input field 
        * It features the hover effect and changes background color and mouse pointer when hovered upon. This signals the user that they are about to start the quiz once button is clicked. 

        ![Disabled Start Quiz Button](docs/readme-images/start-quiz-button-disabled.jpg)
        <br>
        ![Enabled Start Quiz Button](docs/readme-images/start-quiz-button-enabled.jpg)

* Quiz Area
    * The quiz area is where all the fun is! This contains the individually displayed questions followed by their respective possible answers. This also features the "Dogs found" and "Dogs lost" score feature.

    ![Main Quiz](docs/readme-images/main-quiz-2.jpg)

    * Dogs Found and Dogs Lost Scoring System 
        * "Dogs Found"  is where the number of correct answers will be shown and is expected to increment everytime the user clicks on the correct answer. On the other hand, "Dogs Lost" is where the number of wrong answers will be shown and is also expected to increment everytime user clicks on the wrong answer. 
        * Contrary to the usual scoring label "Score", this area is labelled differently to provide consistency with the storyline.

        ![Scoring system](docs/readme-images/lost-found.jpg)

    * Question area
        * The questions are displayed here individually. It is purposely designed to have a dark background and light font so every question will stand out.
       
        ![Questions](docs/readme-images/questions.jpg)
    
    * Options area
        * Four options is displayed for the user to choose from
        * Interactivities included:
            * Hover effect - when hovered upon, texts shift to the left and background color changes. This contributes to visual interactivity of the buttons and allows users to navigate around these buttons that will tell them exactly what their pointing at.

            ![Hovered Button](docs/readme-images/hovered-button.jpg)

            * Correct answer clicked - when the correct answer is clicked by the user, the background color of the correct answer changes to green and all button's hover effect is disabled limiting the user to choose other options once an option is clicked. The background color of the wrong answers also goes darker to put emphasis that these are the wrong answers. The correct answer background color is turned green to generate a positive feeling from the user.

            ![Correct Answer Button](docs/readme-images/correct-answer.jpg)

            * Wrong answer clicked - when the wrong answer is clicked by the user, the whole quiz area background color changes to a mildly reddish color warning the user of a wrong answer chosen and/or of a "lost dog". The chosen wrong answer background color also changes to a more saturated red color while the other unchosen wrong answers to a less saturated red color. This is expected to generate the feeling of unease to the user and will certainly prompt them to do better on the following questions. Due to this, the color changes are purposely not designed to fullfil accessibility contrast criteria but are still considerably readable and  the users can still carry on with the quiz. The correct answer remains green.

            ![Wrong Answer Button](docs/readme-images/wrong-answer.jpg)

    * Comment and Trivia area
        * This is where the result of the question is displayed to show the user whether the user chose the correct answer or not. 
        * To maintain consistency, either one of these two comments are expected to be displayed once triggered: 
            * "YOU FOUND A DOG!" - This signifies a correct answer chosen and will also be displayed with an image of a dancing dog at the same time. Again, this is to generate excitement on the user and will want to see more of this dancing dog in the next questions. 

            ![Trivia and dancing dog](docs/readme-images/trivia-correct.jpg)

            * "OOOPPS! YOU LOST ONE DOG!" - This signifies a wrong answer and will also be displayed with an image of a sad dog at the same time. This will generate a negative feeling from the user from choosing the wrong answer. 

            ![Trivia and weeping dog](docs/readme-images/trivia-wrong.jpg)

        * Trivia area - regardless of the result, once an answer has been clicked for every question, a trivia will pop out at the bottom of the page and will display a trivia related to the question and/or the correct answer. Not only that this quiz is designed to test users' dog knowledge, but is also designed to give the user important information about dogs. This provides good learning opportunity to users.

    * Next Question button 
        * The next question button or the "Hurry! Find more dogs!" button is provided to navigate to the next question. 
        * Interactivities included: 
            * Hover effect - changes background color and cursor on hover
        * Note: The quiz is purposely designed to NOT have a back button to navigate back to previous questions. This will defeat the storyline purpose of finding lost dogs in time!

        ![Next Button](docs/readme-images/next-button.jpg)

* End of the Quiz Area
    * This area only displays once the quiz is done. This will show the final result of the quiz including the final tally of dogs found and dogs lost. 

    ![End of Quiz 1](docs/readme-images/end-quiz-1.jpg)
    ![End of Quiz 2](docs/readme-images/end-quiz-2.jpg)

    * In the middle is the final concluding comments still in consistency with the storyline and will show one of these three comments depending on the user's final score: 
    
    ![Comments 1](docs/readme-images/comment-1.jpg)
    ![Comments 2](docs/readme-images/comment-2.jpg)
    ![Comments 3](docs/readme-images/comment-3.jpg)

    * Back button and result-based image of a dog
        * The back button or the "Back to the kennel" button navigates back to the instructions area and will allow the user to revisit the storyline or instructions of the quiz and retake the quiz.
        * An image of a happy or sad dog will also be displayed and will depend on the user score.

        ![Back Button and results image](docs/readme-images/back-button.jpg)

    * Retake Quiz
        * This button will immediately redirect the user to the first question of the quiz.

        ![Retake Quiz Button](docs/readme-images/retake-quiz-button.jpg)
    <br>
* Footer
    * Footer was created for this project. It contains copyright disclaimer and a link to the creator's github page.

    ![Footer](docs/readme-images/footer.jpg)

### Features to Implement
   * In the future, I would like to improve on this game by including a save score functionality and to be able to display high scores with their corresponding usernames.
   * I also plan to add audio interactivity, for example, wrong answer and correct answer will have their own respective sounds when clicked. It would be more immersive if there is a background sound playing while taking the quiz.
   * I also plan to expand this project to a higher scope, for example, a quiz website that can feature a selection of quiz per pet category. Dogs quiz is just one of them!

### Favicon

* The quiz page features a favicon with a cartoon image of a dog telling the user that this page is about dogs. This can facilitate easier navigation for users when they have multiple tabs open in one window.

![Dog Favicon](docs/readme-images/dog-favicon.jpg)

### 404 Page

* A 404 page is also available should the user navigate to a broken link. This is done with minimal styling and is designed to be user-friendly to show users that we care about their experience and that we want them to remain navigating the website, hence, a link is provided to redirect them to the main landing page.

![Page Not Found Image](docs/readme-images/404-page.jpg)

## Design
### Wireframes
Balsamiq Wireframes was utilised in the design process of the quiz. 

![Wireframe 1](docs/readme-images/wireframe-1.jpg)
![Wireframe 2](docs/readme-images/wireframe-2.jpg)
![Wireframe 3](docs/readme-images/wireframe-3.jpg)
![Wireframe 4](docs/readme-images/wireframe-4.jpg)

## Testing
### Responsiveness
Responsiveness was tested using mainly Chrome DevTools and expected results were met.
* Browsers used in testing responsiveness were Chrome, Safari, Mozilla Firefox, and Microsoft Edge.
* The website was also accessed via the following devices and no responsiveness issues identified:
    * iPhone 12
    * Samsung Galaxy S23
    * iPad Mini
    * Google Pixel 6

### Accessibility
Accessibility of the website is of paramount importance that is why [Wave Accessibility](https://wave.webaim.org/) tool was used throughout the development, especially towards the final stages.

The following criteria were met:
* HTML page lang attribute was set.
* Images have alternative texts set making descriptions dictateable to users.
* Aria labels used and implemented correctly especially on buttons elements.
* No skipped heading levels found ensuring importance of content is maintained.
* Color contrasts meet a minimum ratio as specified in [WCAG 2.1 Contrast Guidelines](https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html).
* Conformance to WCAG 2.1 Coding best practices.

Manual testing was also performed and found the following issues that were rectified accordingly:
* Form label missing on input field. Username input required a label for more accessibility. Label added but made visually hidden for design purposes only. 

![Code to visually hide input label](docs/readme-images/visually-hidden.jpg)

### Validator Testing
* HTML and CSS files were tested and returned with no errors found. [W3C Validator](https://validator.w3.org/) and [CSS Validation Service](https://jigsaw.w3.org/css-validator/) were used respectively.

![HTML Validator result](docs/readme-images/html-validator-check.jpg)
![CSS Validator result](docs/readme-images/css-validator-check.jpg)

* JavaScript code also passed through JShint with no issues.

![JavaScript JShint result](docs/readme-images/javascript-jshint-check.jpg)


### Bugs
* Page not refreshing and reloading properly when user exits quiz by clicking the header. The location.reload() method
has been used fix this.
* Input field accepting a blank space as username input and still allows user to enter quiz. Empty input check feature added and returns an error message if input is empty.

![Reload Page](docs/readme-images/location-reload.jpg)

### Unfixed Bugs
* No unfixed bugs found so far.

### Functions Testing
* Functions and features have been mainly tested on Google Chrome.  
* Some methods are not compatible with Firefox such as the location.reload() method. 
* 404 Page was also tested and passed.

| Function                                        | Action                                    | Expected Result                                                        | PASS / FAIL |
| ----------------------------------------------- | ----------------------------------------- | ---------------------------------------------------------------------- | ----------- |
| Input for username - mandatory to play quiz     | Add username in a form of text            | Disabled Start button gets enabled                                     | PASS        |
|                                                 |                                           | Button text gets bolder and changes background color                   | PASS        |
| Input Error Message                             | Enter space as an input                   | Error message to appear in the middle of the screen                    | PASS        |
| Start Button/"Let's go find your dogs" Button   | Click                                     | Changes color on hover                                                 | PASS        |
|                                                 |                                           | Main quiz page displayed                                               | PASS        |
| Correct Answer Button                           | Click the correct answer                  | A comment and an image of a dancing dog appears                        | PASS        |
|                                                 |                                           | Trivia appears                                                         | PASS        |
|                                                 |                                           | "Dogs Found" increments by 1                                           | PASS        |
|                                                 |                                           | Clicked button remains green                                           | PASS        |
|                                                 |                                           | Other buttons' color goes darker                                       | PASS        |
|                                                 |                                           | All buttons are disabled including hover effect                        | PASS        |
|                                                 |                                           | Next Question Button/ "Let's find more dogs!" Button appears           | PASS        |
| Wrong Answer Button                             | Click on any wrong answer                 | A comment and an image of a weeping dog appears                        | PASS        |
|                                                 |                                           | Trivia appears                                                         | PASS        |
|                                                 |                                           | "Dogs Lost" increments by 1                                            | PASS        |
|                                                 |                                           | Clicked button turns red                                               | PASS        |
|                                                 |                                           | Correct answer button turns green                                      | PASS        |
|                                                 |                                           | Other buttons' color turns light red in color                          | PASS        |
|                                                 |                                           | Background color changes to light red                                  | PASS        |
|                                                 |                                           | All buttons are disabled including hover effect                        | PASS        |
|                                                 |                                           | Next Question Button/ "Let's find more dogs!" Button appears           | PASS        |
| Options Buttons                                 | Hover                                     | Cursor changes to a hand pointer                                       | PASS        |
|                                                 |                                           | Texts move slightly to the left                                        | PASS        |
|                                                 |                                           | Background color changes to light blue                                 | PASS        |
| Next Question/"Let's go find more dogs!" Button | Click                                     | Takes user to the next set of question and answer                      | PASS        |
|                                                 |                                           | Previous scores remain until user clicks an answer button              | PASS        |
|                                                 |                                           | Changes color on hover                                                 | PASS        |
| "Dogs Found" scoring                            | if user clicks a correct answer           | Increments by 1 for every clicked correct answer per question          | PASS        |
| "Dogs Lost" scoring                             | if user clicks a wrong answer             | Increments by 1 for every clicked wrong answer per question            | PASS        |
| End of Quiz                                     | User answers the last question            | Score is indicated through a comment                                   | PASS        |
|                                                 |                                           | Back/"Back to the kennel" Button appears                               | PASS        |
|                                                 |                                           | Weeping dog GIF image appears if low score                             | PASS        |
|                                                 |                                           | Happy dog GIF image appears if high score                              | PASS        |
|                                                 |                                           | Retake Quiz Button appears                                             | PASS        |
| Back/"Back to the kennel" Button                | Click                                     | User is taken to the instructions page of the quiz                     | PASS        |
|                                                 |                                           | Previous user's name on input field is erased                          | PASS        |
| Retake Quiz Button                              | Click                                     | User is immediately taken back to the first set of question and answer | PASS        |
| Exit Game                                       | Click on the header (Group of dogs image) | User is takem to the instructions page of the quiz                     | PASS        |
|                                                 |                                           | Previous user's name on input field is erased                          | PASS        |
| Footer link to Github                           | Click                                     | User is taken to creator's GitHub page                                 | PASS        |

### Lighthouse Testing

Lighthouse testing was also carried out to determine any points of improvement for the website. The performance criteria requires more looking into in the future.

![Lighthouse result](docs/readme-images/lightouse-dogs-quiz.jpg)


## Deployment
### Version Control
The website was developed using Visual Studio Code IDE. Codes were pushed to github repository mikel072889.github.io/dogs-quiz-project2.

```git add . ``` command was used to add all changes in the current directory to the staging area.
<br>

```git commit -m “commit message”``` command was used to commit or move added changes to the local repository.
<br>

```git push ``` command was used to update the remote repository with local commits pushing all changes made to github repository.

### Deployment to Github Pages
In the early stages of the development, the website was deployed to GitHub Pages to facilitate early identification of bugs and issues. This enabled early fixes and shareable links that can be used to test website from multiple devices.
* Steps used in Deployment:
    * Open GitHub repository
    * Open the Settings tab
    * On the left sidebar, click on Pages
    * In Build and deployment, in the Branch section, select Main branch and set folder to /(root) and then click Save
    * Go back to Code tab
    * On the right-hand side, in the Deployments section, click on 'Deployments'
    * Under Active Deployments, a live link will be displayed under github-pages.
<br>

Here is the live link https://mikel072889.github.io/dogs-quiz-project2/

### Clone Repository Code Locally
Navigate to the GitHub Repository you want to clone to use locally:

* Click on the code drop down button
* Click on HTTPS
* Copy the repository link to the clipboard
* Open your IDE of choice (git must be installed for the next steps)
* Type git clone copied-git-url into the IDE terminal
* The project will now of been cloned on your local machine for use.

## Credits
* https://github.com/Code-Institute-Org/ci-full-template template used from Code Institute.
* The Love Maths walkthrough project from Code Institute was used as a guide in the initial phase of setting up this project.
* Youtube tutorial from https://www.youtube.com/channel/UCFbNIlppjAuEX4znoulh0Cw also used as guide in developing the javascript codes.  
* Awesome icons were sourced from https://fontawesome.com/.
* https://techsini.com/multi-mockup/index.php was used to generate mock-ups for this readme file.
* American Kennel Club was the source of the questions found in this quiz.
* https://www.pinterest.co.uk was the source of the GIFs used in this project.
* https: //a11y-guidelines.orange.com/en/articles/accessible-hiding was the source of the code to visually hide input label.

    
        




