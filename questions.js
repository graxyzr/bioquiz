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
        options: shuffleArray(["Respiração", "Digestão", "Fotossíntese", "Fermentação"])
    },
    {
        numb: 2,
        question: "Qual é o órgão principal do sistema nervoso humano?",
        answer: "Cérebro",
        options: shuffleArray(["Coração", "Pulmões", "Cérebro", "Fígado"])
    },
    {
        numb: 3,
        question: "Qual é a célula responsável pelo transporte de oxigênio no sangue?",
        answer: "Eritrócitos",
        options: shuffleArray(["Leucócitos", "Plaquetas", "Eritrócitos", "Neurônios"])
    },
    {
        numb: 4,
        question: "Qual é o principal componente das membranas celulares?",
        answer: "Lipídios",
        options: shuffleArray(["Proteínas", "Carboidratos", "Lipídios", "Ácidos nucleicos"])
    },
    {
        numb: 5,
        question: "Qual é o nome do processo pelo qual a água é absorvida pelas raízes das plantas?",
        answer: "Osmose",
        options: shuffleArray(["Transpiração", "Osmose", "Diffusão", "Absorção"])
    },
    {
        numb: 6,
        question: "Qual é o nome da estrutura que armazena energia nas células?",
        answer: "Mitocôndria",
        options: shuffleArray(["Ribossomos", "Mitocôndria", "Cloroplastos", "Lisossomos"])
    },
    {
        numb: 7,
        question: "Qual é o nome do processo de divisão celular que resulta em duas células-filhas idênticas?",
        answer: "Mitosse",
        options: shuffleArray(["Mitosse", "Meiose", "Ciclo celular", "Fagocitose"])
    },
    {
        numb: 8,
        question: "Qual é o nome da molécula que transporta energia nas células?",
        answer: "ATP",
        options: shuffleArray(["DNA", "RNA", "ATP", "NADPH"])
    },
    {
        numb: 9,
        question: "Qual é o nome da estrutura responsável pela fotossíntese nas células vegetais?",
        answer: "Cloroplastos",
        options: shuffleArray(["Mitocôndria", "Cloroplastos", "Ribossomos", "Vacuolos"])
    },
    {
        numb: 10,
        question: "Qual é a função principal dos leucócitos no sistema imunológico?",
        answer: "Defender o corpo contra patógenos",
        options: shuffleArray(["Transporte de oxigênio", "Coagulação do sangue", "Defender o corpo contra patógenos", "Armazenar nutrientes"])
    },
    {
        numb: 11,
        question: "Qual é o nome do processo de síntese de proteínas a partir do RNA mensageiro?",
        answer: "Tradução",
        options: shuffleArray(["Transcrição", "Tradução", "Replicação", "Translocação"])
    },
    {
        numb: 12,
        question: "Qual é o nome do tipo de RNA que transporta aminoácidos para o ribossomo?",
        answer: "RNA transportador (tRNA)",
        options: shuffleArray(["RNA mensageiro (mRNA)", "RNA ribossômico (rRNA)", "RNA transportador (tRNA)", "RNA de interferência (miRNA)"])
    },
    {
        numb: 13,
        question: "Qual é o nome da célula responsável pela produção de anticorpos?",
        answer: "Linfócito B",
        options: shuffleArray(["Linfócito T", "Macrófago", "Linfócito B", "Neurônio"])
    },
    {
        numb: 14,
        question: "Qual é o nome da estrutura que contém o material genético na célula eucariótica?",
        answer: "Núcleo",
        options: shuffleArray(["Núcleo", "Citoplasma", "Membrana celular", "Retículo endoplasmático"])
    },
    {
        numb: 15,
        question: "Qual é o nome do processo pelo qual o DNA é copiado para produzir uma nova molécula de DNA?",
        answer: "Replicação",
        options: shuffleArray(["Transcrição", "Replicação", "Tradução", "Mutação"])
    },
    {
        numb: 16,
        question: "Qual é o nome da molécula que armazena a informação genética em organismos vivos?",
        answer: "DNA",
        options: shuffleArray(["RNA", "DNA", "Proteínas", "Carboidratos"])
    },
    {
        numb: 17,
        question: "Qual é a função dos ribossomos nas células?",
        answer: "Síntese de proteínas",
        options: shuffleArray(["Produção de energia", "Armazenamento de nutrientes", "Síntese de proteínas", "Degradação de moléculas"])
    },
    {
        numb: 18,
        question: "Qual é o nome da estrutura que armazena água e nutrientes em células vegetais?",
        answer: "Vacuolo",
        options: shuffleArray(["Mitocôndria", "Cloroplasto", "Ribossomo", "Vacuolo"])
    },
    {
        numb: 19,
        question: "Qual é a unidade básica da vida?",
        answer: "Célula",
        options: shuffleArray(["Molécula", "Organoide", "Tecido", "Célula"])
    },
    {
        numb: 20,
        question: "Quais dos seguintes pensadores são conhecidos por suas contribuições às teorias da abiogênese e da biogênese?",
        answer: "Louis Pasteur e Francesco Redi",
        options: shuffleArray(["Louis Pasteur e Francesco Redi", "Charles Darwin e Gregor Mendel", "Stanley Miller e Harold Urey", "Robert Hooke e Anton van Leeuwenhoek"])
    }
];
