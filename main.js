// 구조 분해 할당 (Destructuring assignment)
// 비구조화 할당

const user = {
    name: 'Heropy',
    age: 85,
    email: 'thesecon@gmail.com'
}
const {name: heropy, age, email, address = 'Korea' } = user
// E.g, user.address

console.log(user)
console.log(`사용자의 이름은 ${heropy}입니다.`)
console.log(`${heropy}의 나이는 ${age}세 입니다.`)
console.log(`${heropy}의 이메일 주소는 ${email}입니다.`)
console.log(address)

const fruits = ['Apple', 'Banana', 'Cherry']
const [, , c, d] = fruits
console.log(c, d)