class Queue{
    constructor(){
        this.queue=[];
        this.front=0;
        this.rear=0;
    }
    enqueue(value){
        this.queue[this.rear++]=value;
    }
    dequeue(){
        const value=this.queue[this.front];
        delete this.queue[this.front];
        this.front++;
        return value;
    }
    peek(){
        return this.queue[this.front];
    }
    size(){
        return this.rear-this.front;
    }
}

function search(edges,dist){
    let queue=new Queue();
    queue.enqueue([0,1]);//#0(node 1), dist:1
    while(queue.size()>0){
        let tmp=queue.dequeue();
        let currentDistance=tmp[1];
        for(let edge of edges[tmp[0]]){
            if(currentDistance<dist[edge]){
                dist[edge]=currentDistance;
                queue.enqueue([edge,currentDistance+1]);
            }
        }
    }
    
}
function solution(n, edge) {
    const INF=200000000
    const edges=Array.from(Array(n),()=>[]);

    //간선 리스트 제작
    for(let e of edge){
        edges[e[0]-1].push(e[1]-1);
        edges[e[1]-1].push(e[0]-1);
    }
    const dist=new Array(n).fill(INF);
    
    dist[0]=0; // 자기꺼니까 

    search(edges,dist);
    dist.sort((a,b)=>b-a);
    
    let maxValue=dist[0];
    let cnt=0;
    for(let d of dist){
        if(maxValue===d){
            cnt++;
        }
    }
    return cnt;
}


//console.log(solution(6,[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]	));
