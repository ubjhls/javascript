console.log(taewoo) // undefined
var taewoo = '김태우'

/*
var taewoo // hoisting
console.log(taewoo)
taewoo = '김태우'
*/

console.log(kyungho)    // ReferenceError - 초기화 하기전 접근 금지
let kyungho = '이경호'

/*
var
1. 선언과동시에 초기화
2. 할당

let, const는 TDZ(Temporal Dead Zone)이 존재
1. 선언
2. TDZ
3. 초기화
4. 할당
*/