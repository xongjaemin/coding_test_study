function isPrime(number) {
    if(number == 1) return false;
    for(let i = 2; i < number; i ++){
        if(number % i == 0){
            return false;
        }
    }
    return true;
}

function solution(numbers) {
    let set = new Set();
    numOfCase(numbers.split(""),'');
    function numOfCase(arr,str) {
        if(arr.length) {
            for(let i = 0; i <arr.length; i++) {
                let copy = [...arr];
                copy.splice(i,1);
                numOfCase(copy,str + arr[i])
            }
        }
        if(str > 0 && isPrime(Number(str))) set.add(Number(str))
    }
    return set.size;
}

