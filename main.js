// 1.
// function createPerson(firstName, lastName, age, email) {
//     if (typeof firstName !== 'string' ||
//         typeof lastName !== 'string' ||
//         typeof age !== 'number' ||
//         typeof email !== 'string') {
//         throw new Error('Invalid input. Please provide valid parameters.');
//     }

//     return {
//         firstName: firstName,
//         lastName: lastName,
//         age: age,
//         email: email
//     };
// }

// const personObject = createPerson('John', 'Doe', 30, 'john.doe@example.com');
// console.log(personObject);

// 2.

// function createPersonInfo(firstName, lastName, age, email, education, job) {
//     if (typeof firstName !== 'string' ||
//         typeof lastName !== 'string' ||
//         typeof age !== 'number' ||
//         typeof email !== 'string' ||
//         typeof education !== 'object' ||
//         typeof job !== 'object') {
//         throw new Error('Invalid input. Please provide valid parameters.');
//     }

//     return {
//         personalInfo: {
//             firstName: firstName,
//             lastName: lastName,
//             age: age,
//             email: email
//         },
//         educationInfo: {
//             school: education.school || null,
//             university: education.university || null
//         },
//         jobInfo: {
//             title: job.title || null,
//             position: job.position || null,
//             yearsOfExperience: job.yearsOfExperience || null
//         },
//         residenceInfo: {
//             country: job.countryOfResidence || null,
//             city: job.cityOfResidence || null,
//             homeAddress: job.homeAddress || null
//         }
//     };
// }

// const personInfoObject = createPersonInfo(
//     'luka',
//     'noza',
//     30,
//     'lukakalu@gmail.com',
//     {
//         school: 'High School',
//         university: 'University of vsdcs'
//     },
//     {
//         title: 'Software Engineer',
//         position: 'Senior Developer',
//         yearsOfExperience: 5,
//         countryOfResidence: 'USA',
//         cityOfResidence: 'New York',
//         homeAddress: '123 Main Street'
//     }
// );

// console.log(personInfoObject);



// 3.

// function filterAnimalsByGender(animals, gender) {
//     if (!Array.isArray(animals) || typeof gender !== 'string') {
//         throw new Error('Invalid input. Please provide a valid array of animals and a gender parameter.');
//     }


//     const filteredAnimals = animals.filter(animal => {
//         return animal.sex === gender;
//     });

//     return filteredAnimals;
// }

// const animals = [
//     { name: 'Fluffy', age: 3, breed: 'Labrador', sex: 'male' },
//     { name: 'Whiskers', age: 2, breed: 'Siamese', sex: 'female' },
//     { name: 'Spot', age: 5, breed: 'Dalmatian', sex: 'male' },
// ];

// const filteredMaleAnimals = filterAnimalsByGender(animals, 'male');
// console.log(filteredMaleAnimals);



// 4.

// a

// function getUsersCollection(humans) {
//     if (!Array.isArray(humans)) {
//         throw new Error('Invalid input. Please provide a valid array of human objects.');
//     }

//     const usersCollection = humans.map(human => {
//         const fullName = `${human.firstName} ${human.lastName}`;
//         return { fullName, email: human.email };
//     });

//     return usersCollection;
// }

// const humans = [
//     { firstName: 'luka', lastName: 'nogn', age: 30, gender: 'male', email: 'sdfnerb@gmail.com', mobileNumber: '1234567890' },
//     { firstName: 'luka', lastName: 'dfgfgbs', age: 25, gender: 'female', email: 'addseawc@gmail.com', mobileNumber: '9876543210' },
// ];

// const users = getUsersCollection(humans);
// console.log(users);

// b

// function filterContactsByNameOrLastName(contacts, reference) {
//     if (!Array.isArray(contacts) || typeof reference !== 'string') {
//         throw new Error('Invalid input. Please provide a valid array of contact objects and a reference string.');
//     }

//     const lowercaseReference = reference.toLowerCase();

//     const filteredContacts = contacts.filter(contact => {
//         const lowercaseFirstName = contact.firstName.toLowerCase();
//         const lowercaseLastName = contact.lastName.toLowerCase();

//         return lowercaseFirstName.includes(lowercaseReference) || lowercaseLastName.includes(lowercaseReference);
//     });

//     return filteredContacts;
// }

// const contacts = [
//     { firstName: 'ltyjn', lastName: 'rdvvf', mobileNumber: '1234567890', email: 'cnhje@gmail.com', picture: 'ltyjn.jpg' },
//     { firstName: 'ltyjffbn', lastName: 'bxzt', mobileNumber: '9876543210', email: ' vgcnhh@gmail.com', picture: 'ltyjffbn.jpg' },
// ];

// const filteredContacts = filterContactsByNameOrLastName(contacts, 'rdvvf');
// console.log(filteredContacts);



// 5

// class LottoCustomer {
//     constructor(fullName, personalNumber, chosenNumbers) {
//         this.fullName = fullName;
//         this.personalNumber = personalNumber;
//         this.chosenNumbers = chosenNumbers;
//     }
// }

// function generateWinningLottoNumbers() {
//     const winningNumbers = [];
//     while (winningNumbers.length < 7) {
//         const randomNumber = Math.floor(Math.random() * 49) + 1;
//         if (!winningNumbers.includes(randomNumber)) {
//             winningNumbers.push(randomNumber);
//         }
//     }
//     return winningNumbers;
// }

// function identifyWinningCustomer(customers, winningNumbers) {
//     if (!Array.isArray(customers) || !Array.isArray(winningNumbers) || winningNumbers.length !== 7) {
//         throw new Error('Invalid input. Please provide valid arrays of customers and winning lotto numbers.');
//     }

//     let winningCustomer = null;

//     customers.forEach(customer => {
//         const matchingNumbers = customer.chosenNumbers.filter(number => winningNumbers.includes(number));

//         if (matchingNumbers.length === 7) {
//             winningCustomer = customer;
//         }
//     });

//     return winningCustomer;
// }

// const customer1 = new LottoCustomer('John Doe', '123456789', [1, 2, 3, 4, 5, 6, 7]);
// const customer2 = new LottoCustomer('Jane Smith', '987654321', [8, 9, 10, 11, 12, 13, 14]);

// const winningNumbers = generateWinningLottoNumbers();
// console.log('Winning Lotto Numbers:', winningNumbers);

// const customers = [customer1, customer2];
// const winner = identifyWinningCustomer(customers, winningNumbers);

// if (winner) {
//     console.log('Winner:', winner.fullName);
// } else {
//     console.log('No winner this time.');
// }
