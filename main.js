import _ from 'lodash'

// 얕은 복사(Shallow copy), 깊은 복사(Deep copy)

const user = {
    name: 'Heropy',
    age: 85,
    emails: ['thesecon@gmail.com']
}

// const copyUser = user

// 얕은 복사
// const copyUser = {...user}
// const copyUser = Object.assign({}, user)

// 깊은 복사
const copyUser = _.cloneDeep(user)

console.log(copyUser === user)

user.age = 22
console.log('user', user)
console.log('copyUser', copyUser)

console.log('-----')
console.log('-----')

user.emails.push('neo@zillinks.com')
console.log(copyUser.emails === user.emails)
console.log('user', user)
console.log('copyUser', copyUser)