// 두 정수를 비교하여 더 작은 값 출력

function solution(input) {
  const nums = input.split(' ');

  return console.log(Math.min(...nums));
}

let input = '10 20';
solution(input);