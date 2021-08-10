//Q3 :- simple analog clock
// Problem:- You will be givena nuimber N that represents where the minute hand currently is on clock. your programe should return the anglethat is formedby the minute hand and the 12 O'clock mark.

//Answer:- if the minute hand is on 15 then the program returns 90 bcoz a 90-degree angle is formed by the minute hand and the 12 o'clock mark on the clock. we will solve this problem by first calculating what angle is created by each minute passing on a clock. once we calculate this number, then we multiply it with the input to determine the final angle.
            // A method to solve this problem is to consider the rate of change of angle in degree
//per minute. The hour hand of a normal 12hr analog clockturns 360 degree in 12 hrs (720 minutes) or 0.5 degree per minute the minutes hand turns 360 degree in 60 minutes or 6 degree per minute.

//code

function simpleClockAnalog(num){
    //we got 6 bcoz 360/60 = 6
    //360 represents the full number of a degree in a circle and 60 is the number of miutes on the clock, so dividing these two numbers gives us the number of degree in one minute
    return 6 * num
}

console.log(simpleClockAnalog(5))