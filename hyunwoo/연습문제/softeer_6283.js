const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  outpu: process.stdout,
});

const type = (arr) => {
  let future = 0;
  let answer = "";

  arr.forEach((value, index) => {
    if (index == 0) {
      if (value == 1) {
        answer = "ascending";
        future = 2;
      } else if (value == 8) {
        answer = "descending";
        future = 7;
      } else {
        answer = "mixed";
        return false;
      }
    } else if (future == value) {
      if (answer == "ascending") future++;
      else future--;
    } else {
      answer = "mixed";
      return false;
    }
  });

  return answer;
};

rl.on("line", (line) => {
  let arr = line.split(" ");
  console.log(type(arr));
});
