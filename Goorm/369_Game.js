// 369 게임에서 N 이전까지 박수친 횟수 구하기

function solution(N) {
  let count = 0;
  const regex = /3|6|9/g;

  for (let i = 1; i < N; i++) {
    count += (String(i).match(regex) || []).length;
  }

  return console.log(count);
}

let N = 10;
solution(N);