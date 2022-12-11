const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const scoreText = document.querySelector('#score');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: 'Margarita: what are the three main ingredients to make a fantastic Margarita cocktail?',
        choice1: 'Gin, vodka, lime juice.',
        choice2: 'Mint, sugar, creme de mure, prosecco.',
        choice3: 'Gin, egg white, lemon juice',
        choice4: 'Tequila, lime juice, orange liqueur',
        choice5: 'tequila, ice and good company',
        answer: 4,
    },
    {
        question: 'Pornstar Martini: can this cocktail be called in a different way?',
        choice1: 'The lovers cocktail',
        choice2: 'Passion Fruit Martini',
        choice3: 'The Sexy Lady',
        choice4: 'One Night Stand',
        choice5: 'The Tinder Swindler',
        answer: 2,
    },
    {
        question: 'Long Island Iced Tea: how many (and which ones) spirits is the Long Island Iced Tea made of?',
        choice1: 'Five: melon liqueur, Amaretto, Cointreau, almond liqueur, port wine',
        choice2: 'Six: triple sec, gin, tequila, rum, sweet vermouth, cognac',
        choice3: 'Five: gin, tequila, orange liqueur, rum, vodka',
        choice4: 'Three: Rum, red wine, peach liqueur',
        choice5: 'Three: onion, carrot, celery',
        answer: 3,
    },
    {
        question:'Negroni: which is the technique mainly used to make a great Negroni?',
        choice1: 'Kissing Technique',
        choice2: 'Stirring Technique',
        choice3: 'Rolling Technique',
        choice4: 'Shaking Technique',
        choice5: 'Sleeping Technique',
        answer: 2,
    },
    {
        question: 'Name two of the main ingredients to make a refreshing Cosmo(-politan).',
        choice1: 'Cranberry juice, Apple juice',
        choice2: 'Pineapple Juice, orange liqueur',
        choice3: 'Vodka, cranberry juice',
        choice4: 'Limoncello, orange liqueur',
        choice5: 'Cranberry juice, orange liqueur',
        answer: 5,
    },
    {
        question:'How does a beautifully-made Espresso Martini taste like?',
        choice1: 'Refreshing, fruity',
        choice2: 'Creamy, due to double cream',
        choice3: 'Crispy, due to white wine',
        choice4: 'Silky, due to the espresso coffee inside',
        choice5: 'Intense, as if you were drinking beef juice',
        answer: 4,
    },
];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 4;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('/index.html');
    }



    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions [questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });
    
    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
    if(!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset['number']

    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

    if(classToApply === 'correct') {
        incrementScore(SCORE_POINTS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();
    }, 1000);
    });
});

    score +=num;
    scoreText.innerText = score;


startGame();
