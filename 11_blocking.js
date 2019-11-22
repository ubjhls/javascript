function a() {
    console.log('a')
}
console.log('hi') // 1
setTimeout(a, 3000) // 3 비동기로 동작하는 함수
console.log('bye') // 2

function printHello() {
    console.log('Hellooo')
}
function abc() {
    console.log('abc')
}

function baz() {
    console.log('baz')
    setTimeout(printHello, 0)
    console.log('bazend')
}

function bar() {
    console.log('bar')
    setTimeout(abc, 0)
    baz()
}

function foo() {
    console.log('foo')
    bar()
}
foo()