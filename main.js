(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(81),i=n.n(r),a=n(645),o=n.n(a)()(i());o.push([e.id,"* {\n    font-family: \"Play\", sans-serif;\n    font-weight: 400;\n    font-style: normal;\n}\n/* Resetting some default margin and padding for better layout */\nbody, h1, h2, h3, p, div {\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: 'Play', sans-serif;\n}\n\n.board {\n    width:400px;\n    height:400px;\n    display: flex;\n    flex-wrap: wrap;\n}\n\n/* Centering content vertically and horizontally */\n\n/* Styling for the game title */\nh1 {\n    font-size: 27px;\n    margin-bottom: 10px;\n}\n\n/* Styling for the game instructions */\nh2 {\n    font-size: 20px;\n    margin-bottom: 20px;\n}\n\n/* Container for the game boards and buttons */\n.playground {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n/* Container for user and computer game boards */\n.game-boards {\n    display: flex;\n    gap: 50px;\n}\n\n/* Styling for each game board */\n.user-area, .computer-ship-area {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n/* Styling for the headers above the game boards */\nh3 {\n    font-size: 18px;\n    margin-bottom: 10px;\n}\n\n/* Styling for the ship preview and placed cells */\n.ship-preview {\n    background-color: #52A2FF;\n}\n\n.ship-placed {\n    background-color: #52A2FF; /* You can use a different color if you prefer */\n}\n\n/* Styling for the individual cells on the game board */\n.cell {\n    width: 40px;\n    height: 40px;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n/* Styling for hit cells */\n.cell.hit {\n    background-color: #ff0055;\n}\n\n/* Styling for occupied cells */\n.cell.occupied {\n    background-color: #52A2FF;\n}\n\n.ShipAreaDOM {\n    display: flex;\n    flex-direction: column; /* Make sure ships are displayed horizontally */\n    gap:10px;\n    align-items:flex-start;\n    position: absolute;\n    left: 55vw;\n    top: 20vh;\n}\n\n\n\n.ship-preview-rep {\n    background-color: #52A2FF;\n    display: flex;\n    flex-direction: row;\n}\n.ship-placed {\n    display: flex;\n    flex-direction: row;\n    background-color: #a9bacd;\n}\n\n.hidden, .hidden > * {\n    opacity: 0;\n    pointer-events: none;\n}\n\n\n",""]);const s=o},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,i,a){"string"==typeof e&&(e=[[null,e,void 0]]);var o={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(o[c]=!0)}for(var h=0;h<e.length;h++){var l=[].concat(e[h]);r&&o[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),i&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=i):l[4]="".concat(i)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},o=[],s=0;s<e.length;s++){var c=e[s],h=r.base?c[0]+r.base:c[0],l=a[h]||0,d="".concat(h," ").concat(l);a[h]=l+1;var u=n(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)t[u].references++,t[u].updater(p);else{var m=i(p,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:m,references:1})}o.push(d)}return o}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var a=r(e=e||[],i=i||{});return function(e){e=e||[];for(var o=0;o<a.length;o++){var s=n(a[o]);t[s].references--}for(var c=r(e,i),h=0;h<a.length;h++){var l=n(a[h]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,i&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),r=n(795),i=n.n(r),a=n(569),o=n.n(a),s=n(565),c=n.n(s),h=n(216),l=n.n(h),d=n(589),u=n.n(d),p=n(426),m={};m.styleTagTransform=u(),m.setAttributes=c(),m.insert=o().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=l(),t()(p.Z,m),p.Z&&p.Z.locals&&p.Z.locals;class f{constructor(){this.board=[],this.initializeBoard()}initializeBoard(){for(let e=0;e<10;e++){this.board[e]=[];for(let t=0;t<10;t++)this.board[e].push({x:e,y:t,occupied:!1,ship:null,hit:!1})}}placeShip(e,t,n,r){let i=[];if("horizontal"===r){if(t+n.length>10)return!1;for(let r=0;r<n.length;r++){const a=this.board[e][t+r];if(i.push(a),i.some((e=>e.occupied)))return n.coordinates=[],!1;n.coordinates.push({x:e,y:t+r})}}else{if(e+n.length>10)return!1;for(let r=0;r<n.length;r++){const a=this.board[e+r][t];if(i.push(a),i.some((e=>e.occupied)))return n.coordinates=[],!1;n.coordinates.push({x:e+r,y:t})}}return i.forEach((e=>{e.occupied=!0,e.ship=n})),!0}receiveAttack(e,t){if(e<0||e>=10||t<0||t>=10||this.board[e][t].hit)return!1;{const n=this.board[e][t];return n.hit=!0,n.occupied&&n.ship.hit(),!0}}areAllSunk(){for(let e=0;e<10;e++)for(let t=0;t<10;t++){const n=this.board[e][t];if(1==n.occupied&&0==n.hit)return!1}return!0}resetBoard(){this.board.forEach((e=>{e.hit=!1,e.occupied=!1,e.ship=null}))}}class g{constructor(e){this.length=e,this.hits=0,this.sunk=!1,this.coordinates=[]}hit(){this.hits++}isSunk(){return this.length<=this.hits&&(this.sunk=!0,!0)}getShipLength(){return this.length}}class y{constructor(){this.gameboard=new f,this.fleet=[new g(1),new g(2),new g(3),new g(4),new g(5)],this.isPlayerTurn=!0}switchTurn(){this.isPlayerTurn=!this.isPlayerTurn}attack(e,t,n){return!!this.isPlayerTurn&&(this.switchTurn(),n.receiveAttack(e,t))}randomPlacement(){this.fleet.forEach((e=>{let t=!1;for(;!t;){const n=Math.floor(10*Math.random()),r=Math.floor(10*Math.random()),i=Math.random()>.5?"horizontal":"vertical";t=this.gameboard.placeShip(n,r,e,i)}}))}randomAttack(e){const t=Math.floor(10*Math.random()),n=Math.floor(10*Math.random());e.receiveAttack(t,n)}}new class{constructor(){this.humanPlayer=new y,this.computerPlayer=new y,this.humanBoardDOM=document.querySelector(".user-board"),this.computerBoardDOM=document.querySelector(".computer-board"),this.computerShipAreaDOM=document.querySelector(".computer-ship-area"),this.ShipAreaDOM=document.querySelector(".ship-representations"),this.rotateButton=document.querySelector(".rotate-button"),this.restartButton=document.querySelector(".restart-button"),this.currentDirection="horizontal",this.currentShipIndex=0,this.shipRepresentationArray=[],this.isHumanTurn=!0,this.result=document.querySelector(".result"),this.initiliazeGame()}initiliazeGame(){this.renderBoard(this.humanPlayer.gameboard.board,this.humanBoardDOM,"h"),this.computerPlayer.randomPlacement(),this.renderBoard(this.computerPlayer.gameboard.board,this.computerBoardDOM,"c"),this.handleShipRotation(),this.renderShipRepresentations(),this.placeShips(),this.restartButton.addEventListener("click",(()=>{this.resetGame()}))}renderBoard(e,t,n){t.innerHTML="";for(let r=0;r<e.length;r++)for(let i=0;i<e[r].length;i++){const a=e[r][i],o=document.createElement("div");o.classList.add("cell"),a.hit&&o.classList.add("hit"),t==this.humanBoardDOM&&a.occupied&&o.classList.add("occupied"),o.setAttribute("id",`${n}${10*r+i}`),t.appendChild(o)}}renderShipRepresentations(){this.computerBoardDOM.classList.add("hidden"),this.humanPlayer.fleet.forEach((e=>{const t=document.createElement("div");t.classList.add("ship-preview-rep");for(let n=0;n<e.getShipLength();n++){const e=document.createElement("div");e.classList.add("cell"),t.appendChild(e)}this.ShipAreaDOM.appendChild(t),this.shipRepresentationArray.push(t),this.ShipAreaDOM.classList.add("ShipAreaDOM")}))}placeShips(){if(this.currentShipIndex>=this.humanPlayer.fleet.length)return this.rotateButton.classList.add("hidden"),this.computerBoardDOM.classList.remove("hidden"),this.ShipAreaDOM.classList.add("hidden"),void this.gamePlay();const e=this.humanBoardDOM;this.humanBoardDOM=e.cloneNode(!0),e.parentNode.replaceChild(this.humanBoardDOM,e);const t=this.humanBoardDOM.querySelectorAll(".cell"),n=this.humanPlayer.fleet[this.currentShipIndex];t.forEach((e=>{const r=Array.from(t).indexOf(e);"horizontal"===this.currentDirection&&r%10+n.getShipLength>10||"vertical"===this.currentDirection&&Math.floor(r/10)+n.getShipLength>10||(e.addEventListener("mouseover",(()=>{if("horizontal"===this.currentDirection)for(let e=0;e<n.getShipLength;e++)t[r+e].classList.add("ship-preview");else for(let e=0;e<n.getShipLength;e++)t[r+10*e].classList.add("ship-preview")})),e.addEventListener("mouseout",(()=>{if("horizontal"===this.currentDirection)for(let e=0;e<n.getShipLength;e++)t[r+e].classList.remove("ship-preview");else for(let e=0;e<n.getShipLength;e++)t[r+10*e].classList.remove("ship-preview")})),e.addEventListener("click",(()=>{const e=Math.floor(r/10),t=r%10;this.humanPlayer.gameboard.placeShip(e,t,n,this.currentDirection)&&(this.renderBoard(this.humanPlayer.gameboard.board,this.humanBoardDOM,"h"),this.shipRepresentationArray[this.currentShipIndex].classList.remove("ship-preview-rep"),this.shipRepresentationArray[this.currentShipIndex].classList.add("ship-placed"),this.currentShipIndex++,this.placeShips())})))}))}handleShipRotation(){this.rotateButton.addEventListener("click",(()=>{"horizontal"===this.currentDirection?this.currentDirection="vertical":this.currentDirection="horizontal"}))}gamePlay(){const e=this.computerBoardDOM.querySelectorAll(".cell");this.isHumanTurn?e.forEach((e=>{e.classList.contains("hit")||e.addEventListener("click",(e=>{const t=e.target,n=parseInt(t.id.slice(1)),r=Math.floor(n/10),i=n%10;if(this.humanPlayer.attack(r,i,this.computerPlayer.gameboard),this.renderBoard(this.computerPlayer.gameboard.board,this.computerBoardDOM,"c"),this.computerPlayer.gameboard.areAllSunk())return this.restartButton.classList.remove("hidden"),this.result.textContent="You've won!",this.result.classList.remove("hidden"),void console.log("yep");this.isHumanTurn=!1,this.gamePlay(),console.log("alla alla")}))})):(this.computerPlayer.randomAttack(this.humanPlayer.gameboard),this.renderBoard(this.humanPlayer.gameboard.board,this.humanBoardDOM,"h"),this.isHumanTurn=!0,this.gamePlay())}resetGame(){this.humanPlayer.gameBoard.resetBoard(),this.computerPlayer.gameBoard.resetBoard(),this.renderShipRepresentations(),this.computerBoard.classList.add("hidden"),this.rotateButton.classList.remove("hidden"),this.result.classList.add("hidden"),this.restartButton.classList.add("hidden"),this.currentShipIndex=0,this.currentDirection="horizontal",this.isHumanTurn=!0}}})()})();