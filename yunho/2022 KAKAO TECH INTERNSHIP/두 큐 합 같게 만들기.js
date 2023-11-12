function solution(queue1, queue2){
    let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
    let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);
    const target = (sum1 + sum2) / 2;

    const queue = [...queue1, ...queue2];
    let q1Pointer = 0;
    let q2Pointer = queue1.length;

    for(let i = 0; i < queue1.length * 3; i ++){
        if(sum1 === target) return i;
        else{
            sum1 = sum1 > target ? sum1 - queue[q1Pointer++ % queue.length] : sum1 + queue[q2Pointer++ % queue.length];
        }
    }
    return -1;
}

console.log(solution([3,2,7,2],[4,6,5,1])) // must return 2
