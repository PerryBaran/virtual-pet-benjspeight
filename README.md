# Virtual Pet
Welcome to the Virtual Pet project! This is a simple program that allows you to create and interact with a virtual pet using JavaScript.

## Features
Create your own virtual pet
Feed and walk  your pet to keep it healthy and happy
Track your pet's hunger and fitness levels
Pet can age & even die if neglected for too long
## How to Use
### Installation
Clone this repository to your local machine
Make sure you have Node.js installed
Install any necessary dependencies by running npm install in the project directory
### Running the Program
Run the program by executing npm start in your terminal or command prompt
Follow the on-screen instructions to create and interact with your virtual pet
### Interacting with Your Pet
#### growUp()
This function makes the pet grow one year older, and increases its hunger and decreases its fitness.

#### walk()
This function takes the pet for a walk, increasing its fitness by 4 (up to a maximum of 10).

#### feed()
This function feeds the pet, decreasing its hunger by 3 (down to a minimum of 0).

#### checkUp()
This function checks the pet's fitness and hunger levels, and logs a message depending on its needs. If the pet's fitness is below 3 and its hunger is above 5, it needs a walk and is hungry. If its fitness is above 3 and its hunger is below 5, it feels great. If its fitness is below 3 and its hunger is below 5, it needs a walk. If its fitness is above 3 and its hunger is above 5, it is hungry.

#### adoptChild()
This function allows a pet to adopt a child. It adds the name of the child to the pet's children array.

### Constants

There are several constants that are used throughout the pet functions:
<div>
MAXIMUM_FITNESS: The maximum fitness a pet can have.
<div>
ZERO: The value zero.
<div>
LOW_FITNESS: The fitness level below which a pet needs a walk.
<div>
HIGH_HUNGER: The hunger level above which a pet is hungry.
<div>

### Properties
Each pet has the following properties:
<div>
name: The name of the pet.
<div>
age: The age of the pet.
<div>
hunger: The hunger level of the pet.
<div>
fitness: The fitness level of the pet.
<div>
children: An array of the names of the pet's children.

### Contributing
Contributions to this project are welcome! If you find a bug or have an idea for a new feature, please open an issue or submit a pull request.

## Credits
This project was created by Benj Speight. Special thanks to CommandShift for their contributions.