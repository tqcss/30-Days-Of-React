const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]

// 1
let emptyArray = [];

// 2
let myArray = [0, 1, 2, 3, 4, 5, 6];

// 3
let arrayLength = myArray.length;

// 4
let firstItem = myArray[0];
let middleItem = myArray[(arrayLength - 1) / 2];
let lastItem = myArray[arrayLength - 1];

// 5
let mixedDataTypes = [
    "Tony",
    28,
    true,
    5.9,
    "Toronto",
    2.75,
    false
];

// 6
let itCompanies = [
    "Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon"
];

// 7
console.log(itCompanies);

// 8
console.log(itCompanies.length);

// 9
console.log(`First Company: ${itCompanies[0]}`);
console.log(`Middle Company: ${itCompanies[(itCompanies.length - 1) / 2]}`);
console.log(`Last Company: ${itCompanies[itCompanies.length - 1]}`);

// 10
itCompanies.forEach(company => {
    console.log(company);
});

// 11
for (i = 0; i < itCompanies.length; i++) {
    let company = itCompanies[i];
    itCompanies[i] = company.toUpperCase();
}
console.log(itCompanies);

// 12
function joinCompanies(maxLength, current = 0) {
    if (maxLength - 1 == current) {
        return itCompanies[current];
    } else {
        return itCompanies[current] + ", " + joinCompanies(maxLength, current + 1);
    }
}
console.log(`${joinCompanies(itCompanies.length - 1)}, and ${itCompanies[itCompanies.length - 1]} are big IT companies.`);

// 13
function findCompany(company) {
    let index = itCompanies.indexOf(company);

    if (index != -1) return itCompanies[index];
    console.log("Company is not found.");
    return null;
}
findCompany("NETFLIX");
findCompany("GOOGLE");

// 14
let filteredCompanies = [];
itCompanies.forEach((company) => {
    if (!company.includes('O')) {
        filteredCompanies.push(company);
    }
});
console.log(filteredCompanies);

// 15
itCompanies.sort();
console.log(itCompanies);

// 16
itCompanies.reverse();
console.log(itCompanies);

// 17
console.log(itCompanies.slice(0, 3));

// 18
console.log(itCompanies.slice(-3));

// 19
console.log(itCompanies.slice(itCompanies.length / 2, itCompanies.length / 2 + 1));

// 20
itCompanies.shift();
console.log(itCompanies);

// 21
itCompanies.splice(itCompanies.length / 2, itCompanies.length / 2 + 1)
console.log(itCompanies);

// 22
itCompanies.pop();
console.log(itCompanies);
