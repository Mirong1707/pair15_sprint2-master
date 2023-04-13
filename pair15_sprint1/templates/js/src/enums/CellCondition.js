
// Defining the CellCondition class
export class CellCondition {
  // Constructor function of the class
  constructor(name, markerType = -1) {
    // Setting the name property
    this.name = name;
    // Checking if the name is "Marker" and setting the markerType property if it is
    if (this.name === "Marker") {
      console.assert(markerType !== -1, "CellCondition with marker type error constructor")
      this.markerType = markerType;
    }
  }
}