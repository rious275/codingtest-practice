// 문자열의 일부를 얻기
// 인자 string의 길이가 start와 같거나, 인자 length가 0이면 "" 반환
// Array, String 등 내장함수 사용금지

function solution(string, start, length) {
  let result = "";
  
  if (string.length === start || length === 0) return result;

  for (let i = start; i < length + start; i++) {
    if (string[i] !== undefined) {
      result = result + string[i];  
    }
  }
  
  return result;
}

solution("hello world", 3, 6)