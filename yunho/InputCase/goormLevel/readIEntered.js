const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let ArrayData = [];
let N = null;
let count = 0;
rl.on('line', function (line) {
    if(!N){ // N의 초기값이 null 이므로, 처음 시작을 N의 입력으로 강제한다.
        N = +line;
    }
    else {
        ArrayData.push(line);
        count += 1;
    }
    if(count === N) {
        rl.close();
    }
}).on('close', function (){
    console.log(ArrayData);
    process.exit();
})
