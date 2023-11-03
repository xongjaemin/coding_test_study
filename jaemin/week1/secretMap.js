function solution(n, arr1, arr2) {
  //프로그래머스 비밀지도
  var answer = [];

  for (let i = 0; i < n; i++) {
    const binary = (arr1[i] | arr2[i]).toString(2);
    let temp = [];
    for (let j = binary.length - 1; j > -1; j--) {
      temp[j] = binary[j] === "1" ? "#" : " ";
    }
    answer[i] = temp.join();
    answer[i] = answer[i].replaceAll(",", "");
    answer[i] = answer[i].padStart(n, " ");
  }

  return answer;
}
