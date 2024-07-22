const quizData = [
    {
        question: "Qual é a unidade básica da vida?",
        a: "Célula",
        b: "Tecido",
        c: "Órgão",
        d: "Sistema",
        correct: "a"
    },
    {
        question: "O que é fotossíntese?",
        a: "Processo de respiração das plantas",
        b: "Processo de alimentação dos animais",
        c: "Processo de produção de energia nas plantas",
        d: "Processo de digestão dos alimentos",
        correct: "c"
    },
    // Adicione mais perguntas aqui
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz() {
    const output = [];

    quizData.forEach((currentQuestion, questionNumber) => {
        const answers = [];

        for (letter in currentQuestion) {
            if (letter !== 'question' && letter !== 'correct') {
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} : ${currentQuestion[letter]}
                    </label>`
                );
            }
        }

        output.push(
            `<div class="quiz-question">
                <h3>${currentQuestion.question}</h3>
                <div class="quiz-options">${answers.join('')}</div>
            </div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.quiz-options');
    let numCorrect = 0;

    quizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correct) {
            numCorrect++;
            answerContainer.style.color = 'green';
        } else {
            answerContainer.style.color = 'red';
        }
    });

    resultsContainer.innerHTML = `${numCorrect} de ${quizData.length} corretas`;
}

buildQuiz();

submitButton.addEventListener('click', showResults);