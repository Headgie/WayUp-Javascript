
const option1 = document.querySelector(".option1"),
  option2 = document.querySelector(".option2"),
  option3 = document.querySelector(".option3"),
  option4 = document.querySelector(".option4");

const optionElements = document.querySelectorAll(".option");

const question = document.getElementById("question");

const numberOfQuestion = document.getElementById("number-of-question"),
  numberOfAllQuestion = document.getElementById("number-of-all-questions");
let indexOfQuestion, // индекс текущего вопроса
  indexOfPage = 0; // индекс страницы

const answersTracker = document.getElementById("answers-tracker");

const btnNext = document.getElementById("btn-next");

let score = 0;

const correctAnswer = document.getElementById("correct-answer"),
  numberOfAllQuestions2 = document.getElementById("number-of-all-questions-2"),
  btnTryAgain = document.getElementById("btn-try-again");

const questions = [
  {
    question: "На каком языке писала книгу писательница Туве Янссон?",
    options: [
      "На финском",
      "На шведском",
      "На английском",
      "На немецком"
    ],
    rightAnswer: 1
  },
  {
    question: "Потомками каких троллей являются муми-тролли?",
    options: [
      "Английских",
      "Германских",
      "Скандинавских",
      "Китайских"
    ],
    rightAnswer: 2
  },
  {
    question: "Где в прошлом жили муми-тролли?",
    options: [
      "В сарае",
      "В подземных норах",
      "В палатках",
      "В домах за печами"
    ],
    rightAnswer: 3
  },
  {
    question: "На кого похожи муми-тролли",
    options: [
      "На бегемота",
      "На кролика",
      "На жирафа",
      "На котика"
    ],
    rightAnswer: 0
  },
  {
    question: "Какого героя не было в книге про муми-троллей?",
    options: [
      "Сниффа",
      "Снусмумрика",
      "Скифа",
      "Снорка"
    ],
    rightAnswer: 2
  },
  {
    question: "Как звали лучшего друга Муми-Тролля?",
    options: [
      "Титикака",
      "Фрекенбок",
      "Снусмумрик",
      "Хемуль"
    ],
    rightAnswer: 2
  },
]

numberOfAllQuestion.innerHTML = questions.length; // выводим колчество вопросов

const load = () => {
  question.innerHTML = questions[indexOfQuestion].question;

  option1.innerHTML = questions[indexOfQuestion].options[0];
  option2.innerHTML = questions[indexOfQuestion].options[1];
  option3.innerHTML = questions[indexOfQuestion].options[2];
  option4.innerHTML = questions[indexOfQuestion].options[3];

  numberOfQuestion.innerHTML = indexOfPage + 1;
  indexOfPage++;

}

let completedAnswers = [];

const randomQuestion = () => {
  let randomNumber = Math.floor(Math.random() * questions.length);
  let hitDuplicate = false;
  if (indexOfPage == questions.length) {
    quizOver();
  } else {
    if (completedAnswers.length > 0) {
      completedAnswers.forEach(item => {
        if (item == randomNumber) {
          hitDuplicate = true;
        }
      });
      if (hitDuplicate) {
        randomQuestion();
      } else {
        indexOfQuestion = randomNumber;
        load();
      }
    }
    if (completedAnswers.length == 0) {
      indexOfQuestion = randomNumber;
      load();
    }
  }
  completedAnswers.push(indexOfQuestion);
}

const checkAnswer = (e) => {
  console.log(e.target);
  console.log(e.target.dataset);
  if (e.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
    e.target.classList.add("correct");
    updateTracker("correct");
    score++;
  } else {
    e.target.classList.add("wrong");
    updateTracker("wrong");

  }
  disabledOptions();
}

for (option of optionElements) {
  option.addEventListener("click", e => checkAnswer(e));
}

const disabledOptions = () => {
  optionElements.forEach(item => {
    item.classList.add("disabled");
    if (item.dataset.id == questions[indexOfQuestion].rightAnswer) {
      item.classList.add("correct");
    }
  }
  );
}

const enableOptions = () => {
  optionElements.forEach(item => {
    item.classList.remove("disabled", "correct", "wrong");
  });
}

const answerTracker = () => {
  questions.forEach(item => {
    const div = document.createElement('div');
    answersTracker.appendChild(div);
  })
}

const updateTracker = (status) => {
  answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
}

const validate = () => {
  console.log(indexOfPage);
  if (!optionElements[0].classList.contains("disabled")) {
    alert("Вам нужно выбрать один из вариантов ответа.")
  } else {
    randomQuestion();
    enableOptions();

  };

}

const quizOver = () => {
  document.querySelector(".quiz-over-modal").classList.add("active");
  correctAnswer.innerHTML = score;
  numberOfAllQuestions2.innerHTML = questions.length;

};

const tryAgain = () => {
  window.location.reload();
}

btnNext.addEventListener("click", () => {
  validate();
});

btnTryAgain.addEventListener("click", tryAgain);

window.addEventListener("load", () => {
  randomQuestion();
  answerTracker();
})