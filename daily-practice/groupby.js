/*Problem Statement:
For the given array of people data, parse the data in to the form grouped by their cities.The output shall have count of the people, list of people for each city. (Please check sample output mentioned for reference) .

Sample Input*/

const peoples = [
    {
        "_id": "5f322e9e9a6b9fg8a902c2b04d",
        "name": "Claireg Tfsdf",
        "gender": "female",
        "email": "fatgdfg@zolar.com",
        "phone": "+91 5445454555",
        "city": "Bengaluru"
    },
    {
        "_id": "5f322e9e0b033f228afd008a",
        "name": "Brown Lara",
        "gender": "male",
        "email": "brownlara@zolar.com",
        "phone": "+91 9411359806",
        "city": "Hyderabad"
    },
    {
        "_id": "5f322e9e90a973778cc279b2",
        "name": "Molina Barker",
        "gender": "male",
        "email": "molinabarker@zolar.com",
        "phone": "+91 8473520620",
        "city": "Bengaluru"
    },
    {
        "_id": "5f322e9ef93188370ee080e7",
        "name": "Loretta Mcintyre",
        "gender": "female",
        "email": "lorettamcintyre@zolar.com",
        "phone": "+91 1993560484",
        "city": "Hyderabad"
    },
    {
        "_id": "5f322e9e2c7c9b2c77a3ff73",
        "name": "Sherman Avila",
        "gender": "male",
        "email": "shermanavila@zolar.com",
        "phone": "+91 1825229684",
        "city": "Pune"
    },
    {
        "_id": "5f322e9e9a6b98a902c2b04d",
        "name": "Claire Molina",
        "gender": "female",
        "email": "clairemolina@zolar.com",
        "phone": "+91 3679340671",
        "city": "Bengaluru"
    },
    {
        "_id": "5f322e9e2c7c9b2c77a3fdddf73",
        "name": "Tsdasd Thgff",
        "gender": "male",
        "email": "tjfdfsjff@zolar.com",
        "phone": "+91 5874524562",
        "city": "Pune"
    }
]
/*
----------------------------------------------------------------


    Sample Output

    [
        {
            "count": 2,
            "city": "Hyderabad",
            "people": [{ "_id": "5f322e9e0b033f228afd008a", ...}, { "_id": "5f322e9ef93188370ee080e7", ...}]
        },
        {
            "count": 3,
            "city": "Bengaluru",
            "people": [{ "_id": "5f322e9e90a973778cc279b2", ...}, { "_id": "5f322e9e9a6b98a902c2b04d", ...}],
        },
        {
            "count": 2,
            "city": "Pune",
            "people": [{ "_id": "5f322e9e2c7c9b2c77a3ff73", ...}, { "_id": "5f322e9e2c7c9b2c77a3fdddf73", ...}]
        }
    ]

*/
const groupBy = (peoples) => {
    let group = [];

    //Iterate through each element in array
    peoples.forEach(people => {
        // To find index of element which has same city as current object city
        const cityindex = group.findIndex(ele => ele.city == people.city); //It returns -1 if element is not exists

        // If that object existings then update it using its index or else push new object in array
        if (cityindex >= 0) {
            group[cityindex].count = group[cityindex].count + 1;
            group[cityindex].people.push(people);
        } else {
            group.push({ count: 1, city: people.city, people: [people] });
        }

    });

    return group;
}

console.log(groupBy(peoples));