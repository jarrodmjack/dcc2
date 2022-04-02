/* 
Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.

For example: ["3:1", "2:2", "0:1", ...]

Write a function that takes such collection and counts the points of our team in the championship. Rules for counting points for each match:

if x > y: 3 points
if x < y: 0 point
if x = y: 1 point
Notes:

there are 10 matches in the championship
0 <= x <= 4
0 <= y <= 4

*/






// function points(games) {
// let sum = 0;
// for(let i = 0; i < games.length; i++){
//     if(games[i][0] > games[i][2]){
//         sum = sum + 3
//     }else if(games[i][0] === games[i][2]){
//         sum = sum + 1
//     }else{
//         sum = sum + 0
//     }
// } 
// console.log(sum)
// }



// points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"])


//function takes in array of game totals
//create sum variable
//for loop
//check if [0] > [2] , === || <
//add total to sum



// function digitize(n){
//     return String(n).split('').map(Number).reverse()
// }

// console.log(digitize(348597))






/* 
Given a set of numbers, return the additive inverse of each. 
Each positive becomes negatives, and the negatives become positives.
invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
*/



// function invert(array) {
//  //check for null or empty value first
//  if(array === null || array.length === 0 || array.value === 0){
//      return []
//  }
//  //map through array, turn negatives into positives and positives into negatives. Turn 0 into -0
//  let newArr = array.map(item => item > 0 ? -Math.abs(item) : item === 0 ? -Math.abs(item) : Math.abs(item))
//  return newArr
// }
//  console.log(invert([1,2,3,4,-5]))

// function invert(array){
//     return array.map(x => x === 0 ? x : -x)
// }

//  console.log(invert([1,-2,3,4,-5])) //-1, 2, -3, -4, 5






function past(h, m, s){
  let hmilli = h * 3600000
  let mmilli = m * 60000
  let smilli = s * 1000
  let totalMilliseconds = hmilli + mmilli + smilli
  console.log(totalMilliseconds)
}

past(3, 56, 21)