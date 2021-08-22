function User(first, last){ //자바스크립트에서는 생성자는 파스칼케이스로 작성한다.
  this.firstName = first
  this.lastName = last
}
user.prototype.getFullName = function(){
  return `${this.firstName} ${this.lastName}`
}
// prototype에는 객체에서 사용할 수 있는 수많은 함수를 제공한다.

const heropy = new user('Heropy', 'Park') //생성자 함수
const amy = new user('Amy', 'Clarke') //생성자 함수에서 생성된 값을 할당하는 amy는 인스턴스이다.
const neo = new user('Neo', 'Smith')

console.log(heropy)

// const heropy = {} //객체를 만드는 리터럴 방식이었던 것이다.