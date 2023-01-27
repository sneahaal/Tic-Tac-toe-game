
const game = {
    board: ['', '', '', '', '', '', '', '', ''],
    players: ['X', 'O'],
    currentPlayer: 0,
    gameOver: false,
  
    // Function to switch players
    switchPlayer() {
      this.currentPlayer = (this.currentPlayer === 0) ? 1 : 0;
    },
  
    // Function to handle the click event of a cell
    cellClick(e) {
      if (!this.gameOver) {
        const cell = e.target;
        const cellIndex = cell.getAttribute('data-cell-index');
  
        if (this.board[cellIndex] === '') {
          this.board[cellIndex] = this.players[this.currentPlayer];
          cell.innerText = this.players[this.currentPlayer];
  
          if (this.checkWin()) {
            alert(`Player ${this.players[this.currentPlayer]} wins!`);
            this.gameOver = true;
          } else if (this.checkTie()) {
            alert('Tie game!');
            this.gameOver = true;
          } else {
            this.switchPlayer();
          }
        }
      }
    },
  
    // Function to check for a win
    checkWin() {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
  
      for (let i = 0; i < winningCombinations.length; i++) {
        const [a, b, c] = winningCombinations[i];
  
        if (
          this.board[a] !== '' &&
          this.board[a] === this.board[b] &&
          this.board[b] === this.board[c]
        ) {
          return true;
        }
      }
      return false;
    },
  
    // Function to check for a tie
    checkTie() {
      return !this.board.includes('');
    }
  };
  
  // Initialize the game
const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('click', game.cellClick.bind(game)));

