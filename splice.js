//.splice() 특정한 인덱스번호의 아이템을 제거하거나 
// 지정한 그 자리에 새로운 아이템을 추가할수도 있다.
// => 삭제, 끼워넣기 개념으로 활용
// 원본 수정되는 것에 주의해야 함.

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

// (2, 1) 첫번째값은 배열데이터의 인덱스값으로 numbers 에서는 '3'을 의미
// 두번째값은 지우는 갯수 
// 세번째값은 첫번째에 입력한 인덱스값 자리에 새롭게추가됨

numbers.splice(2, 0, 999);
console.log(numbers);

fruits.splice(2, 0, 'Orange');
console.log(fruits);


