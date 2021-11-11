// 단어 개수 세기(띄어쓰기 기준)

function solution(str) {
  const change = str.trim().replace(/ +/g, ' ');
  const result = change.split(' ').length;

  return console.log(result);
}

let str = ' goo r m e du';
solution(str);