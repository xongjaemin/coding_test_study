/* 위에서 아래로 (효율성 테스트 실패)

function solution(triangle) {    
    for(let i = 1 ; i < triangle.length; i++) {
        for (let j = 0; j <triangle[i].length; j++){
            triangle[i][j] += Math.max(
                (triangle[i - 1][j - 1] != undefined) ? triangle[i - 1][j - 1] : 0, // 왼쪽
                (triangle[i - 1][j] != undefined) ? triangle[i - 1][j] : 0 // 오른쪽
            );
        };
    };
    return Math.max(...triangle[triangle.length - 1]);
}
*/

// 아래에서 위로
function solution(triangle) {
  let height = triangle.length;

  for (let i = height - 2; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }

  return triangle[0][0];
}
