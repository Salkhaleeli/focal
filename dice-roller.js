const numDiceRolls = process.argv[2];
const rollDice = function (){
  let result = [];
  let sides = 6;
 for (i=0; i < numDiceRolls; i++) {
    result.push(Math.ceil(Math.random() * sides))
  }
  return `Rolled ${numDiceRolls} dice: ${result.join(', ')} Good luck!`
}
console.log(rollDice());