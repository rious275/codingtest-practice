// 문자열 역반환하기
// Array, String, RegExp 관련 내장함수 사용 금지

function solution(data) {
  let result = "";
  for (let i = data.length - 1; i >= 0; i--) {
    result = result + data[i];
  } 
  
  return result;
}

solution("website");