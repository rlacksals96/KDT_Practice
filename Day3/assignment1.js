// 올바른 괄호

function solution(s) {
  // stack 활용
  let st = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") st.push(s[i]);
    else if (st.length == 0) return false;
    else st.pop(); // "("가 짝지어져 소거
  }
  if (st.length == 0) {
    return true;
  } else {
    return false;
  } // return st.length == 0 으로 수정
}
