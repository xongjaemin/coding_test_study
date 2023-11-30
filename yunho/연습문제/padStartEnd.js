const id = '아이디입니다'
const temp = id.slice(0,3);
const result = temp.padEnd(id.length, '*');

console.log(result);
// 아이디***
