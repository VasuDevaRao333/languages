document.addEventListener('DOMContentLoaded', () => {
    const gameBoard = document.getElementById('game-board');
    const memoryMatchButton = document.getElementById('memory-match');

    const fruits = ["ங", "ச", "ஞ", "ந", "ம", "ர", "வ", "ள", "ன", "ஜ", "ஹ", "க்ஷ", "அ", "உ", "எ", "ஏ", "ஓ", "க", "ண", "ட", "த", "ப", "ய", "ல", "ழ", "ற", "ஷ", "ஸ", "ஆ", "இ", "ஈ", "ஊ", "ஐ", "ஒ", "ஔ"];

    let flippedCards = [];
    let matchedCards = [];
    let correctAttempts = 0;
    let incorrectAttempts = 0;
    let isGameInProgress = false;
    const gameTimeInSeconds = 60;
    let timerInterval;

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function updateAttemptsDisplay() {
        document.getElementById('correct-attempts').textContent = `Correct Attempts: ${correctAttempts}`;
        document.getElementById('incorrect-attempts').textContent = `Incorrect Attempts: ${incorrectAttempts}`;
    }

    function renderMemoryMatchGame() {
        if (isGameInProgress) return;

        gameBoard.innerHTML = '';
        flippedCards = [];
        matchedCards = [];
        correctAttempts = 0;
        incorrectAttempts = 0;
        updateAttemptsDisplay();

        const shuffledFruits = shuffleArray([...fruits, ...fruits]);
        shuffledFruits.forEach((fruit, index) => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.dataset.index = index;
            card.textContent = fruit;
            card.addEventListener('click', handleCardClick);
            gameBoard.appendChild(card);
        });

        startGameTimer();
        isGameInProgress = true;
    }

    function handleCardClick(event) {
        const clickedCard = event.target;
        const index = clickedCard.dataset.index;

        if (flippedCards.length < 2 && !flippedCards.includes(index)) {
            flippedCards.push(index);
            clickedCard.textContent = fruits[index];

            if (flippedCards.length === 2) {
                setTimeout(checkForMatch, 1000);
            }
        }
    }

    function checkForMatch() {
        const [index1, index2] = flippedCards;
        const card1 = document.querySelector(`[data-index="${index1}"]`);
        const card2 = document.querySelector(`[data-index="${index2}"]`);

        if (fruits[index1] === fruits[index2]) {
            matchedCards.push(index1, index2);
            correctAttempts++;
        } else {
            card1.textContent = '';
            card2.textContent = '';
            incorrectAttempts++;
        }

        updateAttemptsDisplay();
        flippedCards = [];

        if (matchedCards.length === fruits.length) {
            endGame();
        }
    }

    function startGameTimer() {
        let remainingTime = gameTimeInSeconds;
        const timerDisplay = document.getElementById('timer');

        timerInterval = setInterval(() => {
            remainingTime--;
            timerDisplay.textContent = `Time Left: ${remainingTime} seconds`;

            if (remainingTime <= 0) {
                endGame();
            }
        }, 1000);
    }

    function endGame() {
        clearInterval(timerInterval);
        alert(`Game Over!\nCorrect Attempts: ${correctAttempts}\nIncorrect Attempts: ${incorrectAttempts}`);
        isGameInProgress = false;
        renderMemoryMatchGame();
    }

    memoryMatchButton.addEventListener('click', renderMemoryMatchGame);
});