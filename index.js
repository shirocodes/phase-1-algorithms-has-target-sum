// function hasTargetSum(array, target) {
  // iterate through each number in array
//   for (let i = 0; i < array.length; i++) {  //n steps
//     //for the current number, identify a complement (target - number) adding to target
//     const complement = target - array[i]
//      //iterate through the rest of array
//      for (let j = i +1; j < array.length; j++) { //n*n steps
//       //check if any number is complementary
//       //if so return true, else, false
//       if (array[j] === complement) return true
//      }
//   }
//   return false;
// }

//optimize code
  //create object to put numbers we've seen
  //check if any key is complement > true false
function hasTargetSum(array, target) {
 const seenNumbers = {}
 for (let i = 0; i< array.length; i++) {  
  const complement = target - array[i]

  if(seenNumbers[complement]) return true
  seenNumbers[array[i]] = true
}
return false
}

  // Write your algorithm here
          /*
          the function receives an array of integers, and from that array,
          summing up two integers in the array adds up to the target number

          we need a variable defining how to find the pair and declare true/false
          */

/* 
  Write the Big O time complexity of your function here
runtime: O(n*2)
space: 0(n) 

*/

/* 
  Add your pseudocode here
  function hasTargetSum(array, targetNumber)
    iterate through each number in arrar
    for the current number, identify a complement (target - number) adding to target
    iterate through the rest of array
      check if any number is complementary
      if so return true, else, false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-1, 4, 3, 6], 5));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
