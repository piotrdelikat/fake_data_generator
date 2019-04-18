const faker = require("faker");

faker.locale = "pl";

const randomName = faker.name.findName();
const randomEmail = faker.internet.email();
const randomZip = faker.address.zipCode();
const randomCity = faker.address.city();
const randomStreet = faker.address.streetName();

// Possible data

// streetName
// streetAddress
// streetSuffix
// streetPrefix
// secondaryAddress
// county
// country
// countryCode
// state
// stateAbbr
// latitude
// longitude

console.log(`Name: ${randomName} Email: ${randomEmail}`);
console.log(`ul. ${randomStreet} ${randomZip} \n ${randomCity}`);
