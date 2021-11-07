// 버블 정렬하기

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// 입력 값이 여러줄이라 가공하기 위해 선언
const input = [];

rl.on("line", function(line) {
	input.push(line);
}).on("close", function() {

	const length = input[0];
	const nums = input[1].split(' ').map(Number);
	
  // index 값과 index+1 값을 비교하여 정렬시킨다.
	for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - (i + 1); j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
	
  // 배열 형태로 정렬 후 프레임을 맞추기 위해 요소값 뒤에 공백 추가
	for (let i = 0; i < nums.length; i++) {
    nums[i] = nums[i] + ' '; 
  }

  // 배열을 문자열로 변환
	console.log(''.concat(...nums));
	process.exit();
});