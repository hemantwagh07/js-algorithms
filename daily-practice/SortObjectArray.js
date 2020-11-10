const person = [
    { name: 'Hemant Wagh', age: 31 },
    { name: 'Shiv Thakur', age: 30 },
    { name: 'Rupesh Kohle', age: 35 },
    { name: 'Sujit Singh', age: 21 },
    { name: 'Farukh Shaikh', age: 41 }
]

function sortByLastName(obj) {
    const compare = (a, b) => {
        let [, alname] = a.name.split(' ');
        let [, blname] = b.name.split(' ');
        return alname < blname ? -1 : alname < blname ? 1 : 0
    }
    obj.sort(compare);
    return obj;
}

console.log(sortByLastName(person));

function sortByAge(obj) {
    obj.sort((a, b) => a.age - b.age);
    return obj;
}

console.log(sortByAge(person));
