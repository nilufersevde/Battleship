import Player from "./player.js";

export default class Game {
    constructor(){

        this.humanPlayer = new Player;
        this.computerPlayer = new Player;
        this.humanBoardDOM = document.querySelector(".user-board");
        this.computerBoardDOM = document.querySelector(".computer-board");
        this.rotateButton = document.querySelector(".rotate-button");
        this.restartButton = document.querySelector(".restart-button");
        this.currentDirection = "horizontal";
        this.currentShipIndex = 0;
        this.shipRepresentations = document.querySelector(".ship-representations");

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

    }


    //method that places the ships
    placeShips() {

        //checks if we placed all the ships if yes removes the rotate button and renders the computer's board
        if (currentShipIndex > this.humanPlayer.fleet){
            this.rotateButton.classList.add("hidden");
            this.renderBoard(this.computerPlayer.gameBoard.board, this.computerBoardDOM, 'c');
            return;
        }


        //shows the representaion of the ships that should be placed in the human's board
        shipRepresentationsContainer.innerHTML = "";

        // Add ship representations
        this.humanPlayer.fleet.forEach((ship) => {
          const shipRepresentation = document.createElement("div");
          shipRepresentation.classList.add("ship-representation");
      
          for (let i = 0; i < ship.getShipLength(); i++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            shipRepresentation.appendChild(cell);
          }
      
          shipRepresentationsContainer.appendChild(shipRepresentation);
        });


        //creates a clone of the human's board to keep it clean with previews
        const oldHumanBoardDOM = this.humanBoardDOM;
        this.humanBoardDOM = oldHumanBoardDOM.cloneNode(true);
        oldHumanBoardDOM.parentNode.replaceChild(this.humanBoardDOM, oldHumanBoardDOM);

        const boardCells = this.humanBoardDOM.querySelectorAll(".cell");
        const currentShip = this.humanPlayer.fleet[this.currentShipIndex];

        
        boardCells.forEach((cell) => {

            const cellIndex = Array.from(boardCells).indexOf(cell);
            //if out of board bond than stops the preview
            if( this.currentDirection === "horizontal" && (cellIndex % 10)+ currentShip.getShipLength > 10){
                return;
            }

            if( this.currentDirection === "vertical" && Math.floor(cellIndex / 10) + currentShip.getShipLength > 10){
                return;
            }


            //shows the preview of the ship's placement as mouse moves 
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

            //when click on the board places the ship
            cell.addEventListener("click", ()=> {      
                const x =  Math.floor(cellIndex / 10);
                const y = cellIndex % 10;

                const placed = this.humanPlayer.gameboard.placeShip(x, y, currentShip, this.currentDirection);

                if (placed) {
                    this.renderBoard();
                    this.currentShipIndex++;
                    this.placeShips()
                }

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

    initiliazeGame() {

          this.renderBoard(this.humanPlayer.gameBoard.board, this.humanBoardDOM, 'h');
          this.computerPlayer.randomPlacement();
          this.handleShipRotation();
          this.placeShips();


    }



    //the game logic with attacking checking the status rendering the grids and everything 


    //reset the game    
}