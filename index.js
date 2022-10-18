function hasTargetSum(array, target) {

  for (let i = 0; i <= array.length - 1; i++){
    
    // let indexForRemoval = i

    // let newArray = [...array].splice(indexForRemoval, 1)

    for (let j = i + 1; j < array.length; j++){

      if (array[i] + array[j] === target){
        return true
      } 

    }
  }
    return false
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  will need to iterate through the input array by index, add that value to ever other value in the array.

  to narrow in on every other value of the array, I'll need to create a new array but remove the index with the value of i to avoid adding the number to itself.

    if sum = target value, return true
    if sum != target value, return false
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

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
