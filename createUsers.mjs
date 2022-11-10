import fs from 'fs';
import dummyUsers from './db/dummyJSON/users.json' assert {type: 'json'};

let newUsers = dummyUsers.map((item) => {
  let x = {
    firstName: item.firstName,  
    lastName: item.lastName,
    maidenName: item.lastName, 
    age: item.age,
    gender: item.gender,     
    email:  item.email,
    phone: item.phone,      
    username: item.username,
    password: item.password,   
    birthDate: item.birthDate,
    profileIMG: item.image,         
    ip: item.ip,
    address: {
        address: item.address.address,
        city: item.address.city,
        coordinates: item.address.coordinates,
        postalCode: item.address.postalCode,
        state: item.address.state
    },
    bank: {
        cardExpire: item.bank.cardExpire,
        cardNumber: item.bank.cardNumber,
        cardType: item.bank.cardType,
        currency : item.bank.currency,
        iban: item.bank.iban
    },
    recents: [],
    userAuctions: [],
    pastAuctions: [],
    currentAunctions: []
  }

  return(x);
});

fs.writeFile("test.json", JSON.stringify(newUsers), 'utf8', function (err) {
  if (err) {
    return console.log(err);
  }

  console.log("The file was saved!");
}); 


// console.log(newUsers);