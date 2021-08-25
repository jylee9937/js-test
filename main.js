const userAge = {
    // key: value
    name: 'Heropy',
    age: 85
}
const userEmail = {
    name: 'Heropy',
    email: 'thesecon@gmail.com'
}

const user = Object.assign({}, userAge, userEmail)
console.log(user)
console.log(userAge)
console.log(user === userAge)

const a = { k: 123}
const b = { k: 123}
console.log(a === b)

// prototype 메소드가 아니면 정적 메소드가 아니다~~~~

const keys = Object.keys(user) // key들만 추출해서 새로운 배열로 만들어주는 메소드
console.log(keys)
// ['name', 'age', 'email']

console.log(user['email'])

const values = keys.map(key => user[key])
console.log(values)