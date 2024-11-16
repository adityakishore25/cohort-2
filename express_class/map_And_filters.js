// map andf filter
// given an array, give me back a new array in which
// every value is thre multiplied by 2
// [2, 4, 6, 8, 10] - input
// [4, 8, 12, 16, 20] - output

const { map } = require("./fileServer");


const input = [2, 4, 6, 8, 10];

// solution

// let newArray = [];
// for(let i = 0; i < input.length; i++) {
//     newArray.push(input[i] * 2);
// }
// console.log(newArray);

// other solution
// function transform(i) {
//     return i * 2; 
// }

// const ans = input.map(transform);
// console.log(ans);

// const ans = input.map((i) => {
//     return i * 2;
// })

// console.log(ans);

//**************filters *********
// what if I tell you, given an input array, give me back all the even values from it

// solution

const arr = [1, 2, , 4, 5, 6, 7];
// const newArr =  [];
// for (let i = 0; i < arr.length; i++) {
//    if(arr[i] % 2 == 0) {
//     newArr.push(arr[[i]]);
//    }

// }
// console.log(newArr);


// function filterLogic(n) {
//     return !(n % 2);
// } Are we good to go?..

// const ans = arr.filter(filterLogic);
const ans = arr.filter(n => {
    return !(n % 2);
})
console.log(ans);


