// 윤년 구하기(Leap Year)
// 4로 나누어 떨어지면 윤년
// 이 중 100으로 나누어 떨어지는 해는 평년
// 그 중 400으로 나누어 떨어지는 해는 윤년

// function solution(year) {
//   if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)
//     return console.log('Leap Year');
//   else if (year % 4 === 0 && year % 100 === 0) return console.log('Not Leap Year');
//   else if (year % 4 === 0) return console.log('Leap Year');
//   else return console.log('Not Leap Year');
// }

// 이후 수정한 솔루션
// 조건이 조금 헷갈려 먼저 차례대로 정리해본 후, 좀 더 간결한 조건식으로 솔루션을 수정했다.

function solution(year) {
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)
    return console.log('Leap Year');
  else return console.log('Not Leap Year');
}

let input = 2016;
solution(input);