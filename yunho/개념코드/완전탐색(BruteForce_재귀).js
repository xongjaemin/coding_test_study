// 배열에 따른 모든 경우의 수를 찾기 위한 방법
let set = new Set();

function numOfChoice(numbers, str){
    // numbers를 copy하고 계속해서 재귀한다.
    if(numbers.length){
        for(let i = 0; i < numbers.length; i ++){
            let copy = [...numbers];
            copy.splice(i,1);
            numOfChoice(copy, str + numbers[i]);
        }
    }
    if(str > 0){
        set.add(str);
    }
}
numOfChoice([1,2,3], '');
console.log(set);
