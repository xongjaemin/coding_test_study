const arr = [1,2,3,4,5];
const sliced = arr.slice(1, 4); // slice(start, end-1);
console.log(sliced); // [2, 3, 4];

const spliced = arr.splice(2, 2, 4, 4); // splice(start, deleteCount, item1, item2, ...);
console.log(spliced); // [3,4];
console.log(arr); // [1,2,4,4,5];
