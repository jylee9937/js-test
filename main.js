// 삼항 연산자(ternary operator)

const a = 1 < 2

if(a){
  console.log('참')
} else{
  console.log('거짓')
}

console.log(a ? '참' : '거짓')
// 논리연산자(logical operator)

const a = 1 === 1
const b = 'AB' === 'AB'
const c = true

console.log(a)
console.log(b)
console.log(c)

console.log('&&: ', a && b && c) // AND
console.log('||: ', a || b) // OR
console.log('!: ', !a) // NOT
