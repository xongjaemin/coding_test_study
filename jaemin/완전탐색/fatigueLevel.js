//프로그래머스 피로도
function solution(k, dungeons) {
  var answer = -1;

  const dfs = (fatigue, count, visited) => {
    if (count > answer) answer = count;
    if (count === dungeons.length) {
      return;
    }

    for (let i = 0; i < dungeons.length; i++) {
      if (dungeons[i][0] <= fatigue && visited[i] === false) {
        visited[i] = true;
        dfs(fatigue - dungeons[i][1], count + 1, visited);
        visited[i] = false;
      }
    }
  };

  const visited = new Array(dungeons.length).fill(false);

  dfs(k, 0, visited);

  return answer;
}

const init = () => {
  console.log(
    solution(80, [
      [80, 20],
      [50, 40],
      [30, 10],
    ])
  );
};

init();
