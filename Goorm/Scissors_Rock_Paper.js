// 가위바위보 게임
// 5명의 사람이 가위바위보를 랜덤으로 선택해 내고, 승리한 사람의 수 구하기

// case 1

function solution(value) {
  const arr = value.split(' ').map((str) => Number(str));
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1 && arr.indexOf(3) !== -1) count++
    else if (arr[i] === 2 && arr.indexOf(1) !== -1) count++
    else if (arr[i] === 3 && arr.indexOf(2) !== -1) count++
  }

  return console.log(count);
}

let input = '1 1 3 3 1';
solution(input);

// case 2

// function solution(value) {
//   const arr = value.split(' ').map((str) => Number(str));
//   const set = new Set(arr);
//   const reducer = [...set].reduce((a, b) => a + b);
  
//   let count = 0;
  
//   if (reducer === 6) return console.log(5);
//   if ([...set].length === 1) return console.log(0);
  
//   if (reducer === 5)
//     return console.log(arr.filter(val => val === 3).length);
//   else if (reducer === 4) return console.log(arr.filter(val => val === 1).length);
  
//   return console.log(arr.filter(val => val === 2).length);
// }

// let input = '2 2 2 2 2';
// solution(input);