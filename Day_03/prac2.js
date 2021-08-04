function solution(priorities, location) {
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
    }
    const queue = new Queue();
    for (let i = 0; i < priorities.length; i++) {
        queue.enqueue([priorities[i], i]);
    }
    priorities.sort((a, b) => b - a);
    let printed = 0;
    while(true) {
        let tmp = queue.peek();
        if (tmp[0] >= priorities[printed]) {
            if (tmp[1] === location) {
                printed++;
                return printed;
            }
            else {
                printed++;
                queue.dequeue();
            }
        } 
        else {
            queue.enqueue(queue.dequeue());
        }
    }
}