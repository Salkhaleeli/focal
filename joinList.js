const joinList = function (list) {
  let newList = list.join(', ')
  return newList
}
const conceptList = ["gists", "types", "operators", "iteration", "problem solving"];
const concepts = joinList(conceptList);
console.log(`Today I learned about ${concepts}.`);