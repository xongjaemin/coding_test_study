// 참조 https://velog.io/@wkahd01/폴로이드-워셜-알고리즘-with-JS
function floyd(chart){
    for (let mid = 0; mid < chart.length; mid++) {
        for (let start = 0; start < chart.length; start++) {
            for (let end = 0; end < chart.length; end++) {
                chart[start][end] = Math.min(chart[start][end], chart[start][mid] + chart[mid][end])
            }
        }
    }
    return chart;
}
const chart = [
    [0, 6, Infinity, Infinity, Infinity],
    [2, 0, 4, 5, Infinity],
    [Infinity, Infinity, 0, Infinity, 5],
    [2, 1, Infinity, 0, Infinity],
    [Infinity, 8, 5, Infinity, 0]
]
console.log(floyd(chart));