// function solution(files) {
//   let fileList = files.map((value) => [value]);

//   files.forEach((name, index) => {
//     let count = 0;
//     let numRange = false;
//     let start = 0;

//     for (let i = 0; i < name.length; i++) {
//       let asciiCode = [...name][i].charCodeAt();
//       // 문자가 0 ~ 9 일때
//       if (47 < asciiCode && asciiCode < 58) {
//         count++;
//         if (numRange == false) {
//           numRange = true;
//           start = i;
//         }
//       } else if (numRange == true) {
//         fileList[index].push([...name].slice(0, start).join(""));
//         fileList[index].push(
//           Number([...name].slice(start, start + count).join(""))
//         );
//         break;
//       }
//     }
//   });

//   fileList.sort((a, b) => {
//     if (a[1].toUpperCase() === b[1].toUpperCase()) return a[2] - b[2];
//     else return a[1].toUpperCase().localeCompare(b[1].toUpperCase());
//   });

//   return fileList.map((value) => value[0]);
// }

function solution(files) {
  let fileList = files.map((value) => {
    const match = value.match(/(\D+)(\d+)/i);
    const head = match[1];
    const num = Number(match[2]);

    return [value, head, num];
  });

  fileList.sort((a, b) => {
    const aUpper = a[1].toUpperCase();
    const bUpper = b[1].toUpperCase();

    if (aUpper === bUpper) {
      return a[2] - b[2];
    } else {
      return aUpper.localeCompare(bUpper);
    }
  });

  return fileList.map((value) => value[0]);
}

const files = [
  "img12.png",
  "img10.png",
  "img02.png",
  "img1.png",
  "IMG01.GIF",
  "img2.JPG",
];

console.log(solution(files));
