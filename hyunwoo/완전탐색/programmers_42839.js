// 순열
const getPermutations = (arr, selectCount) => {
  let possilbe_p = [];

  if (selectCount == 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)]; // 고정 값을 뺀 나머지 배열
    const permutations = getPermutations(rest, selectCount - 1); // 나머지 배열끼리 재귀함수
    const attatch = permutations.map((value) => [fixed, ...value]); // 고정값과 나머지 배열 조합
    possilbe_p.push(...attatch); // 고정값을 무조건 가진 배열 추가
  });

  return possilbe_p;
};

// 소수 구하기 (에라토스테네스의 체)
const primeNumber = (num) => {
  let isPrime = new Array(num + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 1; i * i <= num; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= num; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime[num];
};

function solution(numbers) {
  let answer = 0;
  let numbersList = numbers.split("");
  let possibleNum = [];

  // 조합이 가능한 숫자 목록 생성
  for (let i = 1; i <= numbers.length; i++) {
    const p = getPermutations(numbersList, i);

    for (let data of p) {
      let temp = Number(data.join(""));
      if (!possibleNum.includes(temp)) possibleNum.push(temp);
    }
  }

  // 소수 구하기
  possibleNum.forEach((value) => {
    if (primeNumber(value)) answer++;
  });

  return answer;
}
