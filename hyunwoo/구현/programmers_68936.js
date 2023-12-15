function solution(arr) {
  let length = arr.length;
  let one = 0;
  let zero = 0;

  const quarter = (array, len) => {
    let bias1_2 = array.slice(0, len / 2);
    let bias3_4 = array.slice(len / 2, len);
    let bias1 = [];
    let bias2 = [];
    let bias3 = [];
    let bias4 = [];

    bias1_2.forEach((v, i) => {
      bias1.push(v.slice(0, len / 2));
      bias2.push(v.slice(len / 2, len));
    });
    bias3_4.forEach((v, i) => {
      bias3.push(v.slice(0, len / 2));
      bias4.push(v.slice(len / 2, len));
    });

    if (bias1.flat().includes(0) && bias1.flat().includes(1))
      quarter(bias1, len / 2);
    else if (bias1.flat().includes(0)) zero++;
    else one++;

    if (bias2.flat().includes(0) && bias2.flat().includes(1))
      quarter(bias2, len / 2);
    else if (bias2.flat().includes(0)) zero++;
    else one++;

    if (bias3.flat().includes(0) && bias3.flat().includes(1))
      quarter(bias3, len / 2);
    else if (bias3.flat().includes(0)) zero++;
    else one++;

    if (bias4.flat().includes(0) && bias4.flat().includes(1))
      quarter(bias4, len / 2);
    else if (bias4.flat().includes(0)) zero++;
    else one++;
  };

  if (arr.flat().includes(0) && arr.flat().includes(1)) quarter(arr, length);
  else if (arr.flat().includes(0)) zero++;
  else one++;

  return [zero, one];
}
