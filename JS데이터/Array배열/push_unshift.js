//.push() 데이터를 맨뒤에 삽입  .unshift() 데이터를 맨앞에 삽입
// 원본 수정되는 것에 주의해야 함.

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

numbers.push(5);
console.log(numbers);

numbers.unshift(0);
console.log(numbers);



