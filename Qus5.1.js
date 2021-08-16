//Qus5.1:- oddball_sum
// Problem:- write a function called oddball_sum which take a list of numbers and return the sum of all the odd numbers.


//Answer:- To solve this we simply loop through all the numbers in the list while maintaining the final count. every time an odd number is encountred we add this to the count 




//code
//without using reduce function
function oddball_sum(num){
    // setting variable for final count
    let final_count = 0;

    //loop thriugh entire list
    for(let i = 0; i <= num.length;i++){
        if(num[i]%2 ===1){
            final_count += num[i];
        }
    }
    return final_count;
}  
console.log(oddball_sum([1,2,3,4,5,6,7,8,9]))

// with reduce function

function oddball_sum1(num){

    return num.reduce(function(total, items){
        if(items % 2 ===1){
            return total+= items;
        }
        return total;
    })
}
console.log(oddball_sum1([1,2,3,4,5]))