// JSON : 자바스크립트의 객체 표기법
// 자바스크립트의 데이터를 표현하는 하나의 포맷
// 속성과 값의 하나의쌍으로 이루어짐 키 밸류 형태 객체데이터와 유사
// 사람이 읽을수있는 용도의 텍스트를 사용하는 개방형 표준 포맷
// 비동기 브라우저 서버간의 통신에서 사용이 된다
import myData from './myData.json'
console.log(myData);
const user = {
  name: 'SOYEON',
  age: 92,
  emails: [
    'soyeon@gmail.com',
    'lsy@naver.com'
  ]
}
console.log('user', user);

// JSON.stringify() 객체데이터를 문자데이터화한다
const str = JSON.stringify(user);
console.log('str', str);
console.log(typeof str);

const obj = JSON.parse(str);
console.log('obj', obj);