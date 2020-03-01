const csv = require('csv-parser');
const fs = require('fs');

const filepath = "./test.csv"

let fiftyMins = [];
let thirtyMins = [];

fs.createReadStream(filepath)
.on('error', (err) => {
    console.log(err)
})
.pipe(csv())
.on('data', (row) => {
  let str = `${row[' Talk title']},${row[' Speaker(s)']}`
  if(row[' Duration in Minutes'] == 30) {
    thirtyMins.push(str)
  } else {
    fiftyMins.push(str);
  }
})
.on('end', () => {
    //csv parsed
})

