// keys()
// 속성의 이름만 추출해서 새로운 배열로 만들어주는 정적메소드
const user = {
  name: 'Soyeon',
  age: 92,
  email: 'yeon@gmail.com'
}

const keys = Object.keys(user);
console.log(keys);

// 인덱스번호가 아닌 객체데이터의 속성 이름값을 명시하여 값을 불러올수 있다.
console.log(user['email']);

// keys() 를 사용해서 얻은 속성이름의 배열을 활용하는 예시
// * 화살표함수에서 중괄호가 제외된것은 하나의 실행문이 콜백 함수내에서
// 밖으로 반환될 수 있는 구조라고 볼 수 있다.
const values = keys.map(key => user[key]);
console.log(values);