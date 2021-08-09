//Q1 :- Lucky_seven
//Problem :- Write a function called Lucky_seven which takes an array of integers and return true if
// any three consecutive elements sum to 7.

//ANSWER:-

/* To solve this problem we'll simply loop the array starting at 3rd position(2nd index), and checking
if the number at this index plus two previous numbers sums to 7. if yes then return true else return false*/

function lucky_seven(arr) {
  // first we'll check if the length of array is greater than 3. if not we'll return "not-possible"
  if (arr.length < 3) {
    return "not possible.";
  }
  // now we'll loop through the array bcoz the array length is > 3
  // we will start the loop at 3rd number in array [i=2]
  // And check it along with the two previous numbers [i-1] & [i-2]

  let i = 2;
  for (i = 2; i < arr.length; i++) {
    if (arr[i] + arr[i - 1] + arr[i - 2] === 7) {
      return 1;
    }
  }
  // if the loop is finished and no match found
  return 0;
}

console.log( lucky_seven([2,4,1,5,6,3,8,7,9]));
console.log( lucky_seven([3,4,1,5,6,2,8,7,9]));
