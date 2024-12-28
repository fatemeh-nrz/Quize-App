//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let userScoreFinal = document.getElementById("user-score-final");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let spanName = document.querySelector(".span_name");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;

//loginBtn//
const modalHeaderSpan = document.querySelector(".modal-header span");
const loginBtn = document.querySelector(".header-button");
const loginBtnSpan = document.querySelector(".header-button span");
const loginModal = document.querySelector(".login-modal");
const loginModalBtn = document.querySelector(".login-modal button");
const modalTimes = document.getElementById("modal-times");
const modalForm = document.getElementById("form");
const userName = document.getElementById("username");
const password = document.getElementById("password");
const input_btn = document.querySelector(".input_btn");
//loginBtn//
/////////////////////////////////////////////////////////////////////////////////////

//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: "Which is the most widely spoken language in the world?",
    options: ["Spanish", "Mandarin", "English", "German"],
    correct: "Mandarin",
  },
  {
    id: "1",
    question: "Which is the only continent in the world without a desert?",
    options: ["North America", "Asia", "Africa", "Europe"],
    correct: "Europe",
  },
  {
    id: "2",
    question: "Who invented Computer?",
    options: ["Charles Babbage", "Henry Luce", "Henry Babbage", "Charles Luce"],
    correct: "Charles Babbage",
  },
  {
    id: "3",
    question:
      "What do you call a computer on a network that requests files from another computer?",
    options: ["A client", "A host", "A router", "A web server"],
    correct: "A client",
  },
  {
    id: "4",
    question:
      "Hardware devices that are not part of the main computer system and are often added later to the system.",
    options: ["Peripheral", "Clip art", "Highlight", "Execute"],
    correct: "Peripheral",
  },
  {
    id: "5",
    question:
      "The main computer that stores the files that can be sent to computers that are networked together is:",
    options: ["Clip art", "Mother board", "Peripheral", "File server"],
    correct: "File server",
  },
  {
    id: "6",
    question: "How can you catch a computer virus?",
    options: [
      "Sending e-mail messages",
      "Using a laptop during the winter",
      "Opening e-mail attachments",
      "Shopping on-line",
    ],
    correct: "Opening e-mail attachments",
  },
  {
    id: "7",
    question: "Google (www.google.com) is a:",
    options: [
      "Search Engine",
      "Number in Math",
      "Directory of images",
      "Chat service on the web",
    ],
    correct: "Search Engine",
  },
  {
    id: "8",
    question: "Which is not an Internet protocol?",
    options: ["HTTP", "FTP", "STP", "IP"],
    correct: "STP",
  },
  {
    id: "9",
    question: "Which of the following is not a valid domain name?",
    options: [
      "www.yahoo.com",
      "www.yahoo.co.uk",
      "www.com.yahoo",
      "www.yahoo.co.in",
    ],
    correct: "www.com.yahoo",
  },
];

function showAllScore() {
  let l, i;
  userScoreFinal.innerHTML = "";
  for (i = 0; i < localStorage.length; i++) {
    x = localStorage.key(i);

    userScoreFinal.innerHTML +=
      x + "----------------" + localStorage.getItem(x) + "<br>";
  }
}

function showModal() {
  if (loginBtn.innerText === "Login and Register") {
    loginModal.classList.add("active");
    // overlay.style.display = "block";
    // document.body.style.overflow = "hidden";
  }
}

//Next Button
nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    //increment questionCount
    questionCount += 1;
    //if last question
    if (questionCount == quizArray.length) {
      //hide question container and display score
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");
      //user score
      x = localStorage.setItem(userName.value, JSON.stringify(scoreCount));
      userScore.innerHTML =
        "Your score is " +
        userName.value +
        "<br>" +
        "**************" +
        scoreCount +
        " out of " +
        questionCount;
      showAllScore();
    } else {
      //display questionCount
      countOfQuestion.innerHTML =
        questionCount + 1 + " of " + quizArray.length + " Question";
      //display quiz

      quizDisplay(questionCount);
      count = 11;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);
//Timer
const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `${count}s`;
    // timeLeft.innerHTML = userName.value;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};

function RepeatQuize() {
  let n = 1;
  let flag = true;
  while (flag) {
    scoreContainer.classList.add("hide");
    loginModal.classList.add("active");
    userName.value = "";
    password.value = "";
    n++;
    if (n > 3) {
      flag = false;
  }
  // alert(" quize the end")
  }
}

// function stopQuize (){
//   let flag=true;
//   let count = 0;
//    for(var i = 0; i <= 3; i++) {
//     scoreContainer.classList.add("hide");
//     loginModal.classList.add("active");
//     userName.value = "";
//     password.value = "";
//     count+=1;
//      if(count == 3) {  // Your error condition
//       //  scoreContainer.style.backgroundColor="red"
//        flag=false;
//      }
//     }

//   if(errors) {  // Is the flag "up"? (i.e. > 0)
//  alert("There was a problem!");

// function o(){
//   var errors = 0;
//   for(var i = 0; i < 3; i++) {
//     if(i == 6) {  // Your error condition
//       errors++;
//     }
//   }
//   if(errors) {  // Is the flag "up"? (i.e. > 0)
//     alert("There was a problem!");
//   }
// }
// console.log(o())

// const start_Timer = () => {
//   if (isstartFlag) {
//     Intervall = setInterval(() => {
//       setmiliSsecond(a => a + 1);
//       //updater function
//       // updater =(a)=>a+1
//     }, 10);
//     setisstartFlag(false);
//   }
// }

//loginBtn//
//loginBtnAddeventlistener//
loginBtn.addEventListener("click", showModal);
restart.style.backgroundColor = "lightpink";
restart.addEventListener("click", RepeatQuize);
// let result = RepeatQuize.repeat(3);
// restart.addEventListener ("click",() => {
// scoreContainer.classList.add("hide");
// loginModal.classList.add("active");
// initial();}
// )

modalTimes.addEventListener("click", closeModal);
modalForm.addEventListener("submit", function (event) {
  event.preventDefault();
  checkInputs();
});
//loginBtnAddeventlistener//

//loginBtnFunction//

// console.log(userName.value)
function closeModal() {
  loginModal.classList.remove("active");
  // overlay.style.display = "none";
  // document.body.style.overflow = "auto";
  // closeModal();
  // spanName.innerText = userName.value;
}
// function closeForm(){
//   closeModal();
//     const span = loginBtn.querySelector("span");
//     span.innerText = "حساب کاربری";
// }
function checkInputs() {
  const userNameValue = userName.value.trim();
  const passwordValue = password.value.trim();
  if (userNameValue === "") {
    setErrorFor(userName, "نام کاربری حتما باید وارد شود");
  } else if (!checkUserNameWithRegex(userNameValue)) {
    setErrorFor(userName, "نام کاربری معتبر نمی باشد");
  } else {
    setSuccessFor(userName);
  }
  if (passwordValue === "") {
    setErrorFor(password, "رمز عبور باید حتما وارد شود");
  } else if (passwordValue.length < 6) {
    setErrorFor(password, "تعداد کاراکترهای رمز عبور باید بیشتر از 6 باشد");
  } else {
    setSuccessFor(password);
    // checkRecaptcha();
    spanName.innerHTML = userName.value;
    closeModal();
  }
}

function setErrorFor(input, message) {
  const modalInputParentElement = input.parentElement;
  const small = modalInputParentElement.querySelector("small");
  small.innerText = message;
  small.style.visibility = "visible";
  modalInputParentElement.classList.remove("success");
  modalInputParentElement.classList.add("error");
  return false;
}

function setSuccessFor(input) {
  const modalInputParentElement = input.parentElement;
  const small = modalInputParentElement.querySelector("small");
  small.style.visibility = "hidden";
  modalInputParentElement.classList.remove("error");
  modalInputParentElement.classList.add("success");
}

function checkUserNameWithRegex(email) {
  const pattern = /^([a-zA-Z0-9\.-]+)@([a-z0-9]+).([a-z]{2,5})(.[a-z{2,5}])?$/;
  if (pattern.test(email)) {
    return true;
  }
}

//Display quiz
const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  //Hide other cards
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  //display current question card
  quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation

function quizCreator() {
  //randomly sort questions
  quizArray.sort(() => Math.random() - 0.5);
  //generate quiz
  for (let i of quizArray) {
    //randomly sort options
    i.options.sort(() => Math.random() - 0.5);
    //quiz card creation
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    //question number
    countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
    //question
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    //options
    div.innerHTML += `
        <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
         <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
          <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
           <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
        `;
    quizContainer.appendChild(div);
  }
}

//Checker Function to check if option is correct or not

function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  //if user clicked answer == correct option stored in object
  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    //For marking the correct option
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  // localStorage.setItem("farahi", JSON.stringify(scoreCount));
  //clear interval(stop timer)
  clearInterval(countdown);
  //disable all options
  options.forEach((element) => {
    element.disabled = true;
  });
}

//initial

function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 11;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

//when user click on start button
// startButton.addEventListener("click", () => {

//     startScreen.classList.add("hide");
//     displayContainer.classList.remove("hide");
//     initial();
//   })

input_btn.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

//hide quiz and display start screen
window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};

//loginBtnFunction//

//loginBtn//
