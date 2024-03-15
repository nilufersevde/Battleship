import Player from "./player.js";

export default class Game {
    constructor(){

        this.humanPlayer = new Player;
        this.computerPlayer = new Player;
        this.humanBoardDOM = document.querySelector(".user-board");
        this.computerBoardDOM = document.querySelector(".computer-board");
        this.computerShipAreaDOM = document.querySelector(".computer-ship-area");
        this.ShipAreaDOM = document.querySelector(".ship-representations");
        this.rotateButton = document.querySelector(".rotate-button");
        this.restartButton = document.querySelector(".restart-button");
        this.currentDirection = "horizontal";
        this.currentShipIndex = 0;
        this.shipRepresentationArray = [];
        this.isHumanTurn = true;
        this.result = document.querySelector(".result");
        this.initiliazeGame();

    }


     //initiliaze the game
    initiliazeGame() {

          this.renderBoard(this.humanPlayer.gameboard.board, this.humanBoardDOM, 'h');
          this.computerPlayer.randomPlacement();
          this.renderBoard(this.computerPlayer.gameboard.board, this.computerBoardDOM, 'c');
          this.handleShipRotation();
          this.renderShipRepresentations();
          this.placeShips();
          this.restartButton.addEventListener("click", ()=>{
          this.resetGame();
          })

    }

    //method that renders a board 
    // Method that renders a board
    renderBoard(boardData, boardDOM, prefix) {
            boardDOM.innerHTML = "";

            for (let i = 0; i < boardData.length; i++) {
                for (let j = 0; j < boardData[i].length; j++) {
                    const cell = boardData[i][j];

                    const cellDOM = document.createElement("div");
                    cellDOM.classList.add("cell");

                    if (boardDOM == this.humanBoardDOM ){
                        if (cell.occupied) {
                            cellDOM.classList.add("occupied");
                    }}

                    if (cell.occupied){
                    if (cell.hit) {
                        cellDOM.classList.add("hit-ship");

                    }}

                    if(!cell.occupied){
                        if (cell.hit) {
                            cellDOM.classList.add("hit");
    
                        }   
                    }

                    cellDOM.setAttribute("id", `${prefix}${i * 10 + j}`);
                    boardDOM.appendChild(cellDOM);
            }
        }
    }


     // Method to render ship representations
     renderShipRepresentations() {


        this.computerBoardDOM.classList.add("hidden");
        this.humanPlayer.fleet.forEach((ship) => {
            const shipRepresentation = document.createElement("div");
            shipRepresentation.classList.add("ship-preview-rep");
          
            for (let i = 0; i < ship.getShipLength(); i++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                shipRepresentation.appendChild(cell);
            }
          
            this.ShipAreaDOM.appendChild(shipRepresentation);
            this.shipRepresentationArray.push(shipRepresentation);
            this.ShipAreaDOM.classList.add("ShipAreaDOM");

        });
    }


    //method that places the ships
    placeShips() {

        //checks if all the ships are placed if yes removes the rotate button and renders the computer's board
        if (this.currentShipIndex >= this.humanPlayer.fleet.length){
            this.rotateButton.classList.add("hidden");
            this.computerBoardDOM.classList.remove("hidden");
            this.ShipAreaDOM.classList.add("hidden");
            this.gamePlay() 
            return;
        }

        //creates a clone of the human's board to keep it clean with previews
        const oldHumanBoardDOM = this.humanBoardDOM;
        this.humanBoardDOM = oldHumanBoardDOM.cloneNode(true);
        oldHumanBoardDOM.parentNode.replaceChild(this.humanBoardDOM, oldHumanBoardDOM);
        //getting the board cells and current ship
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
                        boardCells[cellIndex+i].classList.add("ship-preview");
                    }
                }
                else {
                    for (let i = 0; i < currentShip.getShipLength; i++){
                        boardCells[cellIndex+i*10].classList.add("ship-preview");
                    }
                }

            })

            cell.addEventListener("mouseout", () => {

                if (this.currentDirection === "horizontal") {
                    for (let i = 0; i < currentShip.getShipLength; i++){
                        boardCells[cellIndex+i].classList.remove("ship-preview");
                    }
                }
                else {
                    for (let i = 0; i < currentShip.getShipLength; i++){
                        boardCells[cellIndex+i*10].classList.remove("ship-preview");
                    }
                }
            })

            //when click on the board places the ship
            cell.addEventListener("click", ()=> {      
                const x =  Math.floor(cellIndex / 10);
                const y = cellIndex % 10;
                const placed = this.humanPlayer.gameboard.placeShip(x, y, currentShip, this.currentDirection);

                if (placed) {

                    this.renderBoard(this.humanPlayer.gameboard.board, this.humanBoardDOM, 'h');
                    this.shipRepresentationArray[this.currentShipIndex].classList.remove("ship-preview-rep");
                    this.shipRepresentationArray[this.currentShipIndex].classList.add("ship-placed");
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

   

    //the game logic with attacking checking the status rendering the grids and everything 

    gamePlay() {

        const computerBoardCells = this.computerBoardDOM.querySelectorAll(".cell");

        if (this.isHumanTurn) {
            computerBoardCells.forEach((cell) => {

                if(!cell.classList.contains("hit")) {
                    cell.addEventListener("click", (e) => {
                    //find the clicked cell
                    const clickedCell = e.target;
                    //find the coordinates of the cell
                    const cellIndex = parseInt(clickedCell.id.slice(1));
                    const x =  Math.floor(cellIndex / 10);
                    const y = cellIndex % 10;
                    //attack the cell that was clicked on 
                    this.humanPlayer.attack(x, y, this.computerPlayer.gameboard);
                    this.renderBoard(this.computerPlayer.gameboard.board, this.computerBoardDOM, 'c');
                    console.log(this.computerPlayer.gameboard.board);
                    //if all the ships are sunk stop the game 
                    if (this.computerPlayer.gameboard.areAllSunk()) {
                        this.restartButton.classList.remove("hidden");
                        return;
                      }

                    this.isHumanTurn = false;
                    this.gamePlay();
                });
    } 
                
        
            })
        }

        else {
                
            this.computerPlayer.randomAttack(this.humanPlayer.gameboard);
            this.renderBoard(this.humanPlayer.gameboard.board, this.humanBoardDOM, 'h');

            this.isHumanTurn = true;
            this.gamePlay();

            }

    }


    //reset the game    
    resetGame() {

        // Clear game boards and reset ship placements
        this.humanPlayer.gameBoard.resetBoard();
        this.computerPlayer.gameBoard.resetBoard();
        // Show ship representations for the user to place ships 
        this.renderShipRepresentations();
        //hide
        this.computerBoard.classList.add("hidden");
        this.rotateButton.classList.remove("hidden");
        this.result.classList.add("hidden");
        this.restartButton.classList.add("hidden");
        // Reset game state variables
        this.currentShipIndex = 0;
        this.currentDirection = "horizontal";
        this.isHumanTurn = true;

    }
}

