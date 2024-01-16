function solution(edges) {
  let graph = {};

  // 연결된 갯수 확인
  edges.forEach((value, i) => {
    const [send, receive] = value;

    if (!graph[send]) graph[send] = { sendCount: 1, receiveCount: 0 };
    else graph[send].sendCount++;

    if (!graph[receive]) graph[receive] = { sendCount: 0, receiveCount: 1 };
    else graph[receive].receiveCount++;
  });

  let totalGraph = 0;
  let edge = 0;
  let linear = 0;
  let eight = 0;

  for (let node in graph) {
    const { sendCount, receiveCount } = graph[node];

    // send만 있을 경우 === 생성한 정점
    if (receiveCount === 0 && sendCount >= 2) {
      totalGraph = sendCount;
      edge = node;
    }

    // send가 없을 경우 === 막대 그래프
    if (sendCount === 0) linear++;

    // send가 2개 있고, receive가 2개 이상일 경우 === 팔자 그래프
    if (sendCount === 2 && receiveCount >= 2) eight++;
  }

  // 전체 그래프 개수 - 막대, 팔자 그래프를 빼면 도넛만 남음
  let donut = totalGraph - linear - eight;

  return [parseInt(edge), donut, linear, eight];
}
