const [n, input1, input2] = require("fs").readFileSync("../input.txt").toString().trim().split("\n");
//제출 할때 /dev/stdin으로 수정

//a 원소의 개수, b 원소의 개수
//a 원소들
//b 원소들
const a = n.split(" ")[0];
const b = n.split(" ")[1];
const aArr = input1.split(" ");
const bArr = input2.split(" ");

count1 = 0
// console.log(aArr.find((element)=>{
//     if(element === '2'){
//         return true;
//     }
// }))
for (let i = 0; i < a; i++){
    aArr.find((element)=>{
        if(element === bArr[i]){
            count1 += 1
            return true;
        }
    })
}
//만약 aArr에 bArr가 있다면 그 원소를 뺀 개수를 tempA에 저장
// for (let i = 0; i < a; i++){
//     for (let j = 0; j < b; j++){
//         if (aArr[i] == bArr[j]){
//             count1 += 1
//         }
//     }
// }

console.log((aArr.length - count1) + (bArr.length - count1))



