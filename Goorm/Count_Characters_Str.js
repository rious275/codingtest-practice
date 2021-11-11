// 특정 문자 개수 구하기

function solution (input) {
  const str = input[0];
  const value = input[1];

  // 정규식 변수 활용을 위해 RegExp 생성자 사용
  const regex = new RegExp(value, 'g');
  const result = str.match(regex);

  result ? console.log(result.length) : console.log('0');
}

let input = ['I am a boy', 'a'];
solution(input);