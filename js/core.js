
function Wizard(wandType, speciality, alliegance, life){
  this.wandType = wandType || "elm";
  this.speciality = speciality || "transfiguration";
  this.alliegance = alliegance || "Hogwarts";
  this.life = life || 100;
  this.heal = function(target){
    console.log("I've healed myself");
    this.life = 100;
  }

}// end wizard function

var wizard = new Wizard();


function Wands(woodType, coreMaterial, spell){
    this.woodType = woodType || "elm";
    this.coreMaterial = coreMaterial || "Phoenix Feather";
    this.spell = spell || "DeathStrike";
    this.cast = function(target){
      console.log("Castio!");
    }

}//end wands function


function Dragon(name, weakness, ability, life){
  this.name = name || "Norbert";
  this.weakness = weakness || "groin shot";
  this.ability = ability || "claw";
  this.life = life || 100;
  this.maul = function(target){
    console.log("Mess your shit up");
  }


}//end MagicalBeast function
