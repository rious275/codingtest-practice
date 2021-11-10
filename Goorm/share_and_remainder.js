// 주어진 정수 A, B에 대해 A를 B로 나눈 몫과 나머지 구하기

function solution(input) {
  const nums = input.split(' ').map((str) => Number(str));
  
  const A = nums[0]; // 10
  const B = nums[1]; // 2
  
  return console.log(Math.floor(A / B), A % B)
}

const input = '10 2';
solution(input);