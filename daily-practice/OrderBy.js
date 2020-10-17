// Display user oreder by age (youngest first)
var users = [
    { name: 'Edward', age: 21 },
    { name: 'Sharpe', age: 37 },
    { name: 'Andy', age: 45 },
    { name: 'Thor', age: 12 },
    { name: 'Magnetic', age: 13 },
    { name: 'Zoras', age: 37 }
];

console.log(users.sort(function (a, b) {
    return a.age - b.age;
}).map((user) => {
    return user.name;
}));

//Oldest first
users.sort(function (a, b) {
    return b.age - a.age;
}).map((user) => {
    return user.name;
});