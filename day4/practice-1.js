function solution(numbers) {
  return numbers
    .map((v) => v + "")
    .sort((a, b) => (+(a + b) < +(b + a) ? 1 : -1))
    .join("")
    .replace(/^0+/gi, "0");
}