const game = () => {
    let Pscore = 0;
    let Cscore = 0;
    // start the game
    const startGame = () => {
        const plyBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        plyBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeout');
            match.classList.add('fadein');
        });
    };

    //actual match or play match 
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player_hand');
        const computerHand = document.querySelector('.computer_hand');
        const hands = document.querySelectorAll('.hands img');
        hands.forEach(hand => {
            hand.addEventListener('animationend', function () {
                this.style.animation = '';
            })
        })
        //computer options are randomly generated
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function () {/*here we are using a normal fnction
            instead of arrow function*/
                const computerNumber = Math.floor(Math.random() * 3); //wrapping the number to floor value
                const computerChoice = computerOptions[computerNumber];
                setTimeout(() => {
                    compareHands(this.textContent, computerChoice);
                    //update images

                    playerHand.src = `./pi/${this.textContent}.png`;
                    computerHand.src = `./pi/${computerChoice}.png`;
                }, 2000);
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };
    const updateScore = () => {
        const playerScore = document.querySelector('.player_score p');
        const computerScore = document.querySelector('.computer_score p');
        playerScore.textContent = Pscore;
        computerScore.textContent = Cscore;
    }
    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        //check for tie
        if (playerChoice === computerChoice) {
            winner.textContent = "It is a tie";
            return;
        }
        //player choice is rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player Wins';
                Pscore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'Computer Wins';
                Cscore++;
                updateScore();
                return;
            }
        }
        //player choice is paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Computer Wins';
                Cscore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'Player Wins';
                Pscore++;
                updateScore();
                return;
            }
        }
        //player choice is scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Computer Wins';
                Cscore++;
                updateScore();
                return;
            }
            else {
                winner.textContent = 'Player Wins';
                Pscore++;
                updateScore();
                return;
            }
        }

    }

    startGame();
    playMatch();
};




game();