(()=>{"use strict";const t=new class{constructor(t){this.length=t,this.hits=0,this.sunk=!1}hit(){this.hits++}isSunk(){return this.length<=this.hits?(this.sunk=!0,!0):(console.log(this.length),console.log(this.hits),!1)}getShipLength(){return this.length}}(1);t.hit(),t.hit(),t.isSunk()})();