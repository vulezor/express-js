const { readFileSync, writeFileSync } = require('fs');
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second);

//single write record
// writeFileSync(
//     './content/resut-sync.txt', 
//     `Here the result : ${first }, ${second}`
// )

// continue to write.
writeFileSync(
    './content/resut-sync.txt', 
    `Here the result : ${first }, ${second}`, { flag: 'a' }
)

console.log('done with the task');
console.log('starting the next one');