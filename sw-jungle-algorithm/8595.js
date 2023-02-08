let input = require("fs").readFileSync("../input.txt").toString().split("\n");
//제출 할때 /dev/stdin으로 수정


let n = input[0]    // 개수
let arr = input[1].split("")    // 문자열 리스트
//1. 연속된 숫자는 히든넘버(단, 6자리를 넘으면 히든 넘버가 아님)
//2. 두 히든 넘버 사이에는 글자가 적어도 한개가 있음
//3. 히든넘버가 하나도 없다면 0을 출력

let temp_list = []  //결과를 위한 임시 리스트
let num = ''    //연속되는 숫자를 합칠 문자열 

let result = 0
//n만큼 arr을 돌면서 parseInt를 사용해 문자인지 숫자인지 체크(문자면 NaN, 아니면 숫자)
for (let i = 0; i < n; i++){
    let arr_bool = parseInt(arr[i])

    //숫자를 만나면 문자열로 합쳐서 num에 더해준다.
    if (arr_bool+"" !== "NaN"){
        num = num + (arr_bool+"")
        
        //근데 합친 문자가 리스트의 마지막 이라면 정답에 더해주고 for문 끝
        if(i == n-1){
            
            result = result + parseInt(num)
        }
    
    //문자를 만나거나 리스트의 끝이면 result에 합쳤던 문자 더하기
    }else if (arr_bool+"" === "NaN" || arr[i] === arr[arr.length]){
        // temp_list.push(parseInt(num))
        if (num !== ""){
            result = result + parseInt(num)
            num = ""
        }
        
    }
}
console.log(result)


// for (let i = 0; i < temp_list.length; i++){
//     if(temp_list[i]+"" !== "NaN" || (temp_list+"").length < 6){
//         result += temp_list[i]
//     }
// }
