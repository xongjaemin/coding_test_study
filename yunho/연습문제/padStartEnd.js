const id = '아이디입니다'
const temp = id.slice(0,3);
console.log(id.length);
const result = temp.padEnd(id.length, '*');

console.log(result);
// 아이디***
