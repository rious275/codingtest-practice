// 주어진 자연수 N이 홀수('odd')인지 짝수('even')인지 판별

function solution(N) {
  if (N % 2) return console.log('odd');
  else return console.log('even');
}

solution(5);
solution(10);