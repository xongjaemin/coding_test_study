//프로그래머스 소수 찾기
const isPrime = (num) => {
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

const getPermutations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => [fixed, ...el]);

    results.push(...attached);
  });

  return results;
};

function solution(numbers) {
  var answer = 0;

  const numberArr = numbers.split("");
  const tempArr = [];

  for (let i = 1; i <= numbers.length; i++) {
    const result = getPermutations(numberArr, i);
    result.map((el) => {
      const number = Number(el.join(""));
      if (!tempArr.includes(number)) tempArr.push(number);
    });
  }

  tempArr.map((a, i) => {
    if (isPrime(a)) answer++;
  });

  return answer;
}

const init = () => {
  console.log(solution("011"));
};

init();
