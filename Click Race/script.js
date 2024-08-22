// Object for Player 1
const B1 = {
  counter: 0,
  // Function to increment Player 1's score
  upvote: function() {
    // Increment Player 1's score only if both players have less than 25 points
    if (this.counter < 25 && B2.counter < 25) {
      this.counter++;
      updateUI(this); // Update the game status
    }
  }
};

// Object for Player 2
const B2 = {
  counter: 0,
  // Function to increment Player 2's score
  upvote: function() {
    // Increment Player 2's score only if both players have less than 25 points
    if (this.counter < 25 && B1.counter < 25) {
      this.counter++;
      updateUI(this); // Update the game status
    }
  }
};

// Function to update the display of each player's score
function updateUI(player) {
  // Update button text with the players' scores
  document.getElementById("N1").innerHTML = B1.counter;
  document.getElementById("N2").innerHTML = B2.counter;
  checkStatus(); // Check for win or tie status
}

// Function to check game status and update messages
function checkStatus() {
  // Check if Player 1 has won
  if (B1.counter >= 25) {
    document.getElementById("winner").innerHTML = "← Player 1 is winner";
    document.getElementById("N1").innerHTML = "WIN";
    document.getElementById("N1").style.fontSize = "150px";
    document.getElementById("N1").style.color = "green";
    return;
  }
  // Check if Player 2 has won
  if (B2.counter >= 25) {
    document.getElementById("winner").innerHTML = "Player 2 is winner →";
    document.getElementById("N2").innerHTML = "WIN";
    document.getElementById("N2").style.fontSize = "150px";
    document.getElementById("N2").style.color = "green";
    return;
  }
  // Check for a tie
  if (B1.counter === B2.counter) {
    document.getElementById("tie").innerHTML = "tie";
    document.getElementById("tie").style.color = "#9B870C";
  } else {
    document.getElementById("tie").innerHTML = "";
  }
}
