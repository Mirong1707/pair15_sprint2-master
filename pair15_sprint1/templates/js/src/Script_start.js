// Get canvas and context elements
import Initializer from "./Initializer.js";
export var cvs;
export var ctx;
export var cell;
export var cellObstructed;
export var cellRed;
export var cellBlack;
export var simulator;

export var bugBlack = [];


if (typeof document !== 'undefined') {
    cvs = document.getElementById("canvas");
    ctx = cvs.getContext("2d");
    // Define image elements
    cell = new Image();
    cellObstructed = new Image();
    cellRed = new Image();
    cellBlack = new Image();
    // Set image source files
    cell.src = "./templates/img/cell.png";
    cellObstructed.src = "./templates/img/cellObstructed.png";
    cellRed.src = "./templates/img/cellRed.png";
    cellBlack.src = "./templates/img/cellBlack.png";

    // Create initializer object and start the simulation
    let initializer = new Initializer();
    initializer.draw();
}
