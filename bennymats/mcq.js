const questions = [
    {
        question: "Wer war der erste Präsident der Vereinigten Staaten?",
        answers: ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John Adams"],
        correctAnswer: 1,
        wikiLink: "https://de.wikipedia.org/wiki/George_Washington"
    },
    {
        question: "Was ist die Hauptstadt von Frankreich?",
        answers: ["Berlin", "Madrid", "Paris", "Rom"],
        correctAnswer: 2,
        wikiLink: "https://de.wikipedia.org/wiki/Paris"
    },
    {
        question: "Wie viele Kontinente gibt es?",
        answers: ["5", "6", "7", "8"],
        correctAnswer: 2,
        wikiLink: "https://de.wikipedia.org/wiki/Kontinent"
    },
    {
        question: "Welches Element hat das chemische Symbol 'O'?",
        answers: ["Osmium", "Oxygen", "Ozon", "Oganesson"],
        correctAnswer: 1,
        wikiLink: "https://de.wikipedia.org/wiki/Sauerstoff"
    },
    {
        question: "In welchem Jahr landeten Menschen auf dem Mond?",
        answers: ["1965", "1969", "1972", "1980"],
        correctAnswer: 1,
        wikiLink: "https://de.wikipedia.org/wiki/Mondlandung_1969"
    },
    {
        question: "Was ist der größte Ozean der Welt?",
        answers: ["Atlantischer Ozean", "Indischer Ozean", "Arktischer Ozean", "Pazifischer Ozean"],
        correctAnswer: 3,
        wikiLink: "https://de.wikipedia.org/wiki/Pazifischer_Ozean"
    },
    {
        question: "Wer erfand das Telefon?",
        answers: ["Nikola Tesla", "Thomas Edison", "Alexander Graham Bell", "Alva Edison"],
        correctAnswer: 2,
        wikiLink: "https://de.wikipedia.org/wiki/Alexander_Graham_Bell"
    },
    {
        question: "Welches Land hat die größte Bevölkerung?",
        answers: ["USA", "Indien", "China", "Russland"],
        correctAnswer: 2,
        wikiLink: "https://de.wikipedia.org/wiki/Volksrepublik_China"
    },
    {
        question: "Welches Tier ist das größte Landtier der Erde?",
        answers: ["Elefant", "Pferd", "Giraffe", "Nashorn"],
        correctAnswer: 0,
        wikiLink: "https://de.wikipedia.org/wiki/Elefant"
    },
    {
        question: "Wer malte die Mona Lisa?",
        answers: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Claude Monet"],
        correctAnswer: 2,
        wikiLink: "https://de.wikipedia.org/wiki/Leonardo_da_Vinci"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    
    // Frage Nummer anzeigen (z.B. "Frage 1 von 10")
    document.getElementById('question-number').textContent = `Frage ${currentQuestionIndex + 1} von ${questions.length}`;
    
    const answers = document.getElementById('answers');
    answers.innerHTML = '';
    document.getElementById('feedback').textContent = ''; // Feedback zurücksetzen

    // Wikipedia-Link für mehr Informationen hinzufügen
    const wikiLink = document.createElement('a');
    wikiLink.href = question.wikiLink;
    wikiLink.target = "_blank";
    wikiLink.textContent = "Mehr erfahren auf Wikipedia";
    document.getElementById('wiki-link').innerHTML = '';
    document.getElementById('wiki-link').appendChild(wikiLink);

    question.answers.forEach((answer, index) => {
        const li = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = answer;
        button.classList.add('answer-btn');
        button.onclick = function () { checkAnswer(index); };
        li.appendChild(button);
        answers.appendChild(li);
    });

    document.getElementById('restart-button').style.display = 'none';  // Restart button ausblenden
}

function checkAnswer(selectedIndex) {
    const correctAnswerIndex = questions[currentQuestionIndex].correctAnswer;
    const feedback = document.getElementById('feedback');

    // Sofortiges Feedback anzeigen
    if (selectedIndex === correctAnswerIndex) {
        score++;
        feedback.textContent = "Richtig!";
        feedback.className = 'correct-feedback'; // Grüne Hintergrundfarbe
    } else {
        feedback.textContent = "Falsch!";
        feedback.className = 'incorrect-feedback'; // Rote Hintergrundfarbe
    }

    // Alle Schaltflächen deaktivieren
    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(button => {
        button.disabled = true;
    });

    // Feedback anzeigen
    feedback.style.display = 'block';

    
    setTimeout(() => {
        nextQuestion();
    }, 1500);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('score').textContent = `Du hast ${score} von ${questions.length} richtig beantwortet!`;
    document.getElementById('restart-button').style.display = 'block'; // Restart button anzeigen
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('score').textContent = '';
    loadQuestion();
}

window.onload = loadQuestion;