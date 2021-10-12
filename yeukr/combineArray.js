// 배열 2개를 합쳐서 반환하기

function solution(list1, list2) {
  const arr = [];
  arr.push(...list1, ...list2);

  console.log(arr);
  return arr
}

solution([1, 2, 3], [4, 5, 6])