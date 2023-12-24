export default class Ship {

    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
        this.coordinates = [];
    }

    hit() {
        this.hits++;
    }

    isSunk() {
        if (this.length <= this.hits) {
          this.sunk = true;
          
          return true;
        }
        return false;
      }

    getShipLength() {
        return this.length;
    }

}
