//프로그래머스 파일명 정렬
const splitString = (str) => {
  const match = str.match(/([^\d]*)(\d*)(.*)/);

  return {
    head: match[1],
    number: match[2],
    tail: match[3],
  };
};

function solution(files) {
  var answer = [];
  let fileMap = [];

  files.map((file, i) => {
    fileMap.push(splitString(file));
  });

  fileMap.sort((a, b) => {
    if (a.head.toLowerCase() < b.head.toLowerCase()) {
      return -1;
    } else if (a.head.toLowerCase() > b.head.toLowerCase()) {
      return 1;
    } else {
      return Number(a.number) - Number(b.number);
    }
  });

  answer = fileMap.map((el, i) => {
    return el.head + el.number + el.tail;
  });
  return answer;
}

const init = () => {
  solution([
    "img12.png",
    "img10.png",
    "img02.png",
    "img1.png",
    "IMG01.GIF",
    "img2.JPG",
  ]);
};

init();
