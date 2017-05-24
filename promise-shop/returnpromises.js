function attachTitle(item){
	var str = "DR. " + item;
	return str;
}

var fulfilledPromise = Promise.resolve('MANHATTAN').then(attachTitle).then(console.log);


    // 'use strict';
    
    // function attachTitle(name) {
    //   return 'DR. ' + name;
    // }
    
    // Promise.resolve('MANHATTAN')
    //   .then(attachTitle)
    //   .then(console.log);

