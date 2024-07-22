let currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      { name: 'tasselled black low-top lace-up', price: 1000 },
      { name: 'tasselled green low-top lace-up', price: 1100 },
      { name: 'plain beige suede moccasin', price: 950 },
      { name: 'plain olive suede moccasin', price: 1050 }
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      { name: 'red leather laced sneakers', price: 800 },
      { name: 'black leather laced sneakers', price: 900 }
    ]
  }
];

function renderInventory(inventory) {
    // your code here
    // hint: before you just dive into coding...
    // it's a good idea to sketch out a skeleton like you've been seeing earlier in this module...
    let subArray = [];

    for (let i = 0; i< inventory.length; i++){

        for (j=0; j< inventory[i].shoes.length; j++){
       // console.log([(inventory[i].name),(inventory[i].shoes[j].name), (inventory[i].shoes[j].price) ]);
        //push values a subArray 
        subArray.push(([(inventory[i].name),(inventory[i].shoes[j].name), (inventory[i].shoes[j].price) ]));
        }
       // console.log(subArray);

      // push subarray a array
    }
    return subArray;
}

console.log(renderInventory(currentInventory))
// estructura:
//currentInventory = [ {name:1,shoes:[ {},{},{},{} ] } , {name:2,shoes: [ {},{} ] } ]
