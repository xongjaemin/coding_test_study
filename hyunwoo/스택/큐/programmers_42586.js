function solution(progresses, speeds) {
  let answer = [];
  let totalDays = 0;
  let release = 1;
  progresses.forEach((value, index) => {
    if (index == 0)
      // 첫 기능이 완성까지 걸리는 기간
      totalDays = Math.ceil((100 - value) / speeds[index]);
    else {
      // 해당 기능 완성 기간과 지금까지 걸린 기간 비교
      let days = Math.ceil((100 - value) / speeds[index]);
      // 만약 지금까지 걸린 기간이 크거나 같다면 이미 완성되었기에 배포 가능
      if (totalDays >= days) {
        release++;
      }
      // 그렇지 않다면, 이전까지 기능을 배포하고, 이번 기능 배포 날짜로 totalDays 변경
      else {
        answer.push(release);
        release = 1;
        totalDays = days;
      }
    }
    // 마지막 index라면 바로 배포
    if (index == progresses.length - 1) answer.push(release);
  });
  return answer;
}
