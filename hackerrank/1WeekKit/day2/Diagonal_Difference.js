// 다차원 배열(n x m 정사각형 형태) 대각선의 요소들의 합을 비교해서 차이값 반환

function diagonalDifference(arr) {
  let sumLeft = [];
  let sumRight = [];
  
  // 10시 - 5시 방향 대각선 요소
  for (let i = 0; i < arr.length; i++) {
    let j = arr.length - i - 1;
    sumRight.push(arr[i][j]);
  }
  
  // 2시 - 7시 방향 대각선 요소
  for (let i = 0; i < arr.length; i++) {
    let j = i;
    sumLeft.push(arr[i][j]);
  }
  
  // 각 요소들의 합
  const resLeft = sumLeft.reduce((acc, cur) => acc + cur);
  const resRight = sumRight.reduce((acc, cur) => acc + cur);
  
  return Math.abs(resLeft - resRight);
}

console.log(diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
]));