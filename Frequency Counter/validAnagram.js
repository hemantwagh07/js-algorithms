function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }
    let lookup = {}
    for (let i = 0; i < first.length; i++) {
        let char = first[i];
        lookup[char] ? lookup[char]++ : lookup[char] = 1 // if it is exists add 1 else assign 1
    }
    for (let i = 0; i < second.length; i++) {
        let char = second[i];
        //If char is set to zero or cant find it in lookup obj
        if (!lookup[char]) { //returns false it is zero
            return false;
        } else {
            lookup[char]--; // Decrementing the counter of found char
        }
    }
    return true
}

// Another version with 3 loops
function validAnagram1(first, second) {
    if (first.length !== second.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for (let str of first.split('')) {
        frequencyCounter1[str] = (frequencyCounter1[str] || 0) + 1;
    }
    for (let str of second.split('')) {
        frequencyCounter2[str] = (frequencyCounter2[str] || 0) + 1;
    }
    for (let char in frequencyCounter1) { // For "in" used for object iterable. It returns key.
        if (!(char in frequencyCounter2)) {// Check if key exists in other object
            return false;
        }
        if (frequencyCounter1[char] !== frequencyCounter2[char]) {
            return false;
        }
    }
    return true;
}

validAnagram('anagram', 'nagaram'); //true
//validAnagram('aaz', 'zaz'); false
//validAnagram('aaz', 'zza'); false
//validAnagram('awesome', 'awesom'); false
//validAnagram('awesome', 'awesome'); true
//validAnagram('awesome', 'omesewa'); true