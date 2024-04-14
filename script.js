let player1Score = 0;
let player2Score = 0;

function rollDice() {
  const dice1 = document.getElementById("dice1");
  const dice2 = document.getElementById("dice2");
  
  const roll1 = Math.floor(Math.random() * 6) + 1;
  const roll2 = Math.floor(Math.random() * 6) + 1;
  
  dice1.src = dice${roll1}.png;
  dice2.src = dice${roll2}.png;
  
  const scoreDifference = Math.abs(roll1 - roll2);
  
  if (roll1 > roll2) {
    player1Score += scoreDifference;
  } else if (roll2 > roll1) {
    player2Score += scoreDifference;
  }
  
  updateScores();
  
  if (player1Score >= 100) {
    showWinner("Player 1");
  } else if (player2Score >= 100) {
    showWinner("Player 2");
  }
}

function updateScores() {
  document.getElementById("player1-score").textContent = Player 1 Score: ${player1Score};
  document.getElementById("player2-score").textContent = Player 2 Score: ${player2Score};
}

function showWinner(winner) {
  alert(${winner} wins!);
}