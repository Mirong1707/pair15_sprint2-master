import Marker from "./Marker.js";
import {assert} from "../utils/Assertions.js";
import {CellCondition} from "./enums/CellCondition.js";
import {Color} from "./enums/Color.js";
import Bug from "./Bug.js";

export default class WorldCell {
    constructor(obstructed = false, food = 0, isBase = false, baseColor = null) {
        this.obstructed = obstructed;
        this.bug = null;
        this.food = food;
        this.marker = null;
        this.base = baseColor;
    }

    isObstructed() {
        return this.obstructed;
    }

    isOccupied() {
        let a = !(this.bug === null)
        return a;
    }

    setBug(bug) {
        assert(bug == null || bug instanceof Bug, "setBug failed: wrong bug type");
        if (this.bug != null) {
            return false;
        }
        this.bug = bug;
        return true;
    }

    getBug() {
        return this.bug;
    }

    removeBug() {
        if (this.bug == null || this.isObstructed()) {
            return false;
        }
        this.bug = null;
        return true;
    }

    setFood(amount) {
        this.food = amount;
    }

    getFood() {
        return this.food;
    }

    isFriendlyBase(color) {
        return this.base === color;
    }

    isEnemyBase(color) {
        return this.base != null && this.base !== color;
    }

    setMarker(color, number) {
        this.marker = new Marker(color, number);
    }

    clearMarker() {
        this.marker = null;
    }

    isFriendlyMarker(color) {
        return this.marker.color === color;
    }

    isEnemyMarker(color) {
        return this.marker.color !== color;
    }

    cellMatches(color, cellCondition) {
        assert(cellCondition instanceof CellCondition, "cellMatches failed: wrong cellCondition type");
        switch (cellCondition.name) {
            case "Inaccessible":
                let res = this.isOccupied() || this.isObstructed();
                return res;
            case "friend":
            case "Friend":
                return this.isOccupied() && this.getBug().color === color;
            case "foe":
            case "Foe":
                return this.isOccupied() && this.getBug().color !== color;
            case "friendwithfood":
            case "FriendWithFood":
                return this.isOccupied() && this.getBug().color === color && this.bug.hasFood;
            case "food":
            case "Food":
                return this.food !== 0;
            case "rock":
            case "Rock":
                return this.isObstructed();
            case "marker":
            case "Marker":
                return this.isFriendlyMarker(color, cellCondition.markerType);
            case "foemarker":
            case "FoeMarker":
                return this.isEnemyMarker(color, cellCondition.markerType);
            case "home":
            case "Home":
                //console.assert(this.isBase, "cell is not a base")
                return this.base === color;
            case "foehome":
            case "FoeHome":
                //console.assert(this.isBase, "cell is not a base")
                return this.base !== color;
            default:
                assert(false, 'wrong condition ' + cellCondition.name);
                return false
        }
    }

    toString() {
        let str = "";
        return str;
    }
}
