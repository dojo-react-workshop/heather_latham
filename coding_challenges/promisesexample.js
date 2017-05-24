const receiptA = new Promise((resolve, reject) => {
    const rand = Math.random() * 1000;
    setTimeout(function(){
        resolve("BOOM!");
    }, rand);
});

receiptA
    .then(function(item){
        console.log('ITEM: ', item);
    });