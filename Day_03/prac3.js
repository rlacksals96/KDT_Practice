function solution(genres, plays) {
    let answer = [];
    const table = new Map();
    for (let i = 0; i < genres.length; i++) {
        if (table.get(genres[i])===undefined) {
            table.set(genres[i], [[i, plays[i]]]);
        }
        else {
            table.get(genres[i]).push([i, plays[i]]);
        }
    }
    genres = table.keys();
    let value = table.values();
    let playSum = [];
    for (let t of table) {
        let tmpSum = 0;
        [...t[1]].forEach(song => tmpSum += song[1]);
        playSum.push([t[0], tmpSum]);
    }
    playSum.sort((a, b) => b[1] - a[1]);
    for (let u of playSum) {
        let cur = table.get(u[0]);
        cur.sort((a, b) => {
            if (b[1] == a[1]) return a[0] - b[0];
            else return b[1] - a[1];
        });
        if (cur.length == 1) {
          for (let i = 0; i < cur.length; i++) {
            answer.push(cur[i][0]);
          }
        }  
        else {
            for (let i = 0; i < 2; i++) {
                answer.push(cur[i][0]);
            }
        }
    }
    return answer;
}