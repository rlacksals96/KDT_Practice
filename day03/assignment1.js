//괄호 짝 맞추기
function solution(s) {
	let cnt = 0;
	for (let k of s) {
		if (k === "(") {
			cnt++;
		} else {
			cnt--;
		}

		if (cnt < 0) {
			// close가 먼저 나와서 짝이 맞을 가능성 0
			return false;
		}
	}

	if (cnt == 0) {
		return true;
	} else {
		//값이 0이 아니면 (, ) 중 짝이 안맞아서 남은 경우임
		return false;
	}
}

const arr = ["()()", "(())()", ")()(", "(()("];
for (const s of arr) console.log(solution(s));
