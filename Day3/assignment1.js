function solution(s){
    let stack = [];
    
    for(let x of s) {
        if(x === "(") stack.push(x);
        else if(!stack.length) return false;
        else stack.pop();
    }

    return stack.length ? false : true;
}