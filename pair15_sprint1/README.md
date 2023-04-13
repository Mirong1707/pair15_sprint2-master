# Bugs World, Sprint 1, Pair 15
### Done by Miron Ganin and TODO.

At the start of the first sprint we had a base GUI written in css and html, as well as a few skeletons of game entity classes.

At the second sprint, we finished the base classes. We added a map parser, a bug brain parser. Combined all of these elements to run the game on the canvas, implementing a simulation class for the game itself. Added canvas painting of the game. Roughly speaking, we finalized the missing logic of the game, so that it would already be able to run. So in addition to the backend part, we also connected its work with the frontend.

We also installed lib for tests and added tests to all basic game classes

Added WordCell constructor, to have  ability to create different cells on the map.

Fully create Bug class

Add classes and logic for Bug state machine, instructions adn etc.

Added parser Bug's commands from assembler file, and use them in State machine in simulation
### Structure

* *CSS* files are in the `./templates/css` folder.
* *HTML* files are in the `./templates/` folder.
* *JS* files are in the `./templates/js/...` folder.
* Test data is in the `./testdata/...` folder.

### Technologies Used
The following technologies were used in this sprint:

* HTML
* CSS
* JavaScript
* jQuery


### How to run tests

tests use library http://mochajs.org <br>
To install follow the instructions on the library website <br>
When you have cloned the repository, use the "npm install" command to load the necessary dependencies. To run the tests themselves, use the "npm run" command.

### How to run project
-clone repository

-open start.html file. I used WebStorm for that. 

-enjoy

### Links
