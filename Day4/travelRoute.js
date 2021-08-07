function solution(tickets) {
  /*
    st을 활용한 DFS를 통해 구현하였습니다.
    1. direction이라는 HashMap을 생성하여 키(출발지):[...도착지]의 형태로 그래프를 구현했습니다.
    2. 도착지가 여러개일때, 알파벳이 먼저오는순으로 이동하기때문에, direction[키]의 배열을 내림차순으로 정렬합니다.
    3. st을 ["ICN"] 로 초기화후, st배열이 빌때까지 다음과 같은 조건으로 반복문을 수행합니다.
    3.1 st의 마지막요소를 peek하여 curr변수에 담습니다.
    3.2 curr을 출발지로 하는 여행티켓이 없으면(남아있지않거나)이를 route배열에 담고, st을 pop합니다.
    3.3 여행티켓이 있다면, 도착지를 direction[curr] 배열에서 pop하여 st에 쌓습니다.
    4. route배열을 역순으로 출력합니다.(첫번째 요소가 도착지이다.)
    */
  let direction = {};
  let route = [];
  tickets.forEach((ticket) => {
    direction[ticket[0]] = direction[ticket[0]]
      ? [...direction[ticket[0]], ticket[1]]
      : [ticket[1]];
  });
  for (const start in direction) {
    direction[start].sort().reverse();
  }
  let st = ["ICN"];
  while (st.length) {
    let curr = st[st.length - 1];
    if (!direction[curr] || !direction[curr].length) {
      route.push(curr);
      st.pop();
    } else st.push(direction[curr].pop());
  }

  return route.reverse();
}
