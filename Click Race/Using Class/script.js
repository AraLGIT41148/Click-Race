// Class representing a player in the game
class Player {
  constructor(buttonId, initialScore = 0) {
    // Initialize the player's score and button element
    this.counter = initialScore;
    this.button = document.getElementById(buttonId);
    // Add a click event listener to the button that calls the upvote method
    this.button.addEventListener('click', () => this.upvote());
    // Update the button text to reflect the initial score
    this.updateButtonText();
  }

  // Method to increment the player's score
  upvote() {
    // Increment the score if it is less than 25 and the game is not over
    if (this.counter < 25 && !Game.isGameOver()) {
      this.counter++;
      // Update the button text to show the new score
      this.updateButtonText();
      // Update the game UI to reflect changes
      Game.updateUI();
    }
  }

  // Method to update the button text with the player's current score
  updateButtonText() {
    this.button.innerHTML = this.counter;
  }
}

// Class responsible for managing the game state
class Game {
  static player1;
  static player2;

  // Method to initialize the game with two players
  static initialize() {
    this.player1 = new Player('player1');
    this.player2 = new Player('player2');
  }

  // Method to update the UI based on the current game state
  static updateUI() {
    this.checkStatus();
  }

  // Method to check and update the game status (win/tie)
  static checkStatus() {
    // Determine if either player has won
    const player1Won = this.player1.counter >= 25;
    const player2Won = this.player2.counter >= 25;

    // Update UI if Player 1 has won
    if (player1Won) {
      this.updateWinner('← Player 1 is winner', this.player1.button);
    } 
    // Update UI if Player 2 has won
    else if (player2Won) {
      this.updateWinner('Player 2 is winner →', this.player2.button);
    } 
    // Update tie status if no player has won
    else {
      this.updateTieStatus();
    }
  }

  // Method to update the winner message and button style
  static updateWinner(message, winnerButton) {
    document.getElementById('winner').innerHTML = message;
    winnerButton.innerHTML = 'WIN';
    winnerButton.style.fontSize = '150px';
    winnerButton.style.color = 'green';
  }

  // Method to update the tie status message
  static updateTieStatus() {
    // Check if both players have the same score
    if (this.player1.counter === this.player2.counter) {
      document.getElementById('tie').innerHTML = 'tie';
      document.getElementById('tie').style.color = '#9B870C';
    } else {
      document.getElementById('tie').innerHTML = '';
    }
  }

  // Method to check if the game is over
  static isGameOver() {
    return this.player1.counter >= 25 || this.player2.counter >= 25;
  }
}

// Initialize the game when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => Game.initialize());
