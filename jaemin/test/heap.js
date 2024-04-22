class MinHeap {
  constructor() {
    this.heap = [];
  }

  peak = () => {
    this.heap.shift();
  };

  insert = (value) => {
    this.heap.push(value);
    let idx = this.heap.length - 1;
    while (idx > 0) {
      let element = this.heap[idx];
      let parentIdx = Math.floor((idx - 1) / 2);

      if (this.heap[parentIdx] > element) {
        [this.heap[parentIdx], this.heap[idx]] = [
          this.heap[idx],
          this.heap[parentIdx],
        ];
        idx = parentIdx;
      } else break;
    }
  };

  remove = () => {
    [this.heap[0], this.heap[this.heap.length - 1]] = [
      this.heap[this.heap.length - 1],
      this.heap[0],
    ];

    this.heap.pop();

    let idx = 0;
    const length = this.heap.length;
    const element = this.heap[idx];

    while (true) {
      let leftChildIdx = idx * 2 + 1;
      let rightChildIdx = idx * 2 + 2;
      let swap = null;
      if (leftChildIdx < length) {
        if (this.heap[leftChildIdx] < element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        if (
          this.heap[rightChildIdx] < element &&
          this.heap[rightChildIdx] < this.heap[leftChildIdx]
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      [this.heap[idx], this.heap[swap]] = [this.heap[swap], this.heap[idx]];
      idx = swap;
    }
  };
}

const heap = new MinHeap();
heap.insert(3);
heap.insert(6);
heap.insert(1);
heap.insert(2);
heap.insert(4);
heap.insert(5);

console.log(heap.heap);
heap.remove();
console.log(heap.heap);
