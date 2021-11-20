// 10진수를 16진수로 변환하기

function solution(N) {
  return console.log(Number(N).toString(16));
}

let input = 100;
solution(input);

// 16진수 -> 10진수
// parseInt('64', 16)

// 2진수 -> 10진수
// parseInt('1111011', 2);

// 2진수 -> 16진수
// 10진수로 변경 후 다시 16진수로 변경