var promise = new Promise(function (resolve, reject) {
        reject(new Error("I REJECTED"));
    });
    
function onRejected (error) {
  console.log(error.message);
}

promise.catch(onRejected);

var promise2 = Promise.resolve('SECRET VALUE');


var promise3 = Promise.reject(new Error('SECRET VALUE'));


// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     'use strict';
    
//     var message;
//     var promise;
    
//     function randomBytes(n) {
//       return (Math.random() * Math.pow(256, n) | 0).toString(16);
//     }
    
//     message =
//       'A fatal exception ' + randomBytes(1) + ' has occurred at ' +
//       randomBytes(2) + ':' + randomBytes(4) + '. Your system\nwill be ' +
//       'terminated in 3 seconds.';
    
//     promise = Promise.reject(new Error(message));
    
//     promise.catch(function (err) {
//       var i = 3;
    
//       process.stderr.write(err.message);
    
//       setTimeout(function boom() {
//         process.stderr.write('\rwill be terminated in ' + (--i) + ' seconds.');
//         if (!i) {
//           process.stderr.write('\n..... . . . boom . . . .....\n');
//         } else {
//           setTimeout(boom, 1000);
//         }
//       }, 1000);
//     });