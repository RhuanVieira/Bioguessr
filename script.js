const quizData = [
    {
      question: "O que é transporte celular?",
      answer: "É o movimento de substâncias para dentro ou fora da célula através da membrana plasmática.",
      options: [
        "É o movimento de substâncias para dentro ou fora da célula através da membrana plasmática.",
          "É a produção de proteínas pelos ribossomos da célula.",
        "É o desslocamento da célula para outras regiões do corpo durante processos como a resposta imunológica.",
        "É o processo de multiplicação da célula por meio da divisão mitótica."
      ]
    },
    {
      question: "Qual é a principal função da membrana plasmática no transporte celular?",
      answer: "Controlar a entrada e saída de substâncias, mantendo o equilíbrio interno da célula (homeostase).",
      options: [
        "Produzir energia para a célula.",
        "Transportar oxigênio no sangue.",
        "Fazer a digestão celular."
           "Controlar a entrada e saída de substâncias, mantendo o equilíbrio interno da célula (homeostase).",
      ]
    },
    {
      question: "O que diferencia o transporte passivo do transporte ativo?",
      answer: "O transporte passivo não requer energia (ATP), enquanto o transporte ativo consome energia.",
      options: [
        "Ambos usam energia.",
        "Apenas o passivo usa proteínas.",
           "O transporte passivo não requer energia (ATP), enquanto o transporte ativo consome energia.",
        "O ativo só ocorre em animais."
      ]
    },
    {
      question: "O que é osmose?",
      answer: "É a difusão de água através de uma membrana semipermeável, do meio menos concentrado para o mais concentrado.",
      options: [
        "É a entrada de partículas sólidas.",
        "É a produção de glicose na célula.",
        "É a difusão de água através de uma membrana semipermeável, do meio menos concentrado para o mais concentrado.",
        "É a quebra de proteínas."
      ]
    },
    {
      question: "Como funciona a bomba de sódio e potássio (Na⁺/K⁺)?",
      answer: "Transporta 3 íons de sódio para fora da célula e 2 íons de potássio para dentro, consumindo ATP.",
      options: [
        "Leva água para dentro da célula.",
        "Transporta oxigênio no sangue.",
        "Produz ATP."
           "Transporta 3 íons de sódio para fora da célula e 2 íons de potássio para dentro, consumindo ATP.",
      ]
    },
    {
      question: "O que são endocitose e exocitose?",
      answer: "Endocitose é a entrada de substâncias por invaginação da membrana. Exocitose é a liberação de substâncias para fora da célula por vesículas.",
      options: [
        "São tipos de respiração celular.",
        "Processos de divisão celular.",
        "Endocitose é a entrada de substâncias por invaginação da membrana. Exocitose é a liberação de substâncias para fora da célula por vesículas.",
        "Produção de proteínas."
      ]
    }
    // Você pode adicionar o resto das perguntas aqui, mantendo o mesmo formato
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const resultContainer = document.getElementById("result-container");
  const scoreEl = document.getElementById("score");
  
  function loadQuestion() {
    const q = quizData[currentQuestion];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    q.options.forEach(option => {
      const btn = document.createElement("button");
      btn.textContent = option;
      btn.className = "option";
      btn.onclick = () => selectAnswer(option, q.answer);
      optionsEl.appendChild(btn);
    });
  }
  
  function selectAnswer(selected, correct) {
    const buttons = document.querySelectorAll(".option");
    buttons.forEach(btn => {
      btn.disabled = true;
      if (btn.textContent === correct) {
        btn.style.backgroundColor = "#81c784";
      } else if (btn.textContent === selected) {
        btn.style.backgroundColor = "#e57373";
      }
    });
    if (selected === correct) {
      score++;
    }
    nextBtn.disabled = false;
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
      nextBtn.disabled = true;
    } else {
      showResult();
    }
  }
  
  function showResult() {
    document.getElementById("quiz-container").classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreEl.textContent = `Você acertou ${score} de ${quizData.length} perguntas.`;
  }
  
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    resultContainer.classList.add("hidden");
    document.getElementById("quiz-container").classList.remove("hidden");
    loadQuestion();
    nextBtn.disabled = true;
  }
  
  loadQuestion();
  nextBtn.disabled = true;
  
