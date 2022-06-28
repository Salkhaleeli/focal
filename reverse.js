const reverseArg = function (argument){
  let result = "";
  for (let i = 0; i < argument.length; i++) {
    for (let j = argument[i].length-1; j >=0; j--) {
      result += argument[i][j]
      
    }
    if (i !== argument.length-1) {
      result += '\n'
    }
  }
  return result
}
console.log(reverseArg('hello goodbye'))
// console.log(reverseArg('1 fish 2 fish'))
const arguments = process.argv.slice(2);
console.log(arguments);
console.log(reverseArg(arguments));