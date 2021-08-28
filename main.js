const user = {
  name: 'HEROPY',
  age: 85,
  emails: [
    'thesecon@gmail.com',
    'neo@zillinks.com'
  ]
}

// localStorage는 개발자도구의 어플리케이션탭에서 확인할 수 있음
// localStorage MDN 구글에 검색하기
// localStorage VS Session Storage

localStorage.setItem('user', JSON.stringify(user))
// JSON 형태로 저장함
// 모든 데이터를 string타입으로 저장해야 의도한대로 저장됨
console.log(JSON.parse(localStorage.getItem('user')))
// localStorage.removeItem('user') // 삭제하기

// 수정하고 싶다면?
const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 22
console.log(obj)
localStorage.setItem('user', JSON.stringify(obj))

// Lodash를 이용해 만들어진 Lowdb를 활용하면 이렇게 원시적인 방법이 아니게 구현할 수 있다.