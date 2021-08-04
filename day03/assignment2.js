function solution(priorities, location) {
	let cnt = 0;
	while (true) {
		let isHighest = true;
		let cur = priorities.splice(0, 1);
		for (const k of priorities) {
			if (k > cur) {
				isHighest = false;
				break;
			}
		}
		if (!isHighest) {
			//출력 실패
			priorities.push(cur[0]);
			location = updateLocation(priorities, location);
		} else {
			//출력 대상
			if (location === 0) {
				return cnt + 1;
			} else {
				cnt++;
				location = updateLocation(priorities, location);
			}
		}
	}
}
function updateLocation(priorities, location) {
	let length = priorities.length;
	if (location === 0) {
		return length - 1;
	} else {
		return location - 1;
	}
}

let p = [2, 1, 3, 2];
let loc = 2;
console.log(solution(p, loc));

// let arr = [1, 2, 3];
// let tmp = arr.splice(0, 1);
// console.log(tmp);
// console.log(arr);
// arr.push(tmp[0]);
// console.log(arr);
