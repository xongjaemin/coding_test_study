function transferMinutes(time) {
    const [hour, min] = time.split(":").map(Number)

    return hour * 60 + min
}

function solution(plans) {
    // 대기중인 과제를 담을 배열입니다.
    const waitAssign = []

    // 과제 배열을 분 단위로 변환하고 시작 시간 기준으로 내림차순 정렬합니다.
    const sortedPlans = plans
        .map(([assignment, startTime, runningTime]) => [assignment, transferMinutes(startTime), Number(runningTime)])
        .sort((a, b) => b[1] - a[1])


    while(sortedPlans.length) {
        // 현재 과제 정보를 가져옵니다.
        const [assignment, startTime, runningTime] = sortedPlans.pop()

        // 현재 진행 가능한 과제를 검사합니다.
        waitAssign.forEach((wait, idx) => {
            // 현재 시작 시간보다 나중에 시작되는 과제는 실행 시간만큼 지연됩니다.
            if(startTime < wait[1]) waitAssign[idx][1] += runningTime
        })

        // 과제를 대기 중인 과제에 추가합니다.
        waitAssign.push([assignment, startTime + runningTime])
    }

    // 대기 중인 과제를 완료 시간 기준으로 정렬하고, 과제 이름만 추출하여 반환합니다.
    return waitAssign.sort((a, b) => a[1] - b[1]).map(a => a[0])
}

// Test cases
console.log(solution([["korean", "11:40", "30"], ["english", "12:10", "20"], ["math", "12:30", "40"]]));
console.log(solution([["science", "12:40", "50"], ["music", "12:20", "40"], ["history", "14:00", "30"], ["computer", "12:30", "100"]]));
console.log(solution([["aaa", "12:00", "20"], ["bbb", "12:10", "30"], ["ccc", "12:40", "10"]]));
