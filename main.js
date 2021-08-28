// 구글 검색창에 omdbapi 검색
// api주소 활용시에 알아야 되는 개념으로 Query String이 나옴
// 주소?속성=값&속성=값&속성=값      이러한 형태
// axios 구글에 검색
// 부라우저에서 HTTP 요청 처리를 위해 설치하는 것이라고 한다.

// Uncaught SyntaxError: Unexpected token < 문제가 발생해서 다음과 같은 페이지를 참고해서 해결함 http://lab.naminsik.com/4011

import axios from 'axios'

function fetchMovies() {
  axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen') // 데이터를 요청하고 axios에서 데이터를 처리하고 우리가 사용할 수 있게 되는 것이다.
    .then(res => {
      console.log(res)
      const h1El = document.querySelector('h1')
      const imgEl = document.querySelector('img')
      h1El.textContent = res.data.Search[0].Title
      imgEl.src = res.data.Search[0].Poster
    })
}
// method chaining
fetchMovies()