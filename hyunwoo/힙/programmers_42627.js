// Heap으로 풀이 (실패)
const minHeap = () => {
  let heap = [null];

  const getMin = () => (heap[1] ? heap[1] : null);

  const size = () => heap.length - 1;

  const push = (value) => {
    heap.push(value);
    let cur = heap.length - 1; // 현재 노드의 인덱스
    let parent = cur >> 1; // 현재 추가된 노드의 부모 노드 인덱스 Math.floor(cur / 2);
    // 부모 노드가 존재하고, 부모 노드의 값이 추가된 노드의 값보다 크면
    while (parent > 0) {
      if (heap[parent][1] > heap[cur][1]) {
        // 부모 노드와 추가된 노드 위치 변경
        [heap[parent], heap[cur]] = [heap[cur], heap[parent]];
        cur = parent;
        parent = cur >> 1;
      } else {
        break;
      }
    }
  };

  const pop = () => {
    if (size() <= 1) {
      // 노드가 1개 이하면 null 반환
      heap = [null];
      return;
    }
    heap[1] = heap.pop(); // 마지막 노드를 루트 노드로 변경

    let cur = 1; // 현재 노드 인덱스};
    let left = cur * 2; // 현재 노드의 왼쪽 자식 노드 인덱스
    let right = cur * 2 + 1; // 현재 노드의 오른쪽 자식 노드 인덱스
    let leftValue = heap[left] === undefined ? null : heap[left][1]; // 현재 노드의 왼쪽 자식 노드 값, 없으면 null
    let rightValue = heap[right] === undefined ? null : heap[right][1]; // 현재 노드의 오른쪽 자식 노드 값, 없으면 null

    while (heap[cur] > leftValue || heap[cur] > rightValue) {
      // 왼쪽 자식 노드가 존재하고, 현재 노드의 값이 왼쪽 자식 노드의 값보다 크면
      if (left !== null && heap[cur] > heap[left]) {
        // 왼쪽 자식 노드와 현재 노드 위치 변경
        [heap[cur], heap[left]] = [heap[left], heap[cur]];
        cur = left;
      }

      // 오른쪽 자식 노드가 존재하고, 현재 노드의 값이 오른쪽 자식 노드의 값보다 크면
      if (right !== null && heap[cur] > heap[right]) {
        // 오른쪽 자식 노드와 현재 노드 위치 변경
        [heap[cur], heap[right]] = [heap[right], heap[cur]];
        cur = right;
      }

      left = cur * 2;
      right = cur * 2 + 1;

      if (heap[left] === undefined) left = null;
      if (heap[right] === undefined) right = null;
    }
  };
  const viewHeap = () => heap;
  return {
    getMin,
    size,
    push,
    pop,
    viewHeap,
  };
};

function solution(jobs) {
  let memoryCount = jobs.length; //전체 메모리 개수
  let time = 0; //현재 시간
  let runningTime = 0; //누적 실행 시간
  let canJobs = minHeap(); // minHeap 함수 호출하여 반환된 객체 할당
  jobs = jobs.sort((a, b) => a[0] - b[0]); //도착 순서대로 정렬
  console.log(jobs, "\n");
  while (jobs.length != 0 || canJobs.size() != 0) {
    // 현재 시간이 메모리가 도착한 시간보다 지나거나 같을 때 canJobs에 추가
    while (jobs.length != 0 && jobs[0][0] <= time) {
      canJobs.push(jobs.shift());
      console.log(canJobs.viewHeap());
    }

    if (canJobs.size() > 0) {
      const [req, during] = canJobs.getMin();
      canJobs.pop();
      console.log(
        "현재 시간:",
        time,
        "\t도착 시간:",
        req,
        "\t기다린 시간: ",
        time - req,
        "\t디스크 실행:",
        during,
        " \t대기+실행:",
        during + time - req,
        " \t실행 후 시간:",
        time + during,
        "\n"
      );
      time += during;
      runningTime += time - req;
    } else {
      time = jobs[0][0];
    }
  }

  return Math.floor(runningTime / memoryCount);
}

// Heap 사용 안하고 풀이 (성공))
function solution(jobs) {
  let memoryCount = jobs.length; //전체 메모리 개수
  let time = 0; //현재 시간
  let runningTime = 0; //누적 실행 시간
  let canJobs = []; // 실행 가능한 작업
  jobs = jobs.sort((a, b) => a[0] - b[0]); //도착 순서대로 정렬

  while (jobs.length || canJobs.length) {
    while (jobs.length && jobs[0][0] <= time) {
      canJobs.push(jobs.shift());
    }

    if (canJobs.length) {
      canJobs.sort((a, b) => a[1] - b[1]);
      const [req, during] = canJobs.shift();
      time += during;
      runningTime += time - req;
    } else {
      time = jobs[0][0];
    }
  }

  return Math.floor(runningTime / memoryCount);
}

const testCase2 = [
  [0, 1],
  [1, 1],
  [50, 7],
]; // 3
const testCase3 = [
  [0, 3],
  [10, 1],
]; // 2
const testCase4 = [
  [0, 10],
  [4, 10],
  [5, 11],
  [15, 2],
]; // 15
const testCase5 = [
  [0, 5],
  [1, 2],
  [5, 5],
]; // 6
const testCase6 = [
  [0, 2],
  [0, 1],
  [0, 5],
]; // 5

console.log(solution(testCase4));
