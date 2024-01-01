//프로그래머스 둘만의 암호
function solution(s, skip, index) {
  var answer = "";
  let stringArr = s.split("");
  let skipArr = skip.split("");

  stringArr.map((a, i) => {
    let temp = a.charCodeAt();
    for (let j = 0; j < index; j++) {
      temp++;
      if (temp > 122) temp = 97;

      while (skipArr.includes(String.fromCharCode(temp))) {
        temp++;
        if (temp > 122) temp = 97;
      }
    }
    answer += String.fromCharCode(temp);
  });

  return answer;
}

const init = () => {
  console.log(solution("aukks", "wbqd", 5));
};

init();
