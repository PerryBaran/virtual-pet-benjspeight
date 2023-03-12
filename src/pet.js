const MAXIMUM_FITNESS = 10;
const ZERO = 0;
const LOW_FITNESS = 3
const HIGH_HUNGER = 5


function Pet(name) {
    this.name = name;
    this.age = ZERO;
    this.hunger = ZERO;
    this.fitness = MAXIMUM_FITNESS;
    this.growUp = function () {
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    };
};

Pet.prototype.walk = function () {
    if ((this.fitness + 4) <= MAXIMUM_FITNESS ) {
        this.fitness += 4;
    } else {
        this.fitness = MAXIMUM_FITNESS
    }
}

Pet.prototype.feed = function () {
    if (this.hunger - 3 > ZERO) {
        this.hunger -= 3;
    } else {
        this.hunger = ZERO
    }
}

Pet.prototype.checkUp = function () {
    if (this.fitness <= LOW_FITNESS && this.hunger <= HIGH_HUNGER) {
       console.log("I need a walk");
    } else if (this.hunger >= HIGH_HUNGER && this.fitness >= LOW_FITNESS){
       console.log("I am hungry");
    } else if (this.fitness <= LOW_FITNESS && this.hunger >= HIGH_HUNGER){
       console.log("I am hungry AND I need a walk");
    } else console.log("I feel great!");
}

module.exports = Pet;