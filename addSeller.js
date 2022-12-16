const AuctionItem  = require('./db/Products.json');
const User = require('./db/Users.json');

const fs = require('fs');

let x = User.map(item => {
    // var user = User[Math.floor(Math.random()*User.length)];
    delete item._id
    // item.seller = "ObjectId("+user._id+")";
    return item;
})


fs.writeFile("test.json", JSON.stringify(x), 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 

// setTimeout(() => {

// }, 20000)       