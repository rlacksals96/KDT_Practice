function solution(n, edge) {
    let INF = 9999999;
     class Queue {
        constructor() {
            this.queue = [];
            this.front = 0;
            this.rear = 0;
        }
        enqueue(value) {
            this.queue[this.rear++] = value;
        }
        dequeue() {
            const value = this.queue[this.front];
            delete this.queue[this.front];
            this.front += 1;
            return value;
        }
        peek() {
            return this.queue[this.front];
        }
        size() {
            return this.rear - this.front;
        }
    }
    const edges = Array.from(
        Array(n),
        () => []
    );
    for (let e of edge) {
        edges[e[0]-1].push(e[1]-1);
        edges[e[1]-1].push(e[0]-1);
    }
    const dist = new Array(n).fill(INF); // 거리 배열
    dist[0] = 0;
    const queue = new Queue();
    queue.enqueue([0, 1]);
    while (queue.size() != 0) {
        let cur = queue.dequeue();
        let curDist = cur[1];
        for (let e of edges[cur[0]]) {
            if (curDist < dist[e]) {
                dist[e] = curDist;
                queue.enqueue([e, curDist+1]);
            }
        }
    }
    dist.sort((a, b) => b - a);
    let max = 0;
    let maxNums = 0;
    for (let i = 0; i < n; i++) {
        if (dist[i] >= max) {
            max = dist[i];
            maxNums++;
        }
    }
    return maxNums;
}