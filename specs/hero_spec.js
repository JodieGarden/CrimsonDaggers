var assert = require('assert');
var Hero = require('../hero');
var Food = require('../food');

describe('Hero', function(){
  it('should return name',function(){
    assert.equal('Captain Crimson Daggers', hero1.name)
  })
  it('should return health', function(){
    assert.equal(100, hero1.health)
  })
  it('should return favFood', function(){
    assert.equal('dandelions', hero1.favFood)
  })
  it('should return speech', function(){
    assert.equal("ARGHHH IM Captain CRIMSON DAGGER", hero1.talk())
  })
  it('should return replenValue times 1.5 as it is his favFood', function(){
    assert.equal(130, hero1.health)
  })
});