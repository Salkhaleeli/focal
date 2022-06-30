const pigLatin = function(){
  let result = ''
  let ending = 'ay '
  const value = process.argv.slice(2)
  for (let i = 0; i < value.length; i++) {
      if (value.length > 1){
      result += value[i].substring(1, value[i].length);
      result += value[i][0] + ending;
      
      }
    } 
  return result
}
console.log(pigLatin());