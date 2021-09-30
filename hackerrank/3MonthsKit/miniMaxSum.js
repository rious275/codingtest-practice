// 5개의 양수가 있는 숫자 배열에서 4개를 조합해 더해서, 최소값/최대값 구하기

function miniMaxSum(arr) {
  // 1. 먼저, 굳이 모든 조합을 구할 필요가 없이 선택한 수들의 합 중 최대, 최소값만 구하면 된다.
  // 2. 5개 중 4개를 선택했을 때, 덧셈은 단순히 수 자체가 크면 된다.

  // 전체 합에서 가장 큰 요소를 빼면 조합의 합이 최소인 값이 되고,
  // 전체 합에서 가장 작은 요소를 빼면 조합의 합이 최대인 값이 된다.
  
  let sum = arr.reduce((a, b) => a + b)

  let maxNum = Math.max(...arr)
  let minNum = Math.min(...arr)
  
  console.log(sum - maxNum, sum - minNum)
}

miniMaxSum([1, 2, 3, 4, 5])