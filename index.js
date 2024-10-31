document.getElementById('rollButton').addEventListener('click', rollDice);

function rollDice() {
    const player1Roll = Math.floor(Math.random() * 6) + 1;
    const player2Roll = Math.floor(Math.random() * 6) + 1;

    document.querySelector('.img1').src = `images/dice${player1Roll}.png`;
    document.querySelector('.img2').src = `images/dice${player2Roll}.png`;

    let resultText = '';
    if (player1Roll > player2Roll) {
        resultText = 'Player 1 wins!';
    } else if (player2Roll > player1Roll) {
        resultText = 'Player 2 wins!';
    } else {
        resultText = 'It\'s a tie!';
    }

    document.querySelector('h1').innerText = resultText;
}
