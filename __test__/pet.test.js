const Pet = require('../src/pet');

describe('constructor', () => {

  it('returns an object', () => {
    expect(new Pet('Goose')).toBeInstanceOf(Object);
  });

  it('sets the name property', () => {
    const pet = new Pet('Goose');
    expect(pet.name).toEqual('Goose');
  });

  it('has a initial age of 0', () => {
    const pet = new Pet('Goose');
    expect(pet.age).toEqual(0);
  });
});

describe('growUp', () => {

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Goose');
    pet.age = 30;
    expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
  }); 

  it('increase the age by 1', () => {
    const pet = new Pet('Goose');
    pet.growUp();
    expect(pet.age).toEqual(1);
  });

  it('increase the hunger value by 5', () => {
    const pet = new Pet('Goose');
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });

  it('decreases the fitness value by 3', () => {
    const pet = new Pet('Goose');
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });
});

describe('walk', () => {

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Goose');
    pet.age = 30;
    expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
  }); 

  it('increase fitness by 4', () => {
    const pet = new Pet('Goose');
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
  });
  
  it('increases fitness by a maximum to 10', () => {
    const pet = new Pet('Goose');
    pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
});

describe('feed', () => {
 
  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Goose');
    pet.age = 30;
    expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
  }); 

  it('decreases hunger by 3', () => {
    const pet = new Pet('Goose');
    pet.hunger = 5;
    pet.feed();
    expect(pet.hunger).toEqual(2);
  });

  it('decrease hunger by a minimum to 0', () => {
    const pet = new Pet('Goose');
    pet.hunger = 2;
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });
});

describe('checkUp', () => {

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Goose');
    pet.age = 30;
    expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
  }); 

  it('if fitness is 3 or less', () => {
    const pet = new Pet('Goose');
    pet.fitness = 3;
    pet.checkUp();
    expect(console.log("I need a walk"))
  });

  it('if hunger is 5 or more', () => {
    const pet = new Pet('Goose');
    pet.hunger = 5;
    pet.checkUp();
    expect(console.log("I am hungry"))
  });

  it('if fitness is 3 or less AND hunger is 5 or more', () => {
    const pet = new Pet('Goose');
    pet.fitness < 3 && pet.hunger > 5;
    pet.checkUp();
    expect(console.log("I am hungry AND I need a walk"))
  });

  it('if neither fitness or hunger are true', () => {
    const pet = new Pet('Goose');
    pet.fitness > 3 && pet.hunger < 5;
    pet.checkUp();
    expect(console.log("I feel great!"))
  });
});

describe('isAlive', () => {

  it('throws an error if the pet is not alive', () => {
    const pet = new Pet('Goose');
    pet.age = 30;
    expect(() => pet.walk()).toThrow('Your pet is no longer alive :(');
  }); 

  it('return false if following parameters are true', () => {
    const pet = new Pet('Goose');
    pet.fitness = 0, pet.hunger = 10, pet.age = 30;
    expect(pet.isAlive).toBe(false)
  });

  it('return true if following parameters are true', () => {
    const pet = new Pet('Goose');
    pet.fitness = 5, pet.hunger = 8, pet.age =10;
    expect(pet.isAlive).toBe(true)
  });
});

describe('adoptChild', () => {
  it('adds child array element to .children property', () => {
    const parent = new Pet('Goose');
    const child = new Pet('Maverick');
    expect(parent.adoptChild(child)).toEqual({
        name: 'Goose',
        age: 0,
        hunger: 0,
        fitness: 10,
        children: ['Maverick']
      });
    });
  });