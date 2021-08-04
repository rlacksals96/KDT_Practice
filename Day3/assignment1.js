// 첫 풀이
function solution(s){
    const stack = [];
    
    for(let x of s) {
        if(x === "(") stack.push(x);
        else if(!stack.length) return false;
        else stack.pop();
    }

    return stack.length ? false : true;
}

// 수정 풀이
function solution(s){
    let cnt = 0;

    for(let x of s) {
        if(x === "(") cnt++;
        else {
            if(cnt === 0) return false;
            cnt--;
        }
    }

    return cnt === 0;
}