const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park 
  let tRex 
  let triceratops
  let velociraptor 
  let stegosaurus 
  let apatosaurus
  let dilophosaurus 

  beforeEach(function () {
    park = new Park('Jurassic Park',800)
    tRex = new Dinosaur('T-Rex', 'carnivore', 200);
    triceratops = new Dinosaur('Triceratops', 'herbivore', 100);
    stegosaurus = new Dinosaur('Stegosaurus', 'herbivore', 50);
    velociraptor = new Dinosaur('Velociraptor', 'carnivore', 40);
    dilophosaurus = new Dinosaur('Dilophosaurus', 'carnivore', 22);
    apatosaurus = new Dinosaur('Apatosaurus', 'herbivore', 600);
  });

  it('should have a name', function() {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park')
  });

  it('should have a ticket price', function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 800)
  });

  it('should have a collection of dinosaurs', function () {
    park.collectionOfDinosaur.push(tRex, apatosaurus, triceratops, stegosaurus, velociraptor);
    const actual = park.collectionOfDinosaur.length;
    assert.strictEqual(actual, 5);
  });
  
  it('should be able to add a dinosaur to its collection', function() {
    park.addDinosaur(triceratops);
    const actual = park.collectionOfDinosaur.length;
    assert.strictEqual(actual, 1);
  });
    

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
