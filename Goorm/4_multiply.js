// 4개의 수 곱학기

function solution(nums) {
  return console.log(nums.reduce((a, b) => a * b));
}

let input = '5 8 10 6'.split(' ').map((str) => Number(str));
solution(input);
