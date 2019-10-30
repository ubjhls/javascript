/*
* 원시타입(primitive data type)
    - boolean
    - null
    - undefined
    - number
    - string
    - symbol (ES6+)

* 객체타입(object)
    -object
*/

// number (typeof)
3
-5
3.14
2.14e4
Infinity
NaN // Not a number
0/0 // NaN

// string
let myName = '탁희'
myName = "탁\n희"
// (backtick) : ES6+ 템플릿리터럴
// string interpolation, 줄바꿈(개행)
myName = '김탁희'
console.log('안녕하세요, ${myName}입니다.')

// boolean
true
false

// empty value
undefined // type -> undefined
null //type -> object