// 타이머 함수
// setTimeout(함수, 시간(ms)): 일정 시간 후 함수 실행
// setInterval(함수, 시간(ms)): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
//  clearInterval(): 설정된 Interval 함수를 종료

const timer = setInterval(() => {
    console.log('Heropy !')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
    clearInterval(timer)
}) // 왜 화살표함수 안에 작성해야 정상적으로 작동하는가?