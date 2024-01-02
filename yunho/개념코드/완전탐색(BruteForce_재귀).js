// 배열에 따른 모든 경우의 수를 찾는다.
let set = new Set();

function numOfChoice(numbers, str){
    if(numbers.length){
        for(let i = 0; i < numbers.length; i++){
            let copy = [...numbers];
            let char = copy.splice(i, 1);
            numOfChoice(copy, str+char);
        }
    }
    if(str > 0){
        set.add(str);
    }
}

numOfChoice([1,2,3],'');
console.log(set);
