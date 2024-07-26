function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const questions = [
    {
        numb: 1,
        question: "Qual é o processo pelo qual as plantas produzem seu próprio alimento?",
        answer: "Fotossíntese",
        options: shuffleArray(["Fotossíntese", "Digestão", "Fermentação", "Respiração"])
    },
    {
        numb: 2,
        question: "Qual é o órgão principal do sistema nervoso humano?",
        answer: "Cérebro",
        options: shuffleArray(["Cérebro", "Fígado", "Coração", "Pulmões"])
    },
    {
        numb: 3,
        question: "Qual é a célula responsável pelo transporte de oxigênio no sangue?",
        answer: "Eritrócitos",
        options: shuffleArray(["Eritrócitos", "Neurônios", "Leucócitos", "Plaquetas"])
    },
    {
        numb: 4,
        question: "Qual é o principal componente das membranas celulares?",
        answer: "Lipídios",
        options: shuffleArray(["Lipídios", "Carboidratos", "Proteínas", "Ácidos nucleicos"])
    },
    {
        numb: 5,
        question: "Qual é o nome do processo pelo qual a água é absorvida pelas raízes das plantas?",
        answer: "Osmose",
        options: shuffleArray(["Osmose", "Absorção", "Transpiração", "Diffusão"])
    },
    {
        numb: 6,
        question: "Qual é o nome da estrutura que armazena energia nas células?",
        answer: "Mitocôndria",
        options: shuffleArray(["Mitocôndria", "Cloroplastos", "Ribossomos", "Lisossomos"])
    },
    {
        numb: 7,
        question: "Qual é o nome do processo de divisão celular que resulta em duas células-filhas idênticas?",
        answer: "Mitosse",
        options: shuffleArray(["Meiose", "Fagocitose", "Mitosse", "Ciclo celular"])
    },
    {
        numb: 8,
        question: "Qual é o nome da molécula que transporta energia nas células?",
        answer: "ATP",
        options: shuffleArray(["ATP", "NADPH", "DNA", "RNA"])
    },
    {
        numb: 9,
        question: "Qual é o nome da estrutura responsável pela fotossíntese nas células vegetais?",
        answer: "Cloroplastos",
        options: shuffleArray(["Cloroplastos", "Ribossomos", "Mitocôndria", "Vacuolos"])
    },
    {
        numb: 10,
        question: "Qual é a função principal dos leucócitos no sistema imunológico?",
        answer: "Defender o corpo contra patógenos",
        options: shuffleArray(["Armazenar nutrientes", "Coagulação do sangue", "Defender o corpo contra patógenos", "Transporte de oxigênio"])
    },
    {
        numb: 11,
        question: "Qual é o nome do processo de síntese de proteínas a partir do RNA mensageiro?",
        answer: "Tradução",
        options: shuffleArray(["Transcrição", "Replicação", "Tradução", "Translocação"])
    },
    {
        numb: 12,
        question: "Qual é o nome do tipo de RNA que transporta aminoácidos para o ribossomo?",
        answer: "RNA transportador (tRNA)",
        options: shuffleArray(["RNA transportador (tRNA)", "RNA mensageiro (mRNA)", "RNA ribossômico (rRNA)", "RNA de interferência (miRNA)"])
    },
    {
        numb: 13,
        question: "Qual é o nome da célula responsável pela produção de anticorpos?",
        answer: "Linfócito B",
        options: shuffleArray(["Neurônio", "Macrófago", "Linfócito T", "Linfócito B"])
    },
    {
        numb: 14,
        question: "Qual é o nome da estrutura que contém o material genético na célula eucariótica?",
        answer: "Núcleo",
        options: shuffleArray(["Retículo endoplasmático", "Núcleo", "Membrana celular", "Citoplasma"])
    },
    {
        numb: 15,
        question: "Qual é o nome do processo pelo qual o DNA é copiado para produzir uma nova molécula de DNA?",
        answer: "Replicação",
        options: shuffleArray(["Tradução", "Replicação", "Transcrição", "Mutação"])
    },
    {
        numb: 16,
        question: "Qual é o nome da molécula que armazena a informação genética em organismos vivos?",
        answer: "DNA",
        options: shuffleArray(["Carboidratos", "Proteínas", "RNA", "DNA"])
    },
    {
        numb: 17,
        question: "Qual é a função dos ribossomos nas células?",
        answer: "Síntese de proteínas",
        options: shuffleArray(["Degradação de moléculas", "Produção de energia", "Armazenamento de nutrientes", "Síntese de proteínas"])
    },
    {
        numb: 18,
        question: "Qual é o nome da estrutura que armazena água e nutrientes em células vegetais?",
        answer: "Vacuolo",
        options: shuffleArray(["Cloroplasto", "Vacuolo", "Mitocôndria", "Ribossomo"])
    },
    {
        numb: 19,
        question: "Qual é a unidade básica da vida?",
        answer: "Célula",
        options: shuffleArray(["Célula", "Tecido", "Molécula", "Organoide"])
    },
    {
        numb: 20,
        question: "Quais dos seguintes pensadores são conhecidos por suas contribuições às teorias da abiogênese e da biogênese?",
        answer: "Louis Pasteur e Francesco Redi",
        options: shuffleArray(["Louis Pasteur e Francesco Redi", "Stanley Miller e Harold Urey", "Charles Darwin e Gregor Mendel", "Robert Hooke e Anton van Leeuwenhoek"])
    }
];
