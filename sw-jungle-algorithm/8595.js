let input = require("fs").readFileSync("../input.txt").toString().split("\n");
//readFileSync만 /dev/stdin으로 수정
let arr = input[1].split("")
let temp = ''    //연달아 있는 숫자를 합치기 위한 변수
let result = 0  //결과값
let count = 0
for (let i = 0; i < input[0]; i++){
    let num = parseInt(arr[i])  //받은 데이터 숫자면 int, 문자면 NaN
    if (num+'' === 'NaN'){
        if (temp !== ''){
            if (temp.length < 6){
                result += parseInt(temp)
                temp = ''
                count += 1
                
            }else{
                temp = ''
                count += 1
            }
            
        }
    }else if (num+'' !== 'NaN'){
        temp = temp + (num + "")
        if (arr[arr.length - 1] == arr[i] && arr[arr.length - 1] !== 'NaN'){
            if(temp.length < 6){
                result += parseInt(temp)
                console.log("요기?", result)
            }
        }
    }
    
}
if (result+'' === "NaN"){
    console.log('0')
}else{
    console.log(result+'')
}