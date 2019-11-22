const me = {
    name: 'tak',
    // 메서드에서도 arrow function 사용 금지
    phone: '010-9843-1234',
    greeting: function() {
        return 'hi', + this.name
    }
}

const Person = function(name,phone) {
    this.name = name
    this.phone = phone
    this.greeting = function() {
        return 'hi', + this.name
    }
}

const lee =new Person('lee', '010-0141-0000')

// 생성자 함수에서는 arrow function 사용 금지
const Anumal = name => {
    this.name = name
}

const name='겨레'
const phone='010-4974-1513'
const greeting = function() {
    return 'hi' + this.name
}
const you = {
    name,
    phone,
    greeting
}
