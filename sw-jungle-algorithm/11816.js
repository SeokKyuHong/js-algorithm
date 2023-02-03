let input = require("fs").readFileSync("../input.txt").toString();
// input.split(" ")
//readFileSync만 /dev/stdin으로 수정

// console.log(input)
if (input[0] !== '0'){
    console.log(parseInt(input))
}else if(input[1] === 'x'){
    let temp = input.split("x")[1]
    console.log(parseInt(temp, 16))
    
}else{
    console.log(parseInt(input, 8))
}