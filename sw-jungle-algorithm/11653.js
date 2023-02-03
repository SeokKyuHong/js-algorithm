let input = require("fs").readFileSync("../input.txt").toString();
// input.split(" ")
//readFileSync만 /dev/stdin으로 수정
let num = parseInt(input)
// console.log(num)

let i = 2;
let primes = [];
while (1) {
    if(num % i === 0){
        num = num / i
        primes.push(i)
    }else{
        i++;
    }
    
    if(i>num){
        break;
    }
}
// console.log(primes)
console.log(primes.join("\n"));