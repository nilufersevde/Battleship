import Player from "./player.js";

export default class Game {
    constructor(){

        this.humanPlayer = new Player;
        this.computerPlayer = new Player;
        this.userBoardDOM = document.querySelector(".user-board");
        this.computerBoardDOM = document.querySelector(".computer-board");
        this.rotateButton = document.querySelector(".rotate-button");
        this.startButton = document.querySelector(".start-button");
        this.restartButton = document.querySelector(".restart-button");
        this.currentDirection = "horizontal";
        this.currentShipIndex = 0;

    }


    //method that renders a board 
    renderBoard(boardData, boardDOM, prefix){

        boardDOM.innerHTML = "";
        let cellIndex = 0;

        boardData.forEach(cell => {

            const cellDOM = document.createElement("div");
            cellDOM.classList.add("cell");

            if (cell.hit) {
                cellDOM.classList.add("hit");
            }

            if (cell.occupied) {
                cellDOM.classList.add("occupied");
            }

            cellDOM.setAttribute("id", `${prefix}${cellIndex}`);
            cellIndex++;

            boardDOM.appendChild(cellDOM);
            
        });

                // Use the function to render the user board
        renderBoard(this.humanPlayer.gameBoard.board, this.userBoardDOM, 'h');

        // Use the function to render the enemy board
        renderBoard(this.computerPlayer.gameBoard.board, this.enemyBoardDOM, 'c');
         
        
    }


    //method that places the ships

    placeShips() {
        if (currentShipIndex > this.humanPlayer.fleet){
            return;
        }

        const oldUserBoardDOM = this.userBoardDOM;
        const newUserBoardDOM = oldUserBoardDOM.cloneNode(true); // Clone the board
        oldUserBoardDOM.parentNode.replaceChild(newUserBoardDOM, oldUserBoardDOM);
        this.userBoardDOM = newUserBoardDOM; // Update the reference



    }



    //ship rotation 
    handleShipRotation() {
        this.rotateButton.addEventListener("click", () => {
          if (this.currentDirection === "horizontal") {
            this.currentDirection = "vertical";
          } else {
            this.currentDirection = "horizontal";
          }
        });
      }


    //initiliaze the game


    



    


    //the game logic with attacking checking the status rendering the grids and everything 


    //reset the game



    
}