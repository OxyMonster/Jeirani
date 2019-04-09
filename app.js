const game = ()=> {
    let pScore = 0;
    let cScore  = 0;

    //Start Game
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', ()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    //Play Match
    const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');
    
    hands.forEach(hand =>{
        hand.addEventListener('animationend', function(){
            this.style.animation = '';
        });
    });
    //Computer Options
        const computerOptions = ['ქვა', 'ფურცელი', 'მაკრატელი'];
        options.forEach(option => {
        option.addEventListener('click', function(){
        //Computer Choice
        const computerNumber = Math.floor( Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
       setTimeout(()=>{
            // call compareHands
        compareHands(this.textContent, computerChoice);
        // Update immages
        playerHand.src = `./assets/${this.textContent}.png`;
        computerHand.src = `./assets/${computerChoice}.png`;
        
       },2000);
        
        //Animation
        playerHand.style.animation = 'shakePlayer 2s ease';
        computerHand.style.animation = 'shakeComputer 2s ease';
    
    });   
 });
};
const updateScore = () =>{
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
}

const compareHands = (playerChoice, computerChoice) =>{
    ///Updte text
    const winner = document.querySelector('.winner');
    // Checკ for tie 
    if(playerChoice === computerChoice){
    winner.textContent = 'ნიჩя';
    return;
    }
    //Check Rock
    if(playerChoice === 'ქვა'){
        if(computerChoice === 'მაკრატელი'){
            winner.textContent = 'მოგება';
            pScore++;
            updateScore();
            return;
        }else{
            winner.textContent = ('წაგება');
            cScore++;
            updateScore();
            return;
        }
    }
    // Check paper
    if(playerChoice === 'ფურცელი'){
        if(computerChoice === 'მაკრატელი'){
            winner.textContent = 'წაგება';
            cScore++;
            updateScore();
            return;
        }else{
            winner.textContent = ('მოგება');
            pScore++;
            updateScore();
            return;
        }
    }

    // Check scissors

    if(playerChoice === 'მაკრატელი'){
        if(computerChoice === 'ქვა'){
            winner.textContent = 'წაგება';
            cScore++;
            updateScore();
            return;
        }else{
            winner.textContent =('მოგება');
            pScore++;
            updateScore();
            return;
        }
    }
}
    //Call all inner Functions
    startGame();
    playMatch();
    
};

// Start game 
game();