const arr = [3, 2, 6, 1, 5, 4];

const bubbleSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
};

const selectionSort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }

    if (minIdx !== i) {
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }

  return arr;
};

const insertionSort = (arr) => {
  const n = arr.length;
  for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }

  return arr;
};

const mergeSort = (arr) => {
  const length = arr.length;
  if (length < 2) return arr;
  const mid = Math.floor(length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const result = [];
  let leftIdx = 0;
  let rightIdx = 0;
  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      result.push(left[leftIdx]);
      leftIdx++;
    } else {
      result.push(right[rightIdx]);
      rightIdx++;
    }
  }

  return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
};

const quickSort = (arr, left, right) => {
  if (left < right) {
    const pivot = partition(arr, left, right);

    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot + 1, right);
  }

  return arr;
};

const partition = (arr, left, right) => {
  const pivotIdx = Math.floor((left + right) / 2);
  const pivotValue = arr[pivotIdx];

  //피벗값을 오른쪽 끝으로 이동
  [arr[pivotIdx], arr[right]] = [arr[right], arr[pivotIdx]];
  let saveIdx = left;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      [arr[saveIdx], arr[i]] = [arr[i], arr[saveIdx]];
      saveIdx++;
    }
  }
  [arr[saveIdx], arr[right]] = [arr[right], arr[saveIdx]];

  return saveIdx;
};

// console.log(bubbleSort(arr));
// console.log(mergeSort(arr));
console.log(quickSort(arr, 0, arr.length - 1));
