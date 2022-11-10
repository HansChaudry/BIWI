import fs from 'fs';
import dummyProducts from './db/dummyJSON/products.json' assert {type: 'json'};

let newProducts = dummyProducts.map((item) => {
    let x = {
        itemName: item.title,
        currentBid: item.price,
        isRecent: false,
        isTrending: false,
        isRecommended: false,
        description: item.description,
        catergory: item.category,
        thumbnail : item.thumbnail,
        images: item.images,
        seller: "hi"
    }

    return(x);
});

fs.writeFile("test.json", JSON.stringify(newProducts), 'utf8', function (err) {
    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 