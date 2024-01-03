//.find() .findIndex()

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry', 'Babo']

// find 안에있는 콜백이 fruits의 배열 데이터의 갯수만큼 실행이 됨.
// 콜백내에서 뭔가를 찾으면 반복이 종료되고, 찾은 배열의 아이템이 반환이 된다.
// * 조건을 만족하는 첫 번째 요소만 반환 (콘솔창 'Babo'를 제외한 'Banana'만 출력 됨)
// const a = fruits.find(fruits => {
//   return /^B/.test(fruits);
// })

const a = fruits.find(fruits => /^B/.test(fruits));
console.log(a);


// const b = fruits.findIndex(fruits => {
//   return /^B/.test(fruits);
// })

const b = fruits.findIndex(fruits => /^B/.test(fruits));
console.log(b);




//  /^B/. 정규표현식
//  ^ <- 시작한다는 의미 ( = 대문자 B로 시작하는 문자데이터 )