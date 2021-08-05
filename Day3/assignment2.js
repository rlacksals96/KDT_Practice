// 프린터

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
}

function solution(priorities, location) {
  let queue = new Queue();
  let count = 0;

  priorities.forEach((priority, idx) => queue.enqueue([priority, idx])); // queue에 [중요도,인덱스]로 enqueue
  priorities.sort((a, b) => a - b); // ( 끝Index 요소가 중요도 가장 높음)

  while (true) {
    let curr = queue.dequeue();
    if (curr[0] >= priorities[priorities.length - 1]) {
      count++;
      if (location == curr[1]) break;
      else priorities.pop();
    } else queue.enqueue(curr);
  }

  return count;
}
