const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry'] //element(요소)

console.log(numbers)
console.log(fruits)
console.log(numbers[1]) // 인덱스 인덱싱

numbers.stay = 3
console.log(numbers)

// .length
//prototype은 리터럴로 생성한 것에 바로 사용할 수 있다.
console.log([1, 2].length)

console.log([],length) //이것을 통해서 배열이 채워져 있는지 확인한다고 한다.

// .concat()
console.log(numbers.concat(fruits)) //합쳐주지만 원본 배열 데이터에는 영향이 없음
console.log(numbers)
console.log(fruits)

// .forEach()
//return 값이 없다.

fruits.forEach(function (element, index, array) {
    console.log(element, index, array)
})

// .map()
//return 값으로 배열을 만들어 줌

const a = fruits.forEach((fruit, index) => {
    console.log(`${fruit}-${index}`)
})
console.log(a)

const b = fruits.map((fruit, index) => ({
    id: index,
    name: fruit
}))
console.log(b)