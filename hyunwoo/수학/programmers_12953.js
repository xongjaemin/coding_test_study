function solution(arr) {
  let answer = 1;
  // 1부터 100까지 소수 중에서 개수를 기록할 배열 생성
  const prime = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ];
  let arrPrime = Array.from({ length: 101 }, (v) => 0);

  arr.forEach((value, index) => {
    // 해당 value의 소수 개수를 기록할 배열 생성
    let eachNumPrime = Array.from({ length: 101 }, (v) => 0);
    while (value > 1) {
      for (let i = 0; i < prime.length; i++) {
        if (value % prime[i] == 0) {
          value = value / prime[i];
          eachNumPrime[prime[i]]++;
          break;
        }
      }
    }

    // 해당 value의 소수 개수와 전체에 대한 소수 개수 비교를 하고, 기존보다 개수가 많다면 변경
    for (let i = 0; i < prime.length; i++) {
      arrPrime[prime[i]] =
        arrPrime[prime[i]] < eachNumPrime[prime[i]]
          ? eachNumPrime[prime[i]]
          : arrPrime[prime[i]];
    }
  });

  // 전체에 대한 소수와 개수를 이용해서 최소 공배수 계산
  for (let i = 0; i < prime.length; i++) {
    if (arrPrime[prime[i]] > 0) {
      answer = answer * prime[i] ** arrPrime[prime[i]];
    }
  }
  return answer;
}
