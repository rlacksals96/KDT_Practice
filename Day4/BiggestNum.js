function solution(numbers) {
  numbers = numbers.map((num) => [
    String(num).repeat(4).slice(0, 4),
    String(num),
  ]);
  numbers.sort((a, b) => b[0] - a[0]);
  return numbers[0][1] == "0" ? "0" : numbers.reduce((a, b) => a + b[1], "");
}
