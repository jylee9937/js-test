// ES6 Classes

class User {
  constructor(first, last){
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const heropy = new User('Heropy', 'Park')

console.log(heropy)
console.log(heropy.getFullName())