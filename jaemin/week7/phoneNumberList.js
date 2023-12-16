//프로그래머스 전화번호 목록
function solution(phone_book) {
  let phoneNumberDict = {};

  phone_book.map((a, i) => {
    phoneNumberDict[a] = true;
  });

  for (let i = 0; i < phone_book.length; i++) {
    for (let j = 1; j < phone_book[i].length; j++) {
      const subStr = phone_book[i].substring(0, j);
      if (phoneNumberDict[subStr]) {
        return false;
      }
    }
  }

  return true;
}

const init = () => {
  console.log(solution(["119", "97674223", "1195524421"]));
};

init();
