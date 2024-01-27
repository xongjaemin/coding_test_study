//프로그래머스 이중우선큐

/* 힙 사용 안 하는 풀이 */
// function solution(operations) {
//   var answer = [0, 0];
//   const queue = [];

//   operations.map((operation, i) => {
//     if (operation[0] === "I") {
//       queue.push(Number(operation.substring(2)));
//       queue.sort((a, b) => a - b);
//     } else if (operation === "D 1") {
//       queue.pop();
//     } else if (operation === "D -1") {
//       queue.shift();
//     }
//   });

//   if (queue.length !== 0) {
//     answer = [queue[queue.length - 1], queue[0]];
//   }

//   return answer;
// }

/*힙 사용 풀이*/
function pushMinHeap(heap, value) {
  heap.push(value);
  let currentIndex = heap.length - 1;

  while (
    currentIndex > 0 &&
    heap[currentIndex] < heap[Math.floor((currentIndex - 1) / 2)]
  ) {
    [heap[currentIndex], heap[Math.floor(currentIndex - 1)]] = [
      heap[Math.floor(currentIndex - 1)],
      heap[currentIndex],
    ];

    currentIndex = Math.floor((currentIndex - 1) / 2);
  }
}

function popHeap(heap, isMin) {
  if (heap.length === 0) return null;
  if (heap.length === 1) return heap.pop();

  if (isMin) {
    //최소값 삭제
    const minValue = heap[0];
    heap[0] = heap.pop(0);
    let currentIndex = 0;

    while (currentIndex * 2 + 1 < heap.length) {
      let minChildIndex =
        currentIndex * 2 + 2 < heap.length &&
        heap[currentIndex * 2 + 2] < heap[currentIndex * 2 + 1]
          ? currentIndex * 2 + 2
          : currentIndex * 2 + 1;

      if (heap[currentIndex] < heap[minChildIndex]) break;

      [heap[currentIndex], heap[minChildIndex]] = [
        heap[minChildIndex],
        heap[currentIndex],
      ];
      currentIndex = minChildIndex;
    }

    return minValue;
  } else {
    //최대값 삭제
    const parentIndex = Math.floor((heap.length - 1) / 2);
    const leaf = heap.slice(parentIndex + 1);
    const max = Math.max(...leaf);
    [heap[parentIndex + 1 + leaf.indexOf(max)], heap[heap.length - 1]] = [
      heap[heap.length - 1],
      heap[parentIndex + 1 + leaf.indexOf(max)],
    ];

    return heap.pop();
  }
}

function solution(operations) {
  var answer = [0, 0];
  const heap = [];

  operations.forEach((operation, i) => {
    if (operation[0] === "I") {
      pushMinHeap(heap, Number(operation.substring(2)));
    } else if (operation === "D 1") {
      // 최대값 삭제
      popHeap(heap, false);
    } else if (operation === "D -1") {
      // 최소값 삭제
      popHeap(heap, true);
    }
  });

  if (heap.length !== 0) {
    answer = [Math.max(...heap), Math.min(...heap)];
  }

  return answer;
}

const init = () => {
  solution([
    "I -45",
    "I 653",
    "D 1",
    "I -642",
    "I 45",
    "I 97",
    "D 1",
    "D -1",
    "I 333",
  ]);
};

init();
