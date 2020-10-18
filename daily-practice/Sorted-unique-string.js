/* Take 2 strings s1 and s2 including only letters from a to z.
Return a new sorted string, the longest possible,
containing distinct letters, each taken only once - coming from s1 or s2.
 Example:
 a = "xyaabbbccccdefww"
 b = "xxxxyyyyabklmopq"
longest(a, b)
-> "abcdefklmopqwxy"
 a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a)
-> "abcdefghijklmnopqrstuvwxyz"
*/

const longest = (str1, str2 = '') => {
    let arr = [...str1.split(''), ...str2.split('')];
    let uniqueArr = arr.filter((ele, index) => {
        return index === arr.indexOf(ele);
    })
    return uniqueArr.sort().join('');
}
let a = "xyaabbbccccdefww"
let b = "xxxxyyyyabklmopq"
longest(a, b);


//Todo: Without using standard functions