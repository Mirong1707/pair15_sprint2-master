import {assert} from "../utils/Assertions.js";

// Defining a function to generate a random integer
export function getRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

// Defining a function to read a text file
export function readTextFile(filePath) {
    // Creating a new XMLHttpRequest object
    let rawFile = new XMLHttpRequest();
    // Opening the file using a GET request
    rawFile.open("GET", filePath, false);
    // Setting a callback function for the readystatechange event
    rawFile.onreadystatechange = function () {
        // Checking if the request has been completed and the response is ready
        if (rawFile.readyState === 4) {
            // Checking if the status code is OK (200) or if it's a local file (status code 0)
            if (rawFile.status === 200 || rawFile.status === 0) {
                // Returning the response text
                return rawFile.responseText
            } else assert(true, "problem with file load");
        } else assert(true, "problem with file load");
    }
// Sending the request
    rawFile.send(null);
// Returning the response text
    return rawFile.responseText;
}