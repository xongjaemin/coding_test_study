//프로그래머스 더 맵게
function pushMinHeap(heap, value) {
  heap.push(value);
  let currentIndex = heap.length - 1;

  while (
    currentIndex > 0 &&
    heap[currentIndex] < heap[(currentIndex - 1) / 2]
  ) {
    //currentIndex 값이 부모보다 작으면 swap
    [heap[currentIndex], heap[(currentIndex - 1) / 2]] = [
      heap[(currentIndex - 1) / 2],
      heap[currentIndex],
    ];
    currentIndex = (currentIndex - 1) / 2;
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
      heap[currentIndex * 2 + 2] < heap[currentIndex * 2 + 1]
        ? currentIndex * 2 + 2
        : currentIndex * 2 + 1;

    if (heap[currentIndex] < heap[minChildIndex]) {
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

function peekMinHeap(heap) {
  return heap[0];
}

function solution(scoville, K) {
  const minHeap = [];

  for (const sco of scoville) {
    pushMinHeap(minHeap, sco);
  }

  let mixedCount = 0;

  while (minHeap.length >= 2 && peekMinHeap(minHeap) < K) {
    const first = popMinHeap(minHeap);
    const second = popMinHeap(minHeap);
    const mixedScov = first + second * 2;
    pushMinHeap(minHeap, mixedScov);
    mixedCount++;
  }

  return peekMinHeap(minHeap) >= K ? mixedCount : -1;
}

const init = () => {
  console.log(solution([1, 2, 3, 9, 10, 12], 7));
};
init();
