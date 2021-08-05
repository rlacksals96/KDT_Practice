// 베스트 앨범

function solution(genres, plays) {
  // 두개의 해시 1. genre : 전체 재생수(number) 2. genre : 각 노래재생수(array)
  let genreTotal = {};
  let genreEach = {};
  let answer = [];
  genres.forEach((genre, idx) => {
    genreTotal[genre]
      ? (genreTotal[genre] += plays[idx])
      : (genreTotal[genre] = plays[idx]);
    genreEach[genre]
      ? genreEach[genre].push([plays[idx], idx])
      : (genreEach[genre] = [[plays[idx], idx]]);
  });
  genreTotal = Object.entries(genreTotal).sort((a, b) => b[1] - a[1]);
  genreTotal.forEach(([genre, _]) => {
    let genrePlays = genreEach[genre];
    genrePlays.sort((a, b) => b[0] - a[0]);
    for (let i = 0; i < 2; i++) {
      if (!genrePlays[i]) break;
      else answer.push(genrePlays[i][1]);
    }
  });

  return answer;
}
