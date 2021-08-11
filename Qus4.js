//Q4 :- sum of several arrays
// Problem:- you will be giev an array of several arrays that each contain integers and your goal is tpo write a function that will sum up all the numbers in all the arrays. Solve with and without using reducer().

//Answer:- we will first loop through the outer array and then through the each inner array adding up all the numbers.

//code
function sumOfArrays(arr){
    // initiat variable to store the final result
    let sum = 0;
    //loop through outer array
    for(let i = 0; i < arr.length; i++){
        //loop through inner arrays
        for(let j = 0; j < arr[i].length; j++){
            sum += arr[i][j]
        }
    }
    return sum;
}
let arr = [[3,2],[1],[4,10]];

console.log(sumOfArrays(arr))

// with reducer()
function sumArray(arr) {
    return arr.reduce((t, e) => t.concat(e)).reduce((t, e) => t + e)
  }
  console.log(sumOfArrays(arr))
