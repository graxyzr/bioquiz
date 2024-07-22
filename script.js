const questions = [
    { numb: 1, question: "Qual é o processo pelo qual as plantas produzem seu próprio alimento?", answer: "Fotossíntese", options: ["Respiração", "Digestão", "Fotossíntese", "Fermentação"] },
    { numb: 2, question: "Qual é o órgão principal do sistema nervoso humano?", answer: "Cérebro", options: ["Coração", "Pulmões", "Cérebro", "Fígado"] },
    { numb: 3, question: "Qual é a célula responsável pelo transporte de oxigênio no sangue?", answer: "Eritrócitos", options: ["Leucócitos", "Plaquetas", "Eritrócitos", "Neurônios"] },
    { numb: 4, question: "Qual é o principal componente das membranas celulares?", answer: "Lipídios", options: ["Proteínas", "Carboidratos", "Lipídios", "Ácidos nucleicos"] },
    { numb: 5, question: "Qual é o nome do processo pelo qual a água é absorvida pelas raízes das plantas?", answer: "Osmose", options: ["Transpiração", "Osmose", "Diffusão", "Absorção"] },
    { numb: 6, question: "Qual é o nome da estrutura que armazena energia nas células?", answer: "Mitocôndria", options: ["Ribossomos", "Mitocôndria", "Cloroplastos", "Lisossomos"] },
    { numb: 7, question: "Qual é o nome do processo de divisão celular que resulta em duas células-filhas idênticas?", answer: "Mitosse", options: ["Mitosse", "Meiose", "Ciclo celular", "Fagocitose"] },
    { numb: 8, question: "Qual é o nome da molécula que transporta energia nas células?", answer: "ATP", options: ["DNA", "RNA", "ATP", "NADPH"] },
    { numb: 9, question: "Qual é o nome da estrutura responsável pela fotossíntese nas células vegetais?", answer: "Cloroplastos", options: ["Mitocôndria", "Cloroplastos", "Ribossomos", "Vacuolos"] },
    { numb: 10, question: "Qual é a função principal dos leucócitos no sistema imunológico?", answer: "Defender o corpo contra patógenos", options: ["Transporte de oxigênio", "Coagulação do sangue", "Defender o corpo contra patógenos", "Armazenar nutrientes"] },
    { numb: 11, question: "Qual é o nome do processo de síntese de proteínas a partir do RNA mensageiro?", answer: "Tradução", options: ["Transcrição", "Tradução", "Replicação", "Translocação"] },
    { numb: 12, question: "Qual é o nome do tipo de RNA que transporta aminoácidos para o ribossomo?", answer: "RNA transportador (tRNA)", options: ["RNA mensageiro (mRNA)", "RNA ribossômico (rRNA)", "RNA transportador (tRNA)", "RNA de interferência (miRNA)"] },
    { numb: 13, question: "Qual é o nome da célula responsável pela produção de anticorpos?", answer: "Linfócito B", options: ["Linfócito T", "Macrófago", "Linfócito B", "Neurônio"] },
    { numb: 14, question: "Qual é o nome da estrutura que contém o material genético na célula eucariótica?", answer: "Núcleo", options: ["Núcleo", "Citoplasma", "Membrana celular", "Retículo endoplasmático"] },
    { numb: 15, question: "Qual é o nome do processo pelo qual o DNA é copiado para produzir uma nova molécula de DNA?", answer: "Replicação", options: ["Transcrição", "Replicação", "Tradução", "Mutação"] },
    { numb: 16, question: "Qual é o nome da molécula que armazena a informação genética em organismos vivos?", answer: "DNA", options: ["RNA", "DNA", "Proteínas", "Carboidratos"] },
    { numb: 17, question: "Qual é a função dos ribossomos nas células?", answer: "Síntese de proteínas", options: ["Produção de energia", "Armazenamento de nutrientes", "Síntese de proteínas", "Degradação de moléculas"] },
    { numb: 18, question: "Qual é o nome da estrutura que armazena água e nutrientes em células vegetais?", answer: "Vacuolo", options: ["Mitocôndria", "Cloroplasto", "Ribossomo", "Vacuolo"] },
    { numb: 19, question: "Qual é a unidade básica da vida?", answer: "Célula", options: ["Molécula", "Organoide", "Tecido", "Célula"] },
    { numb: 20, question: "Qual é o principal tipo de célula que combate infecções no corpo humano?", answer: "Leucócitos", options: ["Eritrócitos", "Plaquetas", "Leucócitos", "Hemoglobina"] }
];

let currentQuestionIndex = 0;

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const nextButton = document.getElementById('next');
const submitButton = document.getElementById('submit');

function buildQuiz() {
    const currentQuestion = questions[currentQuestionIndex];
    const answers = [];

    currentQuestion.options.forEach((option) => {
        answers.push(
            `<label>
                <input type="radio" name="question${currentQuestionIndex}" value="${option}">
                ${option}
            </label>`
        );
    });

    quizContainer.innerHTML = `
        <div class="quiz-question">
            <div class="question"><strong>${currentQuestion.numb}) </strong>${currentQuestion.question}</div>
            <div class="quiz-options">${answers.join('')}</div>
        </div>
    `;

    if (currentQuestionIndex === questions.length - 1) {
        nextButton.style.display = 'none';
        submitButton.style.display = 'block';
    } else {
        nextButton.style.display = 'block';
        submitButton.style.display = 'none';
    }
}

function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.quiz-options');
    let numCorrect = 0;

    questions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.answer) {
            numCorrect++;
        }
    });

    quizContainer.innerHTML = '';
    resultsContainer.innerHTML = numCorrect > 10 ?
        `Parabéns! Você acertou ${numCorrect} de ${questions.length} questões.` :
        `Você acertou ${numCorrect} de ${questions.length} questões. Continue praticando para melhorar!`;
}

function nextQuestion() {
    const selectedOption = document.querySelector(`input[name="question${currentQuestionIndex}"]:checked`);

    if (!selectedOption) {
        alert('Por favor, selecione uma resposta antes de prosseguir.');
        return;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        buildQuiz();
    }
}

nextButton.addEventListener('click', nextQuestion);
submitButton.addEventListener('click', showResults);

buildQuiz();
