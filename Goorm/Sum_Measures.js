// 주어진 자연수 n의 약수의 합 구하기

function solution(n) {
  let measure = [];
  const reducer = (a, b) => a + b;
  
  // 특정 수로 나눠서 떨어지면 약수이다.
  for (let i = 1; i <= n; i++) {
    if (!(n % i)) measure.push(i);
  }
  
  return console.log(measure.reduce(reducer));
}

let input = Number('10');
solution(input);