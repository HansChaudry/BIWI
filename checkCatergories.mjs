import products from './db/dummyJSON/products.json' assert {type: 'json'};

let x = []

products.map((item) => {
    if(!x.includes(item.category)){
        x.push(item.category);
    }
});

console.log(x);