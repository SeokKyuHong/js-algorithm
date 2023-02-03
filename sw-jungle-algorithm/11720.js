let input = require("fs").readFileSync("../input.txt").toString().split("\n");
// input.split(" ")
//readFileSync만 /dev/stdin으로 수정

// console.log(input[1].length)

let result = 0

for (let i = 0; i < parseInt(input[0]); i++){
    let sum = parseInt(input[1][i])
    result += sum
}

console.log(result)