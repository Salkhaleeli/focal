// const pythagorean = function (object, callback){
//   for (const key in object) {
//     console.log(key);        
      
//     }
// }


const input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
const result = input.map((key) => Math.sqrt((Math.pow(key['x'], 2)) + (Math.pow(key['y'], 2) )))
console.log(result);
console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);