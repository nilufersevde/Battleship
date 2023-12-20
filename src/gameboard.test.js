import Gameboard from "./gameboard.js";

decribe("Gameboard Tests", ()=>{
    
    let testGameBoard;
    beforeEach(()=>{
        testGameBoard = new Gameboard();
    })

    test("creates gameBoard of 10x10", ()=>{
        expect(testGameBoard.board && testGameBoard.board).toHaveLength(10);
    })

    test("returns false if there is already a ship", ()=> {
        const testShip3 = new Ship(3);
        const testShip4 = new Ship(4);
        const testShip5 = new Ship(5);

        expect(testGameBoard.placeShip(1, 1, testShip3, "horizontal")).toBe(true);
        expect(testGameBoard.placeShip(1, 1, testShip4, "horizontal")).toBe(false);

        expect(testGameBoard.placeShip(5, 5, testShip4, "vertical")).toBe(true);
        expect(testGameBoard.placeShip(5, 5, testShip5, "vertical")).toBe(false);
    })

    test()
    

})