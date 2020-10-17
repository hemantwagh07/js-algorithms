//Input : Hello World
//Output: olleH dlroW

let stringToReverse = 'Hello World';

reverseString = (str) => {
    let wordArray = str.split(' '); //Split string into words array
    let reverseWordsArray = [];
    wordArray.forEach(word => {
        reverseWordsArray.push(word.split('').reverse().join(''));
    });

    return reverseWordsArray.join(' ');
}

console.log(reverseString(stringToReverse));

reverseString1 = (str) => {
    let strArray = str.split('');
    let revString = ''
    let revArray = [];
    for (let i = strArray.length - 1; i >= 0; i--) {
        if (strArray[i] === ' ') {
            revArray.length > 0 ? revArray.unshift(revString) : revArray.push(revString);
            revString = '';
        } else {
            revString += strArray[i];
        }
    }
    revArray.length > 0 ? revArray.unshift(revString) : revArray.push(revString);
    return revArray.join(' ');
}

console.log(reverseString1(stringToReverse));

