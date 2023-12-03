function solution(operations) {
  let queue = [];
  operations.forEach((value) => {
    if (value[0] == "I") queue.push(Number(value.slice(2)));
    else if (value == "D 1") queue.pop();
    else queue.shift();
    queue.sort((a, b) => a - b);
  });

  return queue.length > 0 ? [queue[queue.length - 1], queue[0]] : [0, 0];
}
