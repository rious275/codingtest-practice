// AM, PM 시간을 24시간제로 바꾸기

function timeConversion(s) {
  // 주어진 시간을 ':' 기준으로 잘라 AM, PM 경우를 계산해서 반환하기로 함
  // AM, PM 모두 12시 일 때 예외 케이스가 발생하므로 따로 분류
  const spliter = s.split(':')

  // PM일 경우
  const casePm = (Number(spliter[0]) + 12) + ':' + spliter[1] + ':' + spliter[2].slice(0, 2)  
  const casePm_12 = casePm.slice(8) + "12:" + casePm.slice(3)
  
  // AM일 경우
  const caseAm = s.slice(0, 8)
  const caseAm_12 = casePm.slice(8) + "00:" + casePm.slice(3)
  
  // 시간 부분이 12미만일 때와, 12일 때의 경우를 분류
  if (spliter[2].slice(2, 4) === 'PM' && Number(spliter[0]) < 12) return casePm
  else if (spliter[2].slice(2, 4) === 'PM') return casePm_12
  
  if (spliter[2].slice(2, 4) === 'AM' && Number(spliter[0]) < 12) return caseAm
  else if (spliter[2].slice(2, 4) === 'AM') return caseAm_12
}

timeConversion('12:05:45AM')