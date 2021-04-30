document.addEventListener('DOMContentLoaded', () => {


    const cardArray = [
        {name: 'angelfish', img: 'img/angelfish_200.png'},
        {name: 'crab', img: 'img/crab_200.png'},
        {name: 'fish', img: 'img/fish_200.png'},
        {name: 'octopus', img: 'img/octopus_200.png'},
        {name: 'puffer', img: 'img/puffer-fish_200.png'},
        {name: 'seahorse', img: 'img/seahorse_200.png'},
        {name: 'angelfish', img: 'img/angelfish_200.png'},
        {name: 'crab', img: 'img/crab_200.png'},
        {name: 'fish', img: 'img/fish_200.png'},
        {name: 'octopus', img: 'img/octopus_200.png'},
        {name: 'puffer', img: 'img/puffer-fish_200.png'},
        {name: 'seahorse', img: 'img/seahorse_200.png'},
    ];

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];


    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'img/cover_200.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if(optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'img/cover_200.png');
            cards[optionTwoId].setAttribute('src', 'img/cover_200.png');
            alert('You have clicked the same image!');
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!');
            cards[optionOneId].setAttribute('src', 'img/white_200.png');
            cards[optionTwoId].setAttribute('src', 'img/white_200.png');
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'img/cover_200.png');
            cards[optionTwoId].setAttribute('src', 'img/cover_200.png');
            alert('sorry, try again');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length
        if  (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }

    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.classList.add("flip");
        this.setAttribute('src', cardArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard();
});








