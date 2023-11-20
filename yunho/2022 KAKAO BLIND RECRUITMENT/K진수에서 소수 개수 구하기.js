function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
}

function solution(n, k) {
    let answer = 0;
    // n수를 k진법으로 변환
    const converted = n.toString(k);
    const numbers = converted.split('0');
    numbers.forEach(value => {
        if(isPrime(Number(value))) answer ++;
    })
    return answer;
}
