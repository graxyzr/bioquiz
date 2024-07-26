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
        question: "Qual é a ciência que estuda a vida?",
        answer: "Biologia",
        options: shuffleArray(["Biologia", "Química", "Física", "Astronomia"])
    },
    {
        numb: 2,
        question: "O que é a hipótese da sopa primordial?",
        answer: "A hipótese que sugere que a vida surgiu a partir de moléculas orgânicas simples em uma 'sopa' primordial",
        options: shuffleArray(["Uma teoria sobre a origem das galáxias", "Uma teoria sobre o desenvolvimento de vida extraterrestre", "A hipótese que sugere que a vida surgiu a partir de moléculas orgânicas simples em uma 'sopa' primordial", "Uma teoria sobre a origem das espécies"])
    },
    {
        numb: 3,
        question: "Quais são as características fundamentais que definem um ser vivo?",
        answer: "Organização celular, metabolismo, crescimento, reprodução, resposta a estímulos e adaptação",
        options: shuffleArray(["Organização celular, metabolismo, crescimento, reprodução, resposta a estímulos e adaptação", "Somente reprodução e resposta a estímulos", "Metabolismo e organização celular", "Somente crescimento e adaptação"])
    },
    {
        numb: 4,
        question: "No experimento de Francesco Redi, o que foi observado quando a carne foi deixada exposta ao ar em frasco coberto por gaze?",
        answer: "Não houve formação de vermes na carne",
        options: shuffleArray(["Não houve formação de vermes na carne", "A carne se transformou em vermes", "Os vermes apareceram apenas após várias semanas", "A carne se tornou podre, mas sem vermes"])
    },
    {
        numb: 5,
        question: "Quais são os passos do método científico?",
        answer: "Observação, formulação de hipótese, experimentação, análise dos dados e conclusão",
        options: shuffleArray(["Observação, formulação de hipótese, experimentação, análise dos dados e conclusão", "Observação, experimentação, revisão, conclusão", "Formulação de hipótese, revisão, análise dos dados", "Observação, análise, teoria, conclusão"])
    },
    {
        numb: 6,
        question: "O experimento de Griffith, realizado em 1928, envolveu a transformação de quais organismos?",
        answer: "Bactérias Streptococcus pneumoniae",
        options: shuffleArray(["Bactérias Streptococcus pneumoniae", "Bactérias Escherichia coli", "Vírus bacteriófagos", "Leveduras"])
    },
    {
        numb: 7,
        question: "O que Stanley Miller e Harold Urey usaram em seu experimento para simular a atmosfera primitiva da Terra?",
        answer: "Gases como metano, amônia, hidrogênio e vapor d'água",
        options: shuffleArray(["Gases como metano, amônia, hidrogênio e vapor d'água", "Oxigênio e nitrogênio", "Ácidos nucleicos e aminoácidos", "Gases nobres e dióxido de carbono"])
    },
    {
        numb: 8,
        question: "Qual a importância dos coacervados na teoria da origem da vida?",
        answer: "Eles são considerados como possíveis precursores das primeiras células",
        options: shuffleArray(["Eles são considerados como possíveis precursores das primeiras células", "Eles são estruturas para armazenamento de nutrientes", "Eles ajudam na digestão de moléculas orgânicas", "Eles são responsáveis pela síntese de proteínas"])
    },
    {
        numb: 9,
        question: "Quais dos seguintes processos são exemplos de catabolismo?",
        answer: "Respiração celular e digestão",
        options: shuffleArray(["Respiração celular e digestão", "Síntese de proteínas e fotossíntese", "Transcrição e tradução", "Replicação e mitose"])
    },
    {
        numb: 10,
        question: "Quais os tipos de nutrição?",
        answer: "Autotrófica e heterotrófica",
        options: shuffleArray(["Autotrófica e heterotrófica", "Aeróbica e anaeróbica", "Digestiva e metabólica", "Simbiótica e parasitária"])
    },
    {
        numb: 11,
        question: "Como a hipótese da abiogênese difere da biogênese?",
        answer: "Abiogênese sugere que a vida surgiu de matéria não viva, enquanto biogênese sugere que a vida surgiu de vida pré-existente",
        options: shuffleArray(["Abiogênese sugere que a vida surgiu de matéria não viva, enquanto biogênese sugere que a vida surgiu de vida pré-existente", "Abiogênese é sobre a origem dos vírus, enquanto biogênese é sobre a origem das células", "Abiogênese é uma teoria sobre a origem das espécies, enquanto biogênese é sobre a evolução", "Abiogênese e biogênese são sinônimos e não têm diferenças"])
    },
    {
        numb: 12,
        question: "O que é um grupo de controle e sua importância?",
        answer: "É um grupo em um experimento que não recebe o tratamento experimental, usado para comparar com o grupo experimental",
        options: shuffleArray(["É um grupo em um experimento que não recebe o tratamento experimental, usado para comparar com o grupo experimental", "É o grupo que recebe o tratamento experimental", "É um grupo de dados históricos", "É o grupo que define os parâmetros do experimento"])
    },
    {
        numb: 13,
        question: "Quais os elementos do 'CHONPS'?",
        answer: "Carbono, Hidrogênio, Oxigênio, Nitrogênio, Fósforo e Enxofre",
        options: shuffleArray(["Carbono, Hidrogênio, Oxigênio, Nitrogênio, Fósforo e Enxofre", "Carbono, Hidrogênio, Oxigênio, Nitrogênio, Potássio e Sódio", "Cálcio, Ferro, Magnésio, Potássio, Sódio e Cloro", "Carbono, Hidrogênio, Oxigênio, Nitrogênio, Cloro e Flúor"])
    },
    {
        numb: 14,
        question: "Escolha a alternativa que possui, em ordem de complexidade, os níveis de organização da vida:",
        answer: "Célula, Tecido, Órgão, Sistema, Organismo",
        options: shuffleArray(["Célula, Tecido, Órgão, Sistema, Organismo", "Molécula, Célula, Tecido, Órgão, Sistema, Organismo", "Célula, Órgão, Sistema, Organismo, Tecido", "Molécula, Órgão, Tecido, Célula, Organismo"])
    },
    {
        numb: 15,
        question: "Escolha a alternativa que explique o que é hereditariedade:",
        answer: "A transmissão de características genéticas dos pais para os filhos",
        options: shuffleArray(["A transmissão de características genéticas dos pais para os filhos", "A habilidade de um organismo se adaptar ao ambiente", "A capacidade de um organismo se reproduzir", "A habilidade de um organismo viver em diferentes ambientes"])
    },
    {
        numb: 16,
        question: "Selecione as características que diferem os seres-vivos dos vírus:",
        answer: "Os vírus não têm células e não realizam metabolismo independente",
        options: shuffleArray(["Os vírus não têm células e não realizam metabolismo independente", "Os vírus têm organelas e realizam metabolismo independente", "Os vírus possuem núcleo e são capazes de reprodução independente", "Os vírus são células e realizam metabolismo independente"])
    },
    {
        numb: 17,
        question: "Como os primeiros seres vivos obtinham energia e nutrientes em um ambiente primordial?",
        answer: "A partir de compostos orgânicos disponíveis na 'sopa primordial'",
        options: shuffleArray(["A partir de compostos orgânicos disponíveis na 'sopa primordial'", "Através da fotossíntese como as plantas modernas", "Usando energia do sol e absorvendo água", "A partir de outros seres vivos"])
    },
    {
        numb: 18,
        question: "Quais as características tinham os primeiros seres vivos na Terra?",
        answer: "Eram organismos unicelulares e anaeróbicos",
        options: shuffleArray(["Eram organismos unicelulares e anaeróbicos", "Eram multicelulares e fotossintetizantes", "Eram vírus e possuíam um núcleo", "Eram organismos multicelulares e aeróbicos"])
    },
    {
        numb: 19,
        question: "Explique a importância da reprodução para os seres vivos.",
        answer: "A reprodução permite a continuidade da espécie e a transmissão de características genéticas",
        options: shuffleArray(["A reprodução permite a continuidade da espécie e a transmissão de características genéticas", "A reprodução ajuda na obtenção de nutrientes", "A reprodução melhora a adaptação ao ambiente", "A reprodução promove a troca de material genético entre diferentes espécies"])
    },
    {
        numb: 20,
        question: "Qual é o nome da estrutura que produz energia em células vegetais durante a fotossíntese?",
        answer: "Cloroplastos",
        options: shuffleArray(["Cloroplastos", "Mitocôndria", "Ribossomos", "Vacuolos"])
    }
];
