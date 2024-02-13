export default class Gameboard {
        constructor() {
            this.board = [];
            this.initializeBoard();
          }
        
        //initializes board with cells that has x,y coordinates, occupation status and the ship 
        initializeBoard() {
            for (let i = 0; i < 10; i++) {
              this.board[i] = [];
              for (let j = 0; j < 10; j++) {
                this.board[i].push({x:i, y:j, occupied:false, ship:null, hit:false});
              }
            }
          }
        
        //places the ship with coordinates and the direction 
        placeShip(x, y, ship, direction){
            let cells = [];

            //if horizontal 
            if(direction === "horizontal"){
                if((y + ship.length)>10){
                    return false;
                }

                for(let i=0; i<ship.length; i++){
                    const cell = this.board[x][y+i];
                    cells.push(cell);
                    if (cells.some((cell => cell.occupied))) {
                        ship.coordinates =[];
                        return false;
                        }

                    ship.coordinates.push({ x, y: y + i });
            }}

            //if vertical 
            else {
                if (x + ship.length > 10) {
                  return false;
                }
          
                for (let i = 0; i < ship.length; i++) {
                  const cell = this.board[x + i][y];
                  
                  cells.push(cell);
                  if (cells.some((cell => cell.occupied))) {
                    ship.coordinates =[];
                    return false;
                    }
                  
                  ship.coordinates.push({ x: x + i, y });
                  
                }
              }    
              
            //changes the status of the cells as occupied after placing the ship 
            cells.forEach((cell) => {
                cell.occupied = true;
                cell.ship = ship;
              });
          
              return true;
        }


        //when receive an attack checks if that cell already been hit, if not checks if there is a ship there, if yes hits the ship
        receiveAttack(x, y){

            if (x < 0 || x >= 10 || y < 0 || y >= 10 || this.board[x][y].hit) {
                return false; // Coordinates are out of bounds
            }
            
            else {
            const cell = this.board[x][y];
            cell.hit = true;

            if (cell.occupied){
                cell.ship.hit();
                
            }

            return true;}
        }

        //checks if all the ships are sunk or not 
        areAllSunk(){

            for(let i=0; i<10; i++){
                for(let j=0; j<10; j++) {
                    const cell = this.board[i][j];
                    if (cell.occupied == true && cell.hit == false){
                        return false;
                    }
                }
            return true;
            }
        }

        resetBoard() {
          this.board.forEach((cell) => {
            cell.hit = false;
            cell.occupied = false;
            cell.ship = null;
          })
        }
    }
