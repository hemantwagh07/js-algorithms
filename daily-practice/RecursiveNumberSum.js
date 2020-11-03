/*
Write a code which will split the number and sum it untill we got a sum in single digit
Ex. 
-- 5575 
-- 5 + 5 + 7 + 5 = 22
=> 2 + 2 = 4 which is single digit number
*/

function splitnum(number) {
    let sum = 0
    while (number) {
        sum += (number % 10); // (number%10) returns last digit from number
        number = Math.floor(number / 10); // (number / 10) returns number except last digit
    }
    if (sum > 9) {
        return splitnum(sum)
    } else {
        return sum;
    }

}
console.log(splitnum(5575));