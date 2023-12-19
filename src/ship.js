export default class Ship {

    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
        
    }

    hit() {
        this.hits++;
    }

    isSunk() {
        if (this.length <= this.hits) {
          this.sunk = true;
          
          return true;
        }
        console.log(this.length);
        console.log(this.hits)
        return false;
      }

      getShipLength() {
        return this.length;
    }
}
