// console.log("Check");
//
// let path = require("path");
//
// console.log(`This will only show file name: ${path.basename(__filename)}`);
//
// console.log(`This is process variable: ${process.argv}`);

function grab(flag){
  let index = process.argv.indexOf(flag);
  return (index === -1) ? null : process.argv[index+1];
}

let user = grab('--user');
let greeting = grab('--greeting');

if ( !user || !greeting)
  console.log("No values at all");
else
  console.log(`Username: ${user} and greeting: ${greeting}`);
