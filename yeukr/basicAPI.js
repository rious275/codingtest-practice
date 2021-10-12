// 인자2(aVJH5v76rjn) 안에 있는 데이터 출력
// 결과값: "55bbCWxk2X"

async function solution(url, key) {
  const data = await fetch(url).then(res => res.json());
  
  return data[key];
}

solution("https://cdn.jsdelivr.net/gh/kstost/RES/sampledata.json", "aVJH5v76rjn")