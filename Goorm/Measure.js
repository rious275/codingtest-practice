// 약수 구하기

function solution(N) {
  let result = '';
  
  for (let i = 1; i <= N; i++) {
    if (!(N % i)) result += String(i + ' ');
  }
  
  return console.log(result);
}

solution(20);
solution(100);