export default class Ship {

    consructor(length) {
        this.lenght = length;
        this.hits = 0;
        this.sunk = false;
    }

    hit() {
        this.hits++;
    }

    isSunk() {
        if (this.length >= this.hits) {
          this.sunk = true;
          return true;
        }
        return false;
      }

    getShipLength(){
        return this.ship.length;
      }
}