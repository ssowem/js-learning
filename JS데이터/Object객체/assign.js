//assign() 정적메소드는 특정 객체데이터를 복사하는 용도로 사용한다.


// 객체데이터
const userAge = {
  // 아래처럼 property(속성) 부분에 값이 들어가져 있는것을  key value 형태로 봄
  //key: value
  name: 'Soyeon',
  age: 92
}
const userEmail = {
  name: 'Syeon',
  email: 'yeon@gmail.com'
}

// Object <= JS 에서 전체영역에서 쓸수있는 전역객체
// assign은 실제 객체데이터에 사용을 할 수 없기때문에
// Object라는 전역 객체에 직접적으로 사용하는 메소드 = 정적 메소드 (static method)

// 첫번째인수(userAge):타겟 대상객체, 두번째인수(userEmail):소스 출처객체
// 소스 부분의 속성들을 복사해서 대상객체에 집어넣는다.
// + 첫번째인수로 비어있는 객체데이터 '{}' 를 추가하면 뒤쪽 출처객체들의
// 속성을 흡수해 새로운 tartet 변수의 반환이 됨
const target = Object.assign({},userAge, userEmail);
console.log(target);
console.log(userAge);

// 출처객체에서 대상객체 target 으로 속성의값을 복사해 넣고 그 객체를 반환이 됨

console.log(target === userAge);


const a = { k: 123};
const b = { k: 123};
console.log(a === b);

