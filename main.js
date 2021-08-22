// this
// 일반(Normal) 함수는 '호출 위치'에 따라 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 '함수 범위'에서 this 정의!
// 콜백함수를 사용할 때 유용하다.

const heropy = {
  name: 'Heropy',
  normal: function(){
    console.log(this.name)
  },
  arrow: () => {
    console.log(this.name)
  }
}
heropy.normal()
heropy.arrow()

const amy = {
  name: 'Amy',
  normal: heropy.normal, //여기서는 호출이 아니라 할당이다.
  arrow: heropy.arrow
}

amy.normal()
amy.arrow()