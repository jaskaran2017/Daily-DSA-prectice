//Qus6:- Sum of array plus one

//Problem:- write a function that takes an array of integers and return the sum of integers after adding 1 to each.

//code

function sumOfArray(arr) {
  let result = arr.length;

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

console.log(sumOfArray([1,2,3,4,5]))

// with reducer method
function sumOfArray1(arr){
    return arr.reduce(function(item,num){
        return item + num;
    }, arr.length)
} 
console.log(sumOfArray1([1,2,3,4,5]))