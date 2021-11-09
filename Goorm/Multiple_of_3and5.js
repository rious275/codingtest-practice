// N이하의 자연수 중 3의 배수, 5의 배수의 합

function solution(N) {
  let sum = 0;

  for (let i = 1; i <= N; i++) {
    if (!(i % 3) || !(i % 5)) {
      sum += i;
    }
  }

  return console.log(sum)
}

const N = 1000;
solution(N);