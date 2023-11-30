function divideArray(arr) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const firstPart = arr.slice(0, i).concat(arr.slice(i, j));
            const secondPart = arr.slice(j);
            console.log(`${JSON.stringify(firstPart)} 와 ${JSON.stringify(secondPart)}`);
        }
    }
}

// 예제 배열
const arr = [1, 2, 3, 4];

// 함수 호출
divideArray(arr);
