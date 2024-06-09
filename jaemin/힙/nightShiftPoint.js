//프로그래머스 야근지수
class MaxHeap {
  constructor() {
    this.heap = [];
  }

  peak = () => {
    return this.heap[0];
  };

  insert = (val) => {
    this.heap.push(val);
    let idx = this.heap.length - 1;
    let parent = 0;

    while (idx > 0) {
      parent = Math.floor((idx - 1) / 2);
      if (parent >= 0) {
        if (this.heap[parent] < this.heap[idx]) {
          [this.heap[parent], this.heap[idx]] = [
            this.heap[idx],
            this.heap[parent],
          ];

          idx = parent;
        } else break;
      }
    }
  };

  pop = () => {
    const val = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();

    let idx = 0;
    let left = 0;
    let right = 0;
    while (idx < this.heap.length) {
      let swap = null;
      left = idx * 2 + 1;
      right = idx * 2 + 2;

      if (left < this.heap.length) {
        if (this.heap[left] > this.heap[idx]) {
          swap = left;
        }
      }
      if (right < this.heap.length) {
        if (
          this.heap[right] > this.heap[idx] &&
          this.heap[right] > this.heap[left]
        ) {
          swap = right;
        }
      }
      if (swap === null) break;

      [this.heap[idx], this.heap[swap]] = [this.heap[swap], this.heap[idx]];
      idx = swap;
    }

    return val;
  };
}

function solution(n, works) {
  var answer = 0;
  let count = 0;
  const heap = new MaxHeap();

  works.forEach((work, i) => {
    heap.insert(work);
  });

  while (count < n) {
    const max = heap.pop();
    if (max > 0) {
      heap.insert(max - 1);
    }

    count++;
  }

  heap.heap.forEach((work, i) => (answer += work * work));

  return answer;
}

console.log(solution(4, [3, 4, 3]));
