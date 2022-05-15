const quizData = [
  {
    question: "What is the capital of India?",
    a: "New Delhi",
    b: "Mumbai",
    c: "Chennai",
    d: "Kolkata",

    correctAnswer: "a",
  },
  {
    question: "What is the capital of USA?",
    a: "New Delhi",
    b: "Mumbai",
    c: "Chennai",
    d: "Washington, D.C.",
    correctAnswer: "d",
  },
  {
    question: "What is the capital of Australia?",
    a: "New Delhi",
    b: "Mumbai",
    c: "Chennai",
    d: "Canberra",

    correctAnswer: "d",
  },
  {
    question: "What is the capital of Germany?",
    a: "New Delhi",
    b: "Mumbai",
    c: "Chennai",
    d: "Berlin",
    correctAnswer: "d",
  },
];

const quiz = document.getElementById("quiz");

const question = document.getElementById("question");

const choiceA = document.getElementById("a-textContent");
const choiceB = document.getElementById("b-textContent");
const choiceC = document.getElementById("c-textContent");
const choiceD = document.getElementById("d-textContent");

const submitBtn = document.getElementById("next-quiz");

const answersEls = document.querySelectorAll(".answer");

let score = 0;
let currentQuestion = 0;

const nextQuestion = () => {
  setTimeout(() => {
    let answer = getSelected();
    if (answer === quizData[currentQuestion].correctAnswer) {
      score++;
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = ` <h2> Your score : ${score} from ${quizData.length} question.</h2>
      <button  class='reload-quiz' onclick='location.reload()'>Play again</button>
      `;
    }
  }, 500);
};

const getSelected = () => {
  let answer = undefined;

  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
};

const deSelectAnswers = () => {
  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
};
const userAnswer = () => {};

const loadQuiz = () => {
  deSelectAnswers();
  let currentQuizData = quizData[currentQuestion];

  question.innerText = currentQuizData.question;
  choiceA.innerText = currentQuizData.a;
  choiceB.innerText = currentQuizData.b;
  choiceC.innerText = currentQuizData.c;
  choiceD.innerText = currentQuizData.d;
};

console.log("score", score);

submitBtn.addEventListener("click", nextQuestion);

loadQuiz();
