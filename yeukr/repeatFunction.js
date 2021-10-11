// method 함수를 100만회 실행하기

function solution(method) {
  for (let i = 1; i < 1000001; i++) {
     method()
  }
}

solution(method)
