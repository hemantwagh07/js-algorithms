//Remove duplicates from Array
const array = [1, 1, 4, 2, 3, 3, 2, 7, 4];

//Using filter
console.log(array.filter((element, index) => {
    return array.indexOf(element) === index // index of returns first element found index; 
}))

//Using Set iterator
console.log(new Set(array));
// Output : [ 1, 4, 2, 3, 7 ]