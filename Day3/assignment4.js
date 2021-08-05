// 가장 먼 노드

class Node {
  constructor(item = null) {
    this.data = item;
    this.next = null;
    this.prev = null;
  }
}
class Queue {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.nodeCount = 0;
  }
  enqueue(item) {
    let node = new Node(item);
    let prevNode = this.tail.prev; // ... <-> prevNode <-> tail
    node.prev = prevNode; // prevNode <-> node <-> tail
    node.next = prevNode.next;
    prevNode.next = node;
    this.tail.prev = node;
    this.nodeCount += 1;
  }
  dequeue() {
    let node = this.head.next;
    this.head.next.next.prev = this.head;
    this.head.next = this.head.next.next;
    this.nodeCount -= 1;

    return node.data;
  }

  size() {
    return this.nodeCount;
  }
}

function solution(n, edge) {
  let edgeHash = {};
  let distance = new Array(n + 1).fill(Infinity);
  distance[1] = 0;
  edge.forEach(([e1, e2]) => {
    edgeHash[e1] ? edgeHash[e1].push(e2) : (edgeHash[e1] = [e2]);
    edgeHash[e2] ? edgeHash[e2].push(e1) : (edgeHash[e2] = [e1]);
  });
  let unvisited = new Queue();
  let longest = 0;
  unvisited.enqueue(1);
  while (unvisited.size() != 0) {
    let curr = unvisited.dequeue();
    edgeHash[curr].forEach((target) => {
      if (
        distance[target] > distance[curr] + 1 ||
        distance[target] == Infinity
      ) {
        distance[target] = distance[curr] + 1;
        unvisited.enqueue(target);
        longest = Math.max(longest, distance[target]);
      }
    });
  }
  return distance.filter((dist) => dist == longest).length;
}
