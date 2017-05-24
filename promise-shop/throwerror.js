function parsePromised (json) {
  return new Promise(function (fulfill, reject) {
    try {
      fulfill(JSON.parse(json));
    } catch (e) {
      reject(e);
    }
  });
}

parsePromised(process.argv[2])
.then(null, console.log);

// Build a function called `parsePromised` that creates a promise,
// performs `JSON.parse` in a `try`/`catch` block,
// and fulfills or rejectsthe promise depending on whether an error is
// thrown.**Note:** your function should synchronously return the promise!