const changing = (arr, dict, value) => {
  let past_ranks = dict[value]; // calling player 순위 ex) 3
  let new_ranks = past_ranks - 1; // 변경될 player 순위 ex) 2
  let temp_player = arr[new_ranks]; // 변경될 plyaer 이름 ex) 2등의 이름

  dict[temp_player] = past_ranks;
  dict[value] = new_ranks;

  // 구조분해 배열 swap
  [arr[new_ranks], arr[past_ranks]] = [arr[past_ranks], arr[new_ranks]];

  return [arr, dict];
};

function solution(players, callings) {
  let ranks = {};
  let answer = [];

  players.forEach((value, index) => {
    ranks[value] = index;
  });

  callings.forEach((value) => {
    [players, ranks] = changing(players, ranks, value);
  });

  return players;
}
