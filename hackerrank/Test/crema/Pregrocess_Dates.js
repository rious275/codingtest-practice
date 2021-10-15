function preprocessDate(dates) {
  const resultArr = [];
  
  for (let i = 0; i < dates.length; i++) {
    const year = dates[i].slice(-4);
    const month = dates[i].slice(-8).slice(0, 3);
    const day = dates[i].length < 13 ? dates[i].slice(-13, 1) :
    dates[i].slice(-13, 2);

    const date = new Date(year + ' ' + month + ' ' + day);
    const format = date.toISOString().slice(-24, 10)
    
    resultArr.push(format);
  }
  
  return resultArr;
}

preprocessDate(["20th Oct 2052", "26th Dec 2061", "16th Oct 2010", "1th Oct 2011", "4th Oct 2021"])
