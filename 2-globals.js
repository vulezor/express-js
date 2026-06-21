 // GLOBALS - NO WINDOW !!!

 // __dirname - path to current directory
 // __filename - filename
 // require - function to use modules (CommonJS)
 // module - info about current moduel (file)
 // process - info about env where the program is being executed
 
console.log(__dirname);


console.log(__filename);

const a = setInterval(()=>{
    console.log('Hello world')
}, 1000);


setTimeout(()=>{
    clearInterval(a);
}, 3100);