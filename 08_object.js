const me = {
    name: 'kim',
    'phone number':'010123456780',
    phone: {
        type: 'iphone XS MAX'
    },
    // 메서드 function 키워드만 작성하자!
    greeting: function() {
        console.log(this) // me
        console.log(`hi ${this.name}`)
    },
    greeting2: () => {
        console.log(this) // 전역객체 window
        console.log(`hi ${this.name}`)
    }
}

console(me.name)
console(me['name'])
console(me.phone.type)

// ES6+ 오브젝트 리터럴
let book = '자바스크립트 완전 정복'
let albums = {
    IU: ['좋은날','밤편지'],
    BTS:['작은것들을 위한 시']
}

let bag = {
    book,
    albums
}

// JSON (Javascript object notion - 자바스크립트 오브젝트 표기법)
// 문자열
// object -> JSON
let jsonData = JSON.stringify(me)
let myObject = JSON.parse(jsonData)