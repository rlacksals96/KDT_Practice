function solution(n, times) {
  const sortedTimes = [...times].sort((a, b) => a - b);

  return (function _solution(
    sortedTimes,
    n,
    left = 0,
    right = sortedTimes[sortedTimes.length - 1] * n,
    mid = Math.floor((left + right) / 2)
  ) {
    if (left > right) {
      return left;
    }
    const possible = sortedTimes.reduce(
      (possible, time) => {
        return possible + Math.floor(mid / time);
      },
      0
    );
    return _solution(
      sortedTimes,
      n,
      possible < n ? mid + 1 : left,
      possible >= n ? mid - 1 : right
    );
  })(sortedTimes, n);
}