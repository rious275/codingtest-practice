// 배열 내 정수 중 최소값 구학기

function solution(input) {
  const N = input[0];
  const arr = input[1].split(' ');
  const min = Math.min(...arr);

  console.log(min);
}

let input = ['3', '1 3 5'];
solution(input);