function solution(n, edge) {
  const matrix = edge.reduce(
    (matrix, [start, end]) => {
      matrix[start].push(end);
      matrix[end].push(start);
      return matrix;
    },
    Array.from({ length: n + 1 }, () => [])
  );

  const distances = [0, 1];
  let queue = [1];

  while (queue.length) {
    const [start, ...rest] = queue;
    for (const end of matrix[start]) {
      if (!distances[end]) {
        rest.push(end);
        distances[end] = (distances[start] || 0) + 1;
      }
    }
    queue = [...rest];
  }

  const maxValue = Math.max(...distances);
  return distances.filter((value) => value === maxValue)
    .length;
}