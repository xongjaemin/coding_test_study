//프로그래머스 JadenCase 문자열 만들기
function solution(s) {
  var answer = "";
  let isNewWord = true;

  s = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    if (
      isNewWord === true &&
      "a".charCodeAt() <= s[i].charCodeAt() &&
      s[i].charCodeAt() <= "z".charCodeAt()
    ) {
      answer += s[i].toUpperCase();
    } else answer += s[i];

    isNewWord = false;

    if (s[i] === " ") {
      isNewWord = true;
    }
  }

  return answer;
}

solution("3people unFollowed me");
