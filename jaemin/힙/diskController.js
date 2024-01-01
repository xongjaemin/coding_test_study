//프로그래머스 디스크컨트롤러
function pushMinHeap(heap, value) {
  heap.push(value);
  let currentIndex = heap.length - 1;

  while (
    currentIndex > 0 &&
    heap[currentIndex][1] < heap[Math.floor((currentIndex - 1) / 2)][1]
  ) {
    //currentIndex 값이 부모보다 작으면 swap
    [heap[currentIndex], heap[Math.floor((currentIndex - 1) / 2)]] = [
      heap[Math.floor((currentIndex - 1) / 2)],
      heap[currentIndex],
    ];
    currentIndex = Math.floor((currentIndex - 1) / 2);
  }
}

function popMinHeap(heap) {
  if (heap.length === 0) return null;
  if (heap.length === 1) return heap.pop();

  //root 값 제거
  const minValue = heap[0];
  //가장 끝 leaf를 root로 이동
  heap[0] = heap.pop();
  let currentIndex = 0;

  while (currentIndex * 2 + 1 < heap.length) {
    //L, R 자식 노드 중 작은 값 찾기
    let minChildIndex =
      currentIndex * 2 + 2 < heap.length &&
      heap[currentIndex * 2 + 2][1] < heap[currentIndex * 2 + 1][1]
        ? currentIndex * 2 + 2
        : currentIndex * 2 + 1;

    if (heap[currentIndex][1] < heap[minChildIndex][1]) {
      break;
    }

    [heap[currentIndex], heap[minChildIndex]] = [
      heap[minChildIndex],
      heap[currentIndex],
    ];
    currentIndex = minChildIndex;
  }

  return minValue;
}

function solution(jobs) {
  var answer = 0;
  const taskNum = jobs.length;
  //시작 시간 오름차순으로 남은 task 정렬
  jobs.sort((a, b) => a[0] - b[0]);
  let time = 0; //현재 시간
  let complete = 0;
  let totalTime = 0; //전체 걸린 시간
  const minHeap = [];
  while (jobs.length > 0 || minHeap.length > 0) {
    while (jobs.length > 0) {
      if (jobs[0][0] === time) {
        pushMinHeap(minHeap, jobs.shift());
      } else break;
    }

    if (minHeap.length > 0 && time >= complete) {
      const task = popMinHeap(minHeap);
      complete = task[1] + time;
      totalTime += complete - task[0];
    }

    time += 1;
  }

  answer = Math.floor(totalTime / taskNum);
  return answer;
}

const init = () => {
  console.log(
    solution([
      [0, 3],
      [1, 9],
      [2, 6],
    ])
  );
};

init();
