// 콜백(Callback)
// 함수의 인수로 사용되는 함수
// 실행 위치를 보장하기 위해 많이 사용된다.

// setTimeout(함수, 시간)

function timeout(Callback){
    setTimeout(() => {
        console.log('Heropy!')
        Callback()
    }, 3000)
}

timeout(()=>{
    console.log('Done!')
})