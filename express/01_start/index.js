const express = require('express'); // express 모듈 호출
const app = express(); // express를 객체화하여 app에 할당

// GET 방식으로 "/" 요청이 오면 할일(function)을 함
// btn,addEventListener('click', (evt) => {}); 의 구조와 유사함
app.get('/', (req, res) => { // req요청, res응답
    res.send('Hello, World Express.js');
});

// 서버는 8000번 포트로 실행
app.listen(8000, () => {
    console.log('http://localhost:8000');
});

// node index.js → 왜 index.js부터 시작인가?
// package.json의 "main"에 적어놨기 때문
