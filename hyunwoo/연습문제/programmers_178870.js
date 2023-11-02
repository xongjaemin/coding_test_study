// 완전 탐색으로 푼 경우 (시간 복잡도 O(n^2)) => 시간초과
function solution(sequence, k) {
  let answer = [];
  let min_length = Infinity;
  let tmp_length = 0;

  while (min_length > tmp_length) {
    for (let i = sequence.length; i >= 0 + tmp_length; i--) {
      let tmp_sequence = [...sequence.slice(i - tmp_length - 1, i)];
      let sum = tmp_sequence.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      ); // 초기값을 0으로 지정

      if (sum == k) {
        answer = []; // 초기화
        answer.push(i - tmp_length - 1);
        answer.push(i - 1);
        min_length = tmp_length;
      }
      // sum 값이 k보다 작다면 더 이상 커질 수 없으니 break;
      else if (sum < k) {
        break;
      }
    }
    tmp_length++;
  }
  return answer;
}

// 투 포인터로 푼 경우 (시간 복잡도 O(n))
const compare = (left, right, answer) => {
  let answer_length = answer[1] - answer[0];
  let tmp_length = right - left;

  if (answer_length > tmp_length) {
    answer = [left, right];
  }
  return answer;
};

function solution(sequence, k) {
  let sequence_length = sequence.length;
  let answer = [0, sequence_length - 1];
  let left = 0; // 범위의 시작점
  let right = 0; // 범위의 마지막 지점
  let sum = sequence[0]; // 초기 sequence[0, 0]의 값

  // 투 포인터 알고리즘
  while (left <= right && right < sequence_length) {
    if (sum == k) {
      answer = compare(left, right, answer); // answer와 두 pointer를 비교
      sum -= sequence[left++]; // 다음 검색을 위해 left번째 값 빼기
    } else if (sum > k) {
      sum -= sequence[left++]; // 조건 만족을 위해 left번째 값 빼기
    } else {
      sum += sequence[++right]; //조건 만족을 위해 right + 1번째 값 더하기
    }
  }

  return answer;
}
