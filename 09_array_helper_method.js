/*
    Array helper methods
*/
/*
    Array.forEach
*/
let numbers = [1, 2, 3]
// 1. 반복문 (for)
for (let i=0; i < numbers.length; i++) {
    console.log(numbers[i])
    }
// 2. 반복문 (for .. of)
for (let num of numbers) {
    console.log(num)
}
// 3 .forEach
numbers.forEach(function(num) {
    console.log(num)
})

// 실습
const images = [
    {height: 30, width: 20},
    {height: 100, width: 100},
    {height: 10, width: 5},
]
let areas = []
// let areas = [600, 10000, 50]
images.forEach(function(image, idx) {
    console.log(idx)
    areas.push(image.height * image.width)
})
console.log(areas)

/*
    map
*/
let numbers = [1, 2, 3]

let doubleNumbers = numbers.map(function(number) {
    return number*2
})
console.log(doubleNumbers)
let doubleNumbers2 = numbers.map(number => number*2)
console.log(doubleNumbers2)
// 실습 images -> map

areas = images.map(function(image) {
    return image.height * image.width
})
console.log(areas)
areas = images.map(image => image.height * image.width)

/*
    filter: 콜백함수의 return 결과가 참인 것을 각각 원소로 하는 배열을 **리턴**!
*/
// images의 높이가 100보다 작은 object만 담은배열
let myImage = []
for (let image of images) {
    if (image.height < 100) {
        myImage.push(image)
    }
}
console.log(myImage)
images.filter(function(image) {
    return image.height < 100
})
console.log(myImage)

let myNumbers = [
    {name: 'banana', type: 'fruit'},
    {name: 'toamto', type: 'vegetable'},
    {name: 'apple', type: 'fruit'},
    {name: 'cucumber', type:'vegetable'}
]

let bag = products.filter(product => product.type ==='fruit')

/*
    reduce : return 결과를 누적한 결과를 return
*/

let mySsafy = [100, 100, 95, 90]
let totalScore = mySsafy.reduce(function(total, score){
    return total + score
}, 100) // 초기값

mySsafy.reduce( (total, score) => total + score, 100)

/*
    find : 일치하는 첫번째 원소를 리턴
*/
mySsafy.find(function(score){
    return score === 2
})

let heros = [
    {name: '헐크', age: 100},
    {name: '아이언맨', age: 50},
    {name: '스파이더맨', age: 30},
]
heros.find(function(hero){
    return hero.age === 30
})

/*
    some, every
*/
let myNumbers = [1, 2, 3, 4]
myNumbers.some(function(number){
    return number % 2 ===0
})