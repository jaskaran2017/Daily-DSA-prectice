//Qus5:- Test divisor of 3.
//Problem:- You will be given 2 parameters : a low and high number. Your goal is to print all the numbers between low and highand for each of the number print whether or not the number is divisible by 3.if the nummber is divisible by 3, print the word "div3" directly after the number.

//Answer:- For printing all the numbers we need to run a loop first. Once we have the code for that written, we will add a conditional that will check if the number is evenly divisible by 3 by using mod operator.

//code

function test_divisor(low, high) {
  // using for_loop to print all the numbers and the values will be stored in an array

  let result = [];

  for (let i = low; i <= high; i++) {
    // all tne values will be pushed in the array
    result.push(i);
    // here will use mod operator check if the values are disible with 3.
    if (i % 3 === 0) {
      // if yes then push the condition with the value
      result.push("div3");
    }
}
return result;

}
  console.log(test_divisor(2, 12));
