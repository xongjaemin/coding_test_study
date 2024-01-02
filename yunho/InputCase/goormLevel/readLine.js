const solution = (ArrayData, IntegerData, StringData) => {
    console.log(ArrayData);
    console.log(IntegerData);
    console.log(StringData);
};

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let ArrayData = [];
let IntegerData = 0;
let StringData = "";
// 사용자가 입력한 각 줄마다 이 핸들러가 실행됩니다.
rl.on('line', function (line) {
    ArrayData.push(line);
    IntegerData = Number(line);
    StringData = line;
    // data = line.split('').map((el) => el);
    // data = line.split(' ').map((el) => el);
    // data = line.split('').map((el) => +el);
    rl.close();
})
    // rl.close()가 호출되어 인터페이스가 종료되면, 이 핸들러가 실행됩니다.
    .on('close', function () {
    solution(ArrayData, IntegerData, StringData);
    process.exit();
});
