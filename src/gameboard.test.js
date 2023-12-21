import Gameboard from "./gameboard.js";
import Ship from "./ship.js";

describe("Gameboard Tests", ()=>{
    
    let testGameBoard;
    beforeEach(()=>{
        testGameBoard = new Gameboard();
    })

    test("creates gameBoard of 10x10", ()=>{
        expect(testGameBoard.board && testGameBoard.board).toHaveLength(10);
    })

    test("returns false if the place is already occupied", ()=> {
        const testShip3 = new Ship(3);
        const testShip4 = new Ship(4);
        
        expect(testGameBoard.placeShip(1, 1, testShip3, "horizontal")).toBe(true);
        expect(testGameBoard.placeShip(1, 1, testShip4, "horizontal")).toBe(false);
    })

    test("returns false if the coordinates out of the range of the board", ()=> {
        const testShip5 = new Ship(5);

        expect(testGameBoard.placeShip(6, 8, testShip5, "horizontal")).toBe(false);
        expect(testGameBoard.placeShip(1, 7, testShip5, "vertical")).toBe(false);
    })

    test("ships receives the attacks", ()=>{
        const testShip3 = new Ship(3);

        testGameBoard.placeShip(2, 3, testShip3, "vertical");

        expect(testGameBoard.receiveAttack(2,4)).toBe(true);
        expect(testGameBoard.board[4][2].hit).toBe(true);
        expect(testShip3.hits).toBe(1);
    })

    test("returns true if all the ships on the board are sunk",()=>{
        const testShip3 = new Ship(3);

        testGameBoard.placeShip(2, 3, testShip3, "vertical");

        testGameBoard.receiveAttack(2,3)
        testGameBoard.receiveAttack(2,4)
        testGameBoard.receiveAttack(2,5)
        
        expect(testGameBoard.areAllSunk()).toBe(true);
    
    })
})