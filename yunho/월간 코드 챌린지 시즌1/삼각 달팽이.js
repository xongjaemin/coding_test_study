function solution(n){
    let answer = [];
    let triangle = [];
    for(let i = 0; i < n; i ++){
        triangle.push(Array(i+1).fill(-1));
    }
    const directions = [
        [1, 0],
        [0, 1],
        [-1, -1],
    ]
    let row = -1;
    let col = 0;
    let count = 1;
    let currentDirectIndex = 0;

    for(let i = n; i > 0; i -= 1){
        const [dRow, dCol] = directions[currentDirectIndex];

        for(let j = 0; j < i; j ++){
            row += dRow;
            col += dCol;

            triangle[row][col] = count;
            count += 1;
        }

        currentDirectIndex = (currentDirectIndex + 1) % 3;
    }

    for(let i = 0; i < n; i ++){
        for(let j = 0; j < i + 1; j ++){
            answer.push(triangle[i][j]);
        }
    }


    return triangle;


}
console.log(solution(4));