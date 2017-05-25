var fs = require("fs") // this is a synchronous blocking operation

// console.log(fs.readFileSync("node.txt", "utf8"));  // this way, this code has to finsih before we console log unrelated runs

fs.readFile('node.txt', 'utf8', (err, data) => {  // this one takes a callback so the rest of the code can keep processing, now asynchronous
  if (err) throw err;
  console.log(data.toUpperCase());
});

console.log("Do completely unrelated stuff...."); //this is synchronous