function solution(k, dungeons) {
  let answer = -1;
  let permutationList = [];

  // 순열 경우의 수 생성
  const permutation = (arr, n) => {
    if (n === 1) return [arr];
    let result = [];

    arr.forEach((value, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      const perms = permutation([...rest], n - 1);
      const attach = perms.map((perm) => [value, ...perm]);
      result.push(...attach);
    });
    return result;
  };

  // 던전 마다 순서를 id로 지정해서 경우의 수 목록 생성
  permutationList = permutation(
    Array.from({ length: dungeons.length }, (v, i) => i),
    dungeons.length
  );

  // 모든 던전 경우의 수에 따라 계산
  permutationList.forEach((list) => {
    let count = 0;
    let saving = k;
    list.forEach((num) => {
      const [need, use] = dungeons[num];
      if (saving >= need) {
        count++;
        saving -= use;
      }
    });
    answer = Math.max(answer, count);
  });

  return answer;
}
