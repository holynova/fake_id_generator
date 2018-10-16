const IdGenerator = require('./IdGenerator.js');

let f = new IdGenerator()
// let list = f.gen(9999)
// console.log(JSON.stringify(list, null, 2))
f.genAndSave(99999)