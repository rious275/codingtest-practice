// 1부터 N까지의 수를 출력하는데, 그 중 3의 배수에는 'X' 출력

function solution(N) {
  const result = [];
  
  for (let i = 1; i <= N; i++) {
    if (i % 3 > 0) result.push(i);
    else result.push('X')
  }
  
  return console.log(result.join(' ') + ' ');
}

const N = 9;
solution(N);