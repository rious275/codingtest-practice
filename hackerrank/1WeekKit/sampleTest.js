// 정수 n을 인자로 받는다.
// 1~n까지의 숫자 하나하나에 대해,

// i가 3 & 5 배수일 때 FizzBuzz 출력
// i가 3 배수일 때 Fizz 출력
// i가 5 배수일 때 Buzz 출력
// i가 아무 배수도 아닐 때 i 출력

function fizzBuzz(n) {
  const arr = [...Array(n)].map((v, i) => i + 1);
  
  return arr.forEach(num => {
    if (!(num % 3) && !(num % 5)) return console.log('FizzBuzz')
    else if (!(num % 3) && num % 5) return console.log('Fizz')
    else if (!(num % 5) && num % 3) return console.log('Buzz')
    else if (num % 3 && num % 5) return console.log(num)
  })
}

fizzBuzz(15)