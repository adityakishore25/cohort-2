// Asynchronous nature of JavaScript 
// function findSum(n) {
//     let ans = 0;
//     for (let i = 0; i<n; i++) {
//       ans += i;
//     }
//     return ans;
//   }
  
//   function findSumTill100() {
//     console.log(findSum(100));
//   }
  
//   setTimeout(findSumTill100, 1000)
//   console.log("hello world");

const fs  = require("fs")
fs.readFile("a.txt", "utf-8", function(err, data) {
    console.log(data);
    
})

console.log("after the file read");

let a = "0";
for (let index = 0; index <1000000000; index++) { // This will take lot of time to get executed, 
    // the control reaches back to file output
    a++;
}
console.log("after the for loop!!!");
