// Task
// Calculate the minimum rolls needed for a player to complete a game of Snakes and Ladders.

// If a board is impossible to complete, return -1.

function minimumRollsRequired(boardSize, numberOfDice, snakesAndLadders) {
    let seen = Array(boardSize);
    let move = 1;
    seen.fill(false);
    seen[0] = true;
    let lastTurn = [0];
    while (lastTurn.length) {
      let thisTurn = [];
      for (let pos of lastTurn) {
        for (let roll = numberOfDice; roll <= 6*numberOfDice; roll++) {
          let dest = pos + roll;
          dest = snakesAndLadders[dest] || dest;
          if (dest === boardSize) {return move;}
          if (dest < boardSize && !seen[dest]) {
            thisTurn.push(dest);
            seen[dest] = true;
          }
        }
      }
      move++;
      lastTurn = thisTurn;
    }
    return -1;
  }