// 헷갈리는 작대기
// 주어진 문자열에서 비슷한 4개의 숫자, 문자, 기호의 개수를 각각 구하기
// 숫자 1, 대문자 I, 소문자 l, 기호 |

function solution(S) {
  let one = 0;
  let I = 0;
  let l = 0;
  let pipe = 0;
  
  for (let i = 0; i < S.length; i++) {
    if (S[i] === '1') one++;
    if (S[i] === 'I') I++;
    if (S[i] === 'l') l++;
    if (S[i] === '|') pipe++;
  }
  
  console.log(one);
  console.log(I);
  console.log(l);
  console.log(pipe);
}

let input = 'xl30gjdhaI1gdfkl|dlh;(rn4ky1kgndlIIldfl|ld|dBjfHd'
solution(input);
