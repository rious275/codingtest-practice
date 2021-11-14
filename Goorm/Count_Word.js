// 단어 개수 세기(띄어쓰기 기준)

function solution(str) {
	const arr = str.split(' ');
  const result = arr.filter((str) => str.length > 0);
	
	return console.log(result.length);
}

let str = ' goo r m e du';
solution(str);