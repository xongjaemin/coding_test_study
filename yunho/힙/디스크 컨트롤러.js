function solution(jobs) {
    let answer = 0;
    let currentTime = 0;
    const requestList = [];
    const totalJobs = jobs.length;

    jobs.sort((a, b) => a[0] - b[0]);

    while (jobs.length > 0 || requestList.length > 0) {
        while (jobs.length > 0 && jobs[0][0] <= currentTime) {
            requestList.push(jobs.shift());
        }

        if (requestList.length > 0) {
            requestList.sort((a, b) => a[1] - b[1]);
            const [requestTime, cost] = requestList.shift();
            currentTime += cost;
            answer += currentTime - requestTime;
        }
        // 작업할 내용은 남아있고, 요청 받은 리스트에는 작업이 없을 때, 현재 시간보다 더 뒤에 요청되는 작업을 가져오기 위해 currentTime을 뒤로 미룬다.
        else {
            currentTime = jobs[0][0];
        }
    }

    return Math.floor(answer / totalJobs);
}

console.log(solution([[0, 3], [1, 9], [2, 6]])); // should return 9