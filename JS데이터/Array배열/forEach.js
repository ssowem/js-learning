// [ forEach()메소드가 붙어있는 배열 데이터의 아이템 갯수만큼
// 인수로 사용된 콜백 함수가 반복적으로 실행됨 ]
// 콜백에 사용되는 매개변수들의 순서
// 첫번째(element) 반복되는 각각의 배열아이템
// 두번째(index) 반복되는 횟수
// 세번째(array) 원본의 배열데이터
const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']


fruits.forEach(function (element, index, array) {
  console.log(element, index, array);
});



