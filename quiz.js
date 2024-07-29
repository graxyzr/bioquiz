//pegar todos os elementos
const start_btn = document.querySelector(".start_btn");
const info_box = document.querySelector(".info_box ");
const exit_btn = document.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list ");
const timeCount = quiz_box.querySelector(".timer .timer_sec");
const timeLine = quiz_box.querySelector("header .time_line");
const next_btn = document.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");
const logo = document.getElementById('logo'); // Pega o elemento logo

//se o botão de start for clicado
start_btn.onclick = () => {
  logo.classList.add('hidden'); // Adiciona a classe hidden para esconder a logo
  info_box.classList.add("activeInfo"); //mostra as regras
};

//se o botão de saida for clicado
exit_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); //esconde as regras
};

//se o botão continuar for clicado
continue_btn.onclick = () => {
  info_box.classList.remove("activeInfo"); //esconde as regras
  quiz_box.classList.add("activeQuiz"); //mostra o quiz
  showQuestions(0);
  queCounter(1);
  startTimer(15);
  startTimerLine(0);
};

let que_count = 0;
let que_numb = 1;
let counter;
let counterLine;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;

//se o botão próximo for clicado
next_btn.onclick = () => {
  if (que_count <= questions.length - 1) {
    que_count++;
    que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    next_btn.style.display = "none";
  } else {
    console.log("Questions Complete");
    showResultBox();
  }
};
//pegar as questões e as opções da array;

function showQuestions(index) {
  const que_text = document.querySelector(".que_text");
  //const option_list = document.querySelector(".option_list ");
  let que_tag = "<span>" + questions[index].question + "</span>";
  let option_tag =
    '<div class="option"><span>' +
    questions[index].options[0] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[1] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[2] +
    "</span></div>" +
    '<div class="option"><span>' +
    questions[index].options[3] +
    "</span></div>";
  que_text.innerHTML = que_tag;
  option_list.innerHTML = option_tag;

  const option = option_list.querySelectorAll(".option");
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}

let tickIcon = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIcon = '<div class="icon cross"><i class="fas fa-times"></i></div>';

function optionSelected(answer) {
  clearInterval(counter);
  clearInterval(counterLine);
  let userAns = answer.textContent;
  let correctAns = questions[que_count].answer;
  let allOptions = option_list.children.length;
  if (userAns === correctAns) {
    console.log("sim");
    answer.classList.add("correct");
    answer.insertAdjacentHTML("beforeend", tickIcon);
    userScore++;
  } else {
    console.log("nop");
    answer.classList.add("incorrect");
    answer.insertAdjacentHTML("beforeend", crossIcon);
    //marcar automamticamente a certa
    for (let i = 0; i < allOptions; i++) {
      if (option_list.children[i].textContent == correctAns) {
        option_list.children[i].setAttribute("class", "option correct");
        option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
      }
    }
  }
  //a seleção do usuário cancela as outras
  for (let i = 0; i < allOptions; i++) {
    option_list.children[i].classList.add("disabled");
  }
  next_btn.style.display = "block";
}

function showResultBox() {
  info_box.classList.remove("activeInfo"); //esconde as regras
  quiz_box.classList.remove("activeQuiz"); //esconde o quiz
  result_box.classList.add("activeResult"); //mostra o resultado final
  if (userScore >= 12) {
    document.querySelector(".complete_text").innerHTML = "Muito bem!";
    document.querySelector(".score_text").innerHTML =
      "<span>Tu consegiu<p>" + userScore + "</p>de<p>20</p></span>";
  } else if (userScore <= 12 && userScore >= 6) {
    document.querySelector(".complete_text").innerHTML = "Bom!";
    document.querySelector(".score_text").innerHTML =
      "<span>Tu consegiu<p>" + userScore + "</p>de<p>20</p></span>";
  } else {
    document.querySelector(".complete_text").innerHTML =
      "É,,, Daria para ser melhor!";
    document.querySelector(".score_text").innerHTML =
      "<span>Tu consegiu<p>" + userScore + "</p>de<p>20</p></span>";
  }
}

function startTimer(time) {
  counter = setInterval(timer, 1000);
  let allOptions = option_list.children.length;
  let correctAns = questions[que_count].answer;
  function timer() {
    timeCount.textContent = time;
    time--;
    if (time < 9) {
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero;
    }
    if (time < 0) {
      clearInterval(counter);
      timeCount.textContent = "00";
      for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
        if (option_list.children[i].textContent == correctAns) {
          option_list.children[i].setAttribute("class", "option correct");
          option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
        }
      }
      next_btn.style.display = "block";
    }
  }
}

function startTimerLine(time) {
  counterLine = setInterval(timer, 29);
  function timer() {
    time += 1;
    timeLine.style.width = time + "px";
    if (time > 549) {
      clearInterval(counterLine);
    }
  }
}

function queCounter(index) {
  const botton_ques_counter = quiz_box.querySelector(".total_que");
  let totalQuesCounTag =
    "<span><p>" +
    (que_count + 1) +
    "</p>de<p>" +
    questions.length +
    "</p>Questões</span>";
  botton_ques_counter.innerHTML = totalQuesCounTag;
}


quit_quiz.onclick = () => {
  window.location.reload();
  alert("obrigada por jogar!");
};

restart_quiz.onclick = () => {
  window.location.reload();
  let que_count = 0;
  let que_numb = 1;
  let timeValue = 15;
  let widthValue = 0;
  let userScore = 0;
  showQuestions(que_count);
  queCounter(que_numb);
  clearInterval(counter);
  startTimer(timeValue);
  clearInterval(counterLine);
  startTimerLine(widthValue);
  next_btn.style.display = "none";
};
