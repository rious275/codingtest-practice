// 숫자 배열에서 양수, 음수, 0의 비율 구하기

function plusMinus(arr) {

  // 양수, 음수, 0 각각 갯수 카운트
  let plusCnt = 0
  let minusCnt = 0
  let zeroCnt = 0
  
  let n = arr.length
  
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
      plusCnt++
    } 
    else if (arr[i] < 0) {
      minusCnt++
    }
    else {
      zeroCnt++
    } 
  }
  
  // 출력값들을 나열하기 위해 forEach 메소드 사용
  return [(plusCnt/n).toFixed(6), (minusCnt/n).toFixed(6), (zeroCnt/n).toFixed(6)].forEach(item => {
   console.log(item)
  })  
}

plusMinus([-4, 3, -9, 0, 4, 1])