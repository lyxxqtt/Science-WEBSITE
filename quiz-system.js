const startButton = document.getElementById("startButton");

let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
let choice3 = document.getElementById("choice3");
let choice4 = document.getElementById("choice4");

let answers = [];
let correctAnswers = [
  'C',                   // Q1
  ['A', 'D'],            // Q2
  'A',                   // Q3
  'D',                   // Q4
  ['A', 'B', 'C', 'D']   // Q5
];

let questionNumber = 1;
let score = 0;

// Question 1
function showQuestion1() {
  document.getElementById("questionParagraph").innerHTML = 
    "Which of the following is a major cause of climate change?";

  choice1.textContent = "A. Solar flares";
  choice2.textContent = "B. Volcanic eruptions";
  choice3.textContent = "C. Greenhouse gas emissions from human activities";
  choice4.textContent = "D. Ocean currents";
}

// Question 2
function showQuestion2() {
  document.getElementById("questionParagraph").innerHTML = 
    "Desert ecosystems are defined by extremely low rainfall and can be either hot or cold. Hot deserts, such as the Sahara, are characterized by intense heat during the day and cold temperatures at night. <br><br> Having said that, do Cold Deserts exist?";

  choice1.textContent = "A. Yes";
  choice2.textContent = "B. No";
  choice3.textContent = "C. Maybe";
  choice4.textContent = "D. Definitely";
}

// Question 3
function showQuestion3() {
  document.getElementById("questionParagraph").innerHTML = 
    "The biosphere is defined as the largest scale of the ecological organization where all ecosystems (and biomes) in the world interact. It is the total of all ecosystems on the planet. <br><br> Which is NOT part of the biosphere?";

  choice1.textContent = "A. Earth";
  choice2.textContent = "B. Ecosystems";
  choice3.textContent = "C. Biomes";
  choice4.textContent = "D. Organisms";
}

// Question 4
function showQuestion4() {
  document.getElementById("questionParagraph").innerHTML = 
    "Which of the following is NOT an eco-friendly habit for students?";

  choice1.textContent = "A. Bring a reusable water bottle instead of buying plastic ones.";
  choice2.textContent = "B. Participate in local clean-up drives or tree planting.";
  choice3.textContent = "C. Use both sides of paper and recycle used notebooks.";
  choice4.textContent = "D. Leave lights and appliances on when not in use.";
}

// Question 5
function showQuestion5() {
  document.getElementById("questionParagraph").innerHTML = 
    "Which of the following describes Ecology?";

  choice1.textContent = "A. The study of how organisms interact with each other and their environment.";
  choice2.textContent = "B. A branch of biology that examines ecosystems and the relationships within them.";
  choice3.textContent = "C. The science that explores how living things depend on and impact their surroundings.";
  choice4.textContent = "D. The analysis of energy flow and matter cycling among organisms and the environment.";
}

// Start Quiz
startButton.addEventListener("click", function() {
  document.getElementById("startButton").style.display = "none";
  document.getElementById("instructions").style.display = "none";
  document.getElementById("quizBody").style.display = "flex";
  showQuestion1(); // show the first question on start
});

// Move to Next Question
function nextQuestion() {
  questionNumber++;

  if (questionNumber == 6) {
    console.log(answers);
    document.getElementById("quizBody").style.display = "none";
    document.getElementById("results").style.display = "flex";

    // Show user's answers
    for (let i = 0; i < answers.length; i++) {
      document.getElementById(`answer${i + 1}`).textContent = answers[i];
    }

    // Calculate and display score
    for (let i = 0; i < answers.length; i++) {
      let correct = correctAnswers[i];
      if (Array.isArray(correct)) {
        if (correct.includes(answers[i])) {
          score++;
        }
      } else {
        if (answers[i] === correct) {
          score++;
        }
      }
    }

    document.getElementById("score").textContent = `Your Score: ${score} / 5`;
    return;
  }

  // Show next question
  switch (questionNumber) {
    case 1:
      showQuestion1();
      break;
    case 2:
      showQuestion2();
      break;
    case 3:
      showQuestion3();
      break;
    case 4:
      showQuestion4();
      break;
    case 5:
      showQuestion5();
      break;
  }
}

// Answer Selection Events
choice1.addEventListener("click", function() {
  answers.push("A");
  nextQuestion();
});

choice2.addEventListener("click", function() {
  answers.push("B");
  nextQuestion();
});

choice3.addEventListener("click", function() {
  answers.push("C");
  nextQuestion();  
});

choice4.addEventListener("click", function() {
  answers.push("D");
  nextQuestion();
});
