var Hero = function(name, health, favFood){
  this.name = name,
  this.health = health,
  this.favFood = favFood
  this.talk = function(){
    return "ARGHHH IM Captain CRIMSON DAGGER"
    this.eat = function(foods){
      if(this.favFood === foods){
        return this.health + (this.food.replenValue * 1.5)

      } else 
      return this.health + this.food.replenValue
    }
  };
}
  hero1 = new Hero("Captain Crimson Daggers", 100,'dandelions')

  hero1.talk();
  hero1.eat('Fried Chicken');
  module.exports = Hero