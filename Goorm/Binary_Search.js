// 이진 탐색

function solution(length, numArr, value) {
  let left = 0; // 첫 idx
  let right = length - 1; // 마지막 idx

  while(left <= right) {
    let mid = Math.floor((left + right) / 2); // 중간 idx

    if (value === numArr[mid]) // 모든 케이스에 대해 탐색하기 위해 무의미한 조건으로 진행
      return console.log(numArr.indexOf(value) + 1); // 첫 탐색값이 value면 반환
    else if (value < numArr[mid]) right = mid - 1; // value가 중간값보다 작으면 중간값 - 1을 마지막 idx로 설정
    else if (value > numArr[mid]) left = mid + 1; // value가 중간값보다 크면 중간값 + 1을 첫 idx로 설정
  }

  return console.log('X'); // 찾고 싶은 값이 없을 경우 반환
}

let length = '5';
let numArr = ['1', '5', '7', '9', '10'];
let value = '9';

solution(length, numArr, value);