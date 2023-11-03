const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputData = [];

rl.on("line", (line) => {
  // 띄어쓰기로 split 후 숫자로 변환
  inputData.push(line.split(" ").map(Number));
}).on("close", () => {
  solution(inputData);
});

const compareWeight = (p1, p2, W) => {
  // 회원 1의 입장
  if (!(W[p1].weight > W[p2].weight)) W[p1].best = -1;

  // 회원 2의 입장
  if (!(W[p2].weight > W[p1].weight)) W[p2].best = -1;

  return W;
};

function solution(inputData) {
  let answer = 0;
  let N = inputData[0][0]; // 회원 수
  let M = inputData[0][1]; // 관계 수
  let W = new Array(N + 1).fill(0); // 무게 정보
  inputData[1].forEach((value, index) => {
    W[index + 1] = { weight: value, best: index + 1 }; // 회원의 무게와 최고 추가
  });

  // 관계정보: 입력값의 2번째부터 M개 자르기
  let concat = inputData.splice(2, M);
  concat.forEach((value) => {
    // 관계 정보에 따라 비교하여 내가 최고인지 판단 아니라면 best 값 -1
    W = compareWeight(value[0], value[1], W);
  });

  // answer에 자신이 최고인 회원 수 추가
  for (let i = 1; i <= N; i++) {
    if (i == W[i].best) answer++;
  }

  console.log(answer);
}
