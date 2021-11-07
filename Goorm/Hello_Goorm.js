// 입력되는 숫자만큼 "Hello Goorm !" 출력하기

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.on("line", function(line) {
  
  for (let i = 0; i < line; i++) {
    console.log("Hello Goorm !")
  }
  
	rl.close();
}).on("close", function() {
	process.exit();
});