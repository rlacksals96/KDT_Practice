function solution(priorities, location) {
  const prioritiesEntries = Object.entries(priorities);
    
  return (function _solution(entries, count = 1) {
    const [first, ...rest] = entries;
    const [idx, currentPriority] = first;
    for (const [_, priority] of rest) {
      if (currentPriority < priority) {
        return _solution([...rest, first], count);
      }
    }
    if (Number(idx) === location) {
      return count;
    }
    return _solution(rest, count + 1);
  })(prioritiesEntries);
}