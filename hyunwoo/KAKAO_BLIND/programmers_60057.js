function solution(p) {
  let u, v;
  let balance = 0; //'('이면 +, ')'이면 -

  //1. 빈 문자열일 경우
  if (p === "") return "";

  //2. 문자열 p를 "균형잡힌 괄호 문자열" u, v로 분리
  for (let i = 0; i < p.length; i++) {
    p[i] === "(" ? balance++ : balance--;
    if (balance === 0) {
      u = p.slice(0, i + 1); //u는 "균형잡힌 괄호 문자열"
      v = p.slice(i + 1); //v는 나머지
      break;
    }
  }

  //u가 "올바른 괄호 문자열"인지 확인
  for (let i = 0; i < u.length; i++) {
    u[i] === "(" ? balance++ : balance--;

    //4. 문자열 u가 "올바른 괄호 문자열"이 아닐때
    if (balance < 0) {
      //-라는건 ')'가 더 많다는 의미로 올바른 괄호 문자열이 아님
      let tmp = `(${solution(v)})`; //v에 대해 1번부터 수행한 결과를 양끝을 괄호로 감쌈 (빈칸도 해당)
      for (let j = 1; j < u.length - 1; j++) {
        u[j] === "(" ? (tmp += ")") : (tmp += "(");
      }
      return tmp;
    }
  }

  return u + solution(v); //3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환
}
