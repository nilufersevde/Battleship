import Player from "./player.js";

export default class Game {
    constructor(){

        this.humanPlayer = new Player;
        this.computerPlayer = new Player;
        this.humanBoardDOM = document.querySelector(".user-board");
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

        // Use the function to render the human board
        renderBoard(this.humanPlayer.gameBoard.board, this.humanBoardDOM, 'h');

        // Use the function to render the computer board
        renderBoard(this.computerPlayer.gameBoard.board, this.computerBoardDOM, 'c');
         
        
    }


    //method that places the ships

    placeShips() {

        if (currentShipIndex > this.humanPlayer.fleet){
            return;
        }

        const oldHumanBoardDOM = this.humanBoardDOM;
        this.humanBoardDOM = oldHumanBoardDOM.cloneNode(true);
        oldHumanBoardDOM.parentNode.replaceChild(this.humanBoardDOM, oldHumanBoardDOM);

        const boardCells = this.humanBoardDOM.querySelectorAll(".cell");
        const currentShip = this.humanPlayer.fleet[this.currentShipIndex];

        boardCells.forEach((cell) => {

            const cellIndex = Array.from(boardCells).indexOf(cell);

            if( this.currentDirection === "horizontal" && (cellIndex % 10)+ currentShip.getShipLength > 10){
                return;

            }

            if( this.currentDirection === "vertical" && Math.floor(cellIndex / 10) + currentShip.getShipLength > 10){
                return;

            }



            cell.addEventListener("mouseover", () => {

                if (this.currentDirection === "horizontal") {
                    
                    for (let i = 0; i < currentShip.getShipLength; i++){
                        boardCells[cellIndex+i].classList.add(ship-preview);
                    }
                }

                else {

                    for (let i = 0; i < currentShip.getShipLength; i++){
                        boardCells[cellIndex+i*10].classList.add(ship-preview);
                    }
                }
            })

            cell.addEventListener("mouseout", () => {

                if (this.currentDirection === "horizontal") {
                    
                    for (let i = 0; i < currentShip.getShipLength; i++){
                        boardCells[cellIndex+i].classList.remove(ship-preview);
                    }
                }

                else {

                    for (let i = 0; i < currentShip.getShipLength; i++){
                        boardCells[cellIndex+i*10].classList.remove(ship-preview);
                    }
                }
            })

            cell.addEventListener("click", ()=> {      
                const x =  Math.floor(cellIndex / 10);
            })

        })

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