const startButton = document.getElementById("startButton");

let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
let choice3 = document.getElementById("choice3");
let choice4 = document.getElementById("choice4");

let answers = [];
let correctAnswers = [
  ['C'],             // Q1
  ['A', 'D'],        // Q2 (multiple correct)
  ['A'],             // Q3
  ['D'],             // Q4
  ['A', 'B', 'C', 'D'] // Q5 (all correct)
];

let questionNumber = 1;
let score = 0;

function showQuestion1() {
  document.getElementById("questionParagraph").innerHTML = "What is the primary cause of desert formation?";
  choice1.textContent = "A. Abundant vegetation";
  choice2.textContent = "B. High rainfall";
  choice3.textContent = "C. Low precipitation";
  choice4.textContent = "D. Frequent earthquakes";
}

startButton.addEventListener("click", function() {
  document.getElementById("startButton").style.display = "none";
  document.getElementById("instructions").style.display = "none";
  document.getElementById("quizBody").style.display = "flex";
  document.getElementById("questionNumberText").textContent = `Question 1:`;
  showQuestion1();
});

function calculateScore() {
  score = 0;
  for (let i = 0; i < answers.length; i++) {
    if (correctAnswers[i].includes(answers[i])) {
      score++;
    }
  }
  document.getElementById("score").textContent = `Your Score: ${score} / 5`;
}

function nextQuestion() {
  questionNumber++;
  if (questionNumber === 6) {
    document.getElementById("quizBody").style.display = "none";
    document.getElementById("results").style.display = "flex";

    for (let i = 0; i < answers.length; i++) {
      document.getElementById(`answer${i + 1}`).textContent = answers[i];
    }

    calculateScore();
    return;
  }

  document.getElementById("questionNumberText").textContent = `Question ${questionNumber}:`;

  switch (questionNumber) {
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
