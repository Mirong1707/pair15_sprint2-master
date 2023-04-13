import Bug from "./Bug.js";
import {Color} from "./enums/Color.js";
import {ctx, cvs} from "./Script_start.js";
import SimpleAssembler from "./Asembler/SimpleAssembler.js";

export var world_map = "./maps/map0";
export var bug_brain_1 = "./bugScripts/bugBrainStupid";
export var bug_brain_2 = "./bugScripts/bugBrainStupid";
export var number_of_iter;
export var logging_bool;

// Define Simulator class
export default class Engine {

    constructor(world) {
        // Initialize empty bugs array and assign world object
        this.bugs = []
        let num_of_bugs = 0

        this.world = world
        // Add bugs at swarms positions with SimpleAssembler instructions
        for (let i=0; i < world.y; i++){
            for (let j=0; j < world.x; j++) {
                // add red bug
                if (this.world.cells[i][j].base === Color.Red) {
                    console.log("!!!")
                    this.bugs[num_of_bugs] = new Bug(Color.Red, i, j, this.world,
                        new SimpleAssembler(bug_brain_1, world).instructions);
                    num_of_bugs++;
                }
                // add black bug
                if (this.world.cells[i][j].base === Color.Black) {
                    this.bugs[num_of_bugs] = new Bug(Color.Black, i, j, this.world,
                        new SimpleAssembler(bug_brain_2, world).instructions);
                    num_of_bugs++;
                }
            }
        }
        // Assign bugs to their respective cells in the world
        for (let i = 0; i < this.bugs.length; i++) {
            this.world.cellAt(this.bugs[i].getPosition()).bug = this.bugs[i];
        }

    }

    // Define method to simulate one cycle of the world
    simulateOneCycle() {
        // Clear canvas context and update world view
        ctx.clearRect(0, 0, cvs.width, cvs.height);
        this.world.updateMapView();
        // Update each bug in the world
        for (let i = 0; i < this.bugs.length; i++) {
            this.bugs[i].update();
        }
    }
}