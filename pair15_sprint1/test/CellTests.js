import { expect } from "chai";
import WorldCell from "../templates/js/src/WorldCell.js";
import Bug from "../templates/js/src/Bug.js";
import {Color} from "../templates/js/src/enums/Color.js";

describe('Cell', () => {
    let redBug, blackBug, redCell, blackCell;
    let cell;
    beforeEach(() => {
        cell = new WorldCell();
        redBug = new Bug(Color.Red, null, null);
        blackBug = new Bug(Color.Black, null, null);
        redCell = new WorldCell();
        blackCell = new WorldCell();
    });


    it('should set and get food correctly', () => {
        cell.setFood(3);
        expect(cell.getFood()).equal(3);
    });


    describe('constructor', () => {
        it('should create a cell with default properties', () => {
            const cell = new WorldCell();
            expect(cell.obstructed).to.equal(false);
            expect(cell.food).to.equal(0);
            expect(cell.base).to.equal(null);
            expect(cell.bug).to.equal(null);
        });

        it('should create a cell with specified properties', () => {
            const cell = new WorldCell(true, 2, true, Color.Red);
            expect(cell.obstructed).to.equal(true);
            expect(cell.food).to.equal(2);
            expect(cell.base).to.equal(Color.Red);
            expect(cell.bug).to.equal(null);
        });
    });

    describe('isObstructed', () => {
        it('should return true if the cell is obstructed', () => {
            const cell = new WorldCell(true);
            expect(cell.isObstructed()).to.be.true;
        });

        it('should return false if the cell is not obstructed', () => {
            const cell = new WorldCell();
            expect(cell.isObstructed()).to.be.false;
        });
    });

    describe('isOccupied', () => {
        it('should return true if the cell is occupied', () => {
            const bug = new Bug(Color.Red);
            const cell = new WorldCell();
            cell.setBug(bug);
            expect(cell.isOccupied()).to.be.true;
        });

        it('should return false if the cell is not occupied', () => {
            const cell = new WorldCell();
            expect(cell.isOccupied()).to.be.false;
        });
    });

    describe('setBug', () => {
        it('should set the bug on the cell if the cell is not already occupied', () => {
            const bug = new Bug(Color.Red);
            const cell = new WorldCell();
            const result = cell.setBug(bug);
            expect(result).to.be.true;
            expect(cell.getBug()).to.equal(bug);
        });

        it('should not set the bug on the cell if the cell is already occupied', () => {
            const bug1 = new Bug(Color.Red);
            const bug2 = new Bug(Color.Black);
            const cell = new WorldCell();
            cell.setBug(bug1);
            const result = cell.setBug(bug2);
            expect(result).to.be.false;
            expect(cell.getBug()).to.equal(bug1);
        });

        it('should throw an error if the bug is not an instance of Bug', () => {
            const cell = new WorldCell();
            const invalidBug = {};
            expect(() => cell.setBug(invalidBug)).to.throw('setBug failed: wrong bug type');
        });
    });

    describe('isObstructed', () => {
        it('should return true if the cell is obstructed', () => {
            const cell = new WorldCell(true);
            expect(cell.isObstructed()).equal(true);
        });

        it('should return false if the cell is not obstructed', () => {
            const cell = new WorldCell(false);
            expect(cell.isObstructed()).equal(false);
        });
    });

    describe('isOccupied', () => {
        it('should return true if the cell is occupied by a bug', () => {
            const bug = new Bug(Color.Red, 0, 0);
            const cell = new WorldCell(false);
            cell.setBug(bug);
            expect(cell.isOccupied()).equal(true);
        });

        it('should return false if the cell is not occupied by a bug', () => {
            const cell = new WorldCell(false);
            expect(cell.isOccupied()).equal(false);
        });
    });

    describe('setBug', () => {
        it('should set the bug in the cell if it is empty', () => {
            const bug = new Bug(Color.Red, 0, 0);
            const cell = new WorldCell(false);
            expect(cell.setBug(bug)).equal(true);
            expect(cell.getBug()).equal(bug);
        });

        it('should not set the bug in the cell if it is already occupied', () => {
            const bug1 = new Bug(Color.Red, 0, 0);
            const bug2 = new Bug(Color.Red, 0, 1);
            const cell = new WorldCell(false);
            expect(cell.setBug(bug1)).equal(true);
            expect(cell.setBug(bug2)).equal(false);
            expect(cell.getBug()).equal(bug1);
        });

        it('should throw an error if the provided object is not a Bug', () => {
            const cell = new WorldCell(false);
            expect(() => cell.setBug({})).to.throw();
        });
    });

    describe('removeBug', () => {
        it('should remove the bug from the cell', () => {
            const bug = new Bug(Color.Red, 0, 0);
            const cell1 = new WorldCell(false);
            cell1.setBug(bug);
            expect(cell1.removeBug()).equal(true);
            expect(cell1.isOccupied()).equal(false);
        });

        it('should return false if the cell is already empty', () => {
            const cell = new WorldCell(false);
            expect(cell.removeBug()).equal(false);
        });
    });

    describe('setFood', () => {
        it('should set the amount of food in the cell', () => {
            const cell = new WorldCell(false);
            cell.setFood(10);
            expect(cell.getFood()).equal(10);
        });
    });


});