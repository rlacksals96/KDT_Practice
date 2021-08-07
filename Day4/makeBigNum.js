function solution(number, k) {
  /*
    높은자리의 수가 클수록 큰숫자가 된다는점을 활용했습니다.
    숫자를 뒷자리부터(높은자리) 순회하며, 다음과 같은 조건으로 st에 쌓습니다.
    1. st의 마지막 요소보다 숫자가 작다면, 그대로 st에 쌓습니다.
    2. st의 마지막 요소보다 숫자가 작다면, 보다 큰 숫자가 나올때까지 st을 pop합니다.
    (이때, pop한만큼 count++, count=k가 된다면 더이상 작더라도 pop하지 않습니다)
    3. 순회를 마친후에 아직 count < k 라면, count =k가 될때까지 st에서 pop합니다.
    4. st.join("")을 통해 문자열의 형태로 반환.
    */

  const numberList = number.split("");
  const st = [];
  let count = 0; // 제거한 갯수
  numberList.forEach((number) => {
    if (!st.length) st.push(number);
    // 첫번째 숫자
    else {
      let curr = number;
      if (curr > st[st.length - 1]) {
        while (count < k && curr > st[st.length - 1]) {
          st.pop();
          count++;
        }
      }
      st.push(curr);
    }
  });
  while (count < k) {
    st.pop();
    count++;
  }

  return st.join("");
}
