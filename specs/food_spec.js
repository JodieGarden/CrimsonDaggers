var assert = require('assert');
var Hero = require('../hero');
var Food = require('../food');

describe('Food', function(){
  it('should return food name',function(){ 
    assert.equal('Fried Chicken', food1.name)
  })
  it('should return replenValue', function(){
    assert.equal(20, food1.replenValue)
  })
})