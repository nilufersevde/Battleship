export default class Gameboard {
        constructor() {
            this.board = [];
            this.initializeBoard();
            this.placeShip(); 
            this.receiveAttack()
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

                if((x + ship.length)>10){
                    return false;
                }

                for(let i=0; i<ship.length; i++){
                    const cell = this.board[y][x+i];
                    cells.push(cell);
            }}

            //if vertical 
            else {
                if (y + ship.length > 10) {
                  return false;
                }
          
                for (let i = 0; i < ship.length; i++) {
                  const cell = this.board[y + i][x];
                  cells.push(cell);
                }
              }


            //checks if the cells are already occupied or not       
            if (cells.some((cell => cell.occupied))) {
                    return false;
            }
            
            //changes the status of the cells as occupied after placing the ship 
            cells.forEach((cell) => {
                cell.occupied = true;
                cell.ship = ship;
              });
          
              return true;
        }


        //when receive an attack checks if that cell already been hit, if not checks if there is a ship there, if yes hits the ship
        receiveAttack(x,y){

            const cell =  this.board[y][x];

            if (cell.hit){
                return false
            }
            
            else {
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
                    const cell = this.board[j][i];
                    if (cell.occupied == true && cell.hit == false){
                        return false;
                    }
                }
            return true;
            }
        }
    }
