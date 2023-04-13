class BugBrain {
  constructor(instruction, pos) {
    this.instruction = instruction;
    this.pos = pos;
  }

  getNextInstruction() {
    if (this.pos < this.instruction.length) {
      const nextInstruction = this.instruction[this.pos];
      this.pos++;
      return nextInstruction;
    } else {
      return null;
    }
  }
}
