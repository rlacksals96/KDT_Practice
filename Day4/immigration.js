function solution(n, times) {
  /*
    이진탐색을 활용합니다. left를 검사의 최소시간 1, right를 최대검사시간*n으로 설정합니다.
    left와 right 교차할때까지, 다음과같은 조건을 수행합니다.
    1. mid = (left+right)//2로 설정
    2. 해당 시간동안 각 검사관이 검사가능한 갯수를 구하고, 이를 총합합니다. (해당시간동안 검사가능한 인원)
    3. 목표로 하는 n보다 크다면,  좌구역을 다시 이진탐색합니다. ->|left-----|mid|-----right|
    3. 목표로 하는 n보다 작다면,  우구역을 다시 이진탐색합니다. |left-----|mid|-----right| <-
    4. left와 right가 교차한순간, 총합이 n보다 크거나 같다면 그떄의 mid값을,
                                 총합이 n보다 작다면 mid+1값을 반환합니다. (즉,left를 반환)
    */
  times.sort((a, b) => a - b);
  let left = 1;
  let right = times[times.length - 1] * n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    let sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);
    if (sum >= n) right = mid - 1;
    else left = mid + 1;
  }

  return left;
}
