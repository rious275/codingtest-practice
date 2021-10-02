// 숫자 배열 a에서 고유한 요소를 찾아 반환하기

function lonelyinteger(a) {
  for (let i = 0; i < a.length; i++) {
    if (a.indexOf(a[i]) === a.lastIndexOf(a[i])) return a[i]
  }
}

lonelyinteger([1, 2, 3, 4, 3, 2, 1])