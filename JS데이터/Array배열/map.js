const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

// const a = fruits.forEach(function (fruits, index) {
// 매개변수가 하나일땐 소괄호가 생략이 가능하지만 두개여서 아래에서는 생략X
const a = fruits.forEach((fruits, index) => {
  console.log(`${fruits}-${index}`);
});
console.log(a);
// forEach메소드는 실행후 반환되는 값이 없기때문에 콘솔창에서 'undefined'로 확인이 됨

// .map()
// map 메소드는 인수로 사용하는 콜백의 내부에서 반환하는 하나의 데이터를
// 가지고 그 데이터들을 모아놓은 새로운 배열을 만들어서 반환한다.

// const b = fruits.map(function (fruits, index) {
//   return `${fruits}-${index}`
// });
// console.log(b);

// 객체 리터럴 방식
// const b = fruits.map((fruit, index) => {
//   return {
//     id: index,
//     name: fruit
//   }
// });

// 위처럼 다른 로직이 없이 특정한 실행문이 하나만 반환될땐
// 중괄호 블럭에 해당하는 중괄호 기호와 리턴 키워드 생략 가능함
// 소괄호()로 묶어서 중괄호{}를 열어줘야 객체데이터가 화살표함수 문법에 의해 반환된다.
const b = fruits.map((fruit, index) => ({
  id: index,
  name: fruit
}) );

console.log(b);


// forEach와 map의 차이점 알아두기!!!!

// forEach는 실행후 반환되는 값이 없음 -> 원본 배열을 변경하거나 다른 목적으로 사용 됨.

// map은 콜백에서 반환된 특정데이터 기준으로 새로운 배열을 실행된 자리에 반환을 해줌.
//  -> 기존 배열을 변경하지 않고 요소를 변환할때 유용함.


