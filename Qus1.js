// Q1:- Find the missing number in the given integer array of 1 to 100.
// RETURN - integer -- the missing number of the array

//[1,2,3,4,5,6,7,9,10] the given array
// Logic:- this is a sorterd array. since the numbers are in consecutive order, we can solve this in one pass
// it means that by looking ahead using arr[i]+1 and compareing that to arr[i+1]. if the arr[i+1] is not equal to arr[i]+1.
// arr[i]+1 is the missing number.

let arr = [1, 2, 3, 4, 5, 6, 8, 9, 10];

const findMissingInt = (arr) => {
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 != arr[i + 1]) {
      return arr[i] + 1;
    }
  }
  return false;
};
console.log(findMissingInt(arr));
