import Gameboard from "./gameboard.js";
import Player from "./player.js";

describe("Player tests", ()=>{
    let testPlayer;

    beforeEach(() => {
        testPlayer = new Player();
    })

    test("Player attacks", () => {
        const enemyboard = new Gameboard();
        testPlayer.attack(1, 2 ,enemyboard);
        expect(enemyboard.board[1][2].hit).toBe(true);
    })

    test("Place a single ship and check coordinates", () => {
        const ship = testPlayer.fleet[0];  // Choose the first ship for simplicity
        testPlayer.gameboard.placeShip(2, 3, ship, 'horizontal');

        // Check if coordinates are properly populated
        expect(ship.coordinates).toHaveLength(ship.length);
        ship.coordinates.forEach(({ x, y }) => {
            expect(x).toBeGreaterThanOrEqual(0);
            expect(x).toBeLessThan(10);
            expect(y).toBeGreaterThanOrEqual(0);
            expect(y).toBeLessThan(10);
        });
    });

    test("Randomly place the fleet", () => {
        testPlayer.randomPlacement();

        testPlayer.fleet.forEach((ship)=>{

            ship.coordinates.forEach(({ x, y }) => {
                expect(x).toBeGreaterThanOrEqual(0);
                expect(x).toBeLessThan(10);
                expect(y).toBeGreaterThanOrEqual(0);
                expect(y).toBeLessThan(10);
                //Check that the ship occupies the correct cells on the gameboard
                expect(testPlayer.gameboard.board[x][y].ship).toBe(ship);
                console.log(testPlayer.gameboard.board[x][y]);
            });
        })
    })

    test("Don't let hit a cell that has already been hit", () => {
        const enemyboard = new Gameboard();

        testPlayer.attack(1, 2, enemyboard);
        expect(testPlayer.attack(1, 2, enemyboard)).toBe(false);

    })

    test("Switch turn when attack", () => {
        const enemyboard = new Gameboard();

        testPlayer.attack(3, 5, enemyboard);
        expect(testPlayer.isPlayerTurn).toBe(false);
    })

})