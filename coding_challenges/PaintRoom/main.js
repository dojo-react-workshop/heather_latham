'use strict'

const orderSupplies = (item, callback) => {
  // The orderSupplies function first finds the item you requested
  const warehouse = [
    { item: 'paint', action(){ return 'start mixing!' } },
    { item: 'brush', action(){ return 'start painting!' } }
  ];

  const deliveryTime = Math.random()*3000 + 1000;
  setTimeout( () => {
    const foundItem = warehouse.find((obj) => obj.item === item);

    if (foundItem) {
      callback(foundItem);
    }

  }, deliveryTime );
};

// original calls
// orderSupplies('paint', (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`));
// orderSupplies('brush', (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`));

//changed to:
const printItem = (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`);

let paintReceived = false;
let brush = null;

orderSupplies('paint', function(item) {
  printItem(item);
  paintReceived = true;
  if (brush){
    printItem(brush);
  }
});

orderSupplies('brush', function(item) {
  if (paintReceived){
    printItem(item);
  } else {
    brush = item;
  }
});




//This can take up to the max time of 8 seconds
// orderSupplies('paint', (delivery) => {
//   console.log(`${delivery.item} delivered! Time to ${delivery.action()}`)
//   orderSupplies('brush', (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`));
// });

// const printItem = (delivery) => console.log(`${delivery.item} delivered! Time to ${delivery.action()}`);

//these can print out of order
// orderSupplies('paint', printItem);
// orderSupplies('brush', printItem);

//these can take up to the max time of 8 seconds
// orderSupplies('paint', (item) => {
//     printItem(item);
//     orderSupplies('brush', printItem);
// });

// let paintReceived = false;
// let brush = null;

// orderSupplies('paint', (item) => {
//   printItem(item); //can print as we don't need to do anything else
//   paintReceived = true;
//   if (brush){    //if brush is waiting in the garage, print item brush
//     printItem(brush);
//   }
// });

// orderSupplies('brush', (item) => {
//   if (paintReceived){
//     printItem(item); //only if the paint has been delivered
//   } else {
//     brush = item; // otherwise put the brush in the garage and wait until paint arrives
//   }
// });









