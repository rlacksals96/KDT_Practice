const merge = (keys, values) => {
  return keys
    .map((key, idx) => [key, values[idx], idx])
    .reduce(
      (merged, [key, value, idx]) => ({
        ...merged,
        ...{
          [key]: {
            count: (merged[key] && merged[key].count || 0) + value,
            list: [
              ...(merged[key] && merged[key].list || []),
              [value, idx],
            ],
          },
        },
      }),
      {}
    );
};

function solution(genres, plays) {
  return Object.values(merge(genres, plays))
    .sort((a, b) => b.count - a.count)
    .flatMap((genre) => {
      return genre.list
        .sort(([aCount], [bCount]) => bCount - aCount)
        .slice(0, 2)
        .map(([_, idx]) => idx);
    });
}