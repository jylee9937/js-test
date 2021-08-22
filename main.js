// JS 데이터

// String "", '', ``
// 이렇게 데이터를 만드는 방식을 리터럴 방식이라고 한다.

const result = 'Hello World'.indexOf('World')

console.log(result)

const str = '01 23'

console.log(str.length)

const str2 = 'Hello world!'

console.log(str2.indexOf('world') !== -1)

console.log(str2.slice(0, 3))

console.log(str2.replace(' world!', ''))

const str3 = 'lkj49864@ajou.ac.kr'

console.log(str3.match(/.+(?=@)/)[0])