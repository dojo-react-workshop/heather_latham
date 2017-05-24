const printPromise = new Promise((resolve, reject) => {
    setTimeout(function(){
        resolve("FULFILLED!");
    }, 300);
});

printPromise
    .then(function(item){
        console.log(item);
    });