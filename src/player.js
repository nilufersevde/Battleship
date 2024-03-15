import Gameboard from "./gameboard.js";
import Ship from "./ship.js";

export default class Player {

    constructor(){

    this.gameboard = new Gameboard();
    this.fleet = [new Ship(1), new Ship(2), new Ship(3), new Ship(4), new Ship(5)];
    this.isPlayerTurn = true;

    }

    switchTurn(){

        this.isPlayerTurn = !this.isPlayerTurn;

    }

    attack(x, y, enemyboard){

        if (this.isPlayerTurn){
        this.switchTurn();
        return enemyboard.receiveAttack(x, y);}

        else return false;

    }

    randomPlacement(){

        this.fleet.forEach((ship) => {
            let placed = false;

            while(!placed){

            const x = Math.floor(Math.random()*10);
            const y = Math.floor(Math.random()*10);
            const direction = Math.random() > 0.5 ? 'horizontal' : 'vertical';

            placed = this.gameboard.placeShip(x, y, ship, direction);
            
        }

        })
    }

    randomAttack(enemyboard){  
            const x = Math.floor(Math.random()*10);
            const y = Math.floor(Math.random()*10);
            enemyboard.receiveAttack(x, y);
    }

}