import _ from 'lodash' //From `node_modules`!

const usersA = [
    {
        userId: '1',
        name: 'HEROPY'
    },
    {
        userId: '2',
        name: 'Neo'
    }
]
const usersB = [
    {
        userId: '1',
        name: 'HEROPY'
    },
    {
        userId: '3',
        name: 'Amy'
    }
]
const usersC = usersA.concat(usersB)
console.log('concat', usersC)
console.log('uniqBy', _.uniqBy(usersC, 'userId')) // 이미 만들어진 배열에서 고유한 것만 남기는 방식
const usersD = _.unionBy(usersA, usersB, 'userId') // 고유한 것만으로 배열을 합치는 방식
console.log('unionBy', usersD)

const users = [
    {
        userId: '1', 
        name: 'HEROPY'
    },
    {
        userId: '2', 
        name: 'Neo'
    },
    {
        userId: '3', 
        name: 'Amy'
    },
    {
        userId: '4', 
        name: 'Evan'
    },
    {
        userId: '5', 
        name: 'Lewis'
    }
]

const foundUser = _.find(users, {  name: 'Amy' })
const foundUserIndex = _.findIndex(users, {name: 'Amy'})
console.log(foundUser)
console.log(foundUserIndex)

_.remove(users, {name: 'HEROPY'})
console.log(users)