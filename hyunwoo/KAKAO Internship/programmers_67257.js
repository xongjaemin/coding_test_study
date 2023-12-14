const calculate = (nums, opr, rule) => {
  rule.forEach((v) => {
    while (opr.includes(v)) {
      let point = opr.indexOf(v); //연산자 위치 추출
      let [num1, num2] = [nums[point], nums[point + 1]]; //계산한 숫자 추출
      switch (v) {
        case "+":
          nums[point] = Number(num1) + Number(num2);
          break;
        case "-":
          nums[point] = Number(num1) - Number(num2);
          break;
        case "*":
          nums[point] = Number(num1) * Number(num2);
          break;
      }
      opr.splice(point, 1); //계산한 연산자 삭제
      nums.splice(point + 1, 1); //계산한 숫자 삭제 (두번째꺼만)
    }
  });
  return Math.abs(Number(nums[0])); //음수일 수 있으니 abs
};

function solution(expression) {
  let maxAnswer = 0;
  let operators = [
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["*", "+", "-"],
    ["*", "-", "+"],
  ];
  let num = expression.split(/[+\-*/]/); //숫자만 추출
  let operator = expression.match(/[+\-*]/g); // 숫자 제외하고 추출

  operators.forEach((value, index) => {
    maxAnswer = Math.max(maxAnswer, calculate([...num], [...operator], value));
  });

  return maxAnswer;
}
