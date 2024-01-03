//.filter()


const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

// map메소드로 새로운 배열데이터가 만들어짐
// 콘솔 창에 boolean 값으로 출력 됨.
// const a = numbers.map(number => {
//   return number < 3
// });

const a = numbers.map(number => number < 3 );
console.log(a);


// .filter() 배열 데이터 안에 들어있는 각각의 아이템들을 특정한 기준에 의해 필터링 하고
// 필터 된 새로운 배열 데이터를 결과값으로 반환한다.
//
// const b = numbers.filter(number => {
//   return number < 3
// });

const b = numbers.filter(number => number < 3 );
console.log(b);


// map메소드는 사용된 배열데이터의 개수만큼 반복적으로 내용이 동작하면서 새롭게 반환된
// 데이터도 원본 numbers의 배열데이터가 가지고 있는 아이템의 갯수만큼 똑같이 만들어짐.

// filter메소드는 필터링을 하고 필요한 부분으로 새로운 배열을 만듬(=원본의 갯수랑 달라짐)