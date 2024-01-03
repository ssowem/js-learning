// 데이터 불변성 (Immutability)
// 원시형 데이터 : String, Number, Boolean, undefined, null
// JS에서 사용할수 있는 기본데이터로 데이터불변성을 갖고 있다.
// ----------------------------------------------------------------------
// |1:      1        |2:     4         |3:      7        |4:      ??  
// ----------------------------------------------------------------------
console.log('**원시데이터예시**')

// let 사용 => 변수가 새로운 값이 재할당 될 수 있다.
let a = 1;
let b = 4;
console.log(a, b, a === b);
b = a;
console.log(a, b, a === b);
a = 7;
console.log(a, b, a === b);

// 새로운 원시데이터 (let c =1)는
// 4번 메모리에 새롭게 만들어지지 않고
// 기존에 같은 값을 갖고있던 메모리 1번을 바라보게 됨 (데이터불변성)
// 원시형데이터: 새롭게 만들어지는것이 아닌 항상 불변한다라는 개념
//  ( => 기존의 데이터는 변하지 않음 )
let c = 1;
console.log(b, c, b === c);

// 참조형데이터: Object(객체), Array(배열), Function(함수)
// 함수는 콜백 형태로 데이터처럼 활용이 가능하기에 참조형데이터에 분류가 됨

// 원시형데이터와 다르게 새로운 값을 만들때마다 새로운 메모리 주소에 할당되는 구조를 갖음.
// -> 불변성이 없음(=가변한다.) 
// ----------------------------------------------------------------------
// |1: {    K:     } |2: {     K:     }|3: {          }|4:     
// ----------------------------------------------------------------------
console.log('**참조형데이터예시**')

let a2 = { k: 1};
let b2 = { k: 1};
console.log(a2, b2, a2 === b2); 
// 1번 메모리에서 k의값이 변경 (1=>7)
a2.k = 7;
// 2번메모리를 바라보던 b2가 1번메모리를 바라보게됨
b2 = a2;
console.log(a2, b2, a2 === b2);
a2.k = 2;
console.log(a2, b2, a2 === b2);
let c2 = b2;
console.log(a2, b2, c2, a2 === c2);
a2.k = 9;
console.log(a2, b2, c2, a2 === c2);
//원시데이터는 데이터가 불변하기 때문에 데이터의 생김새가 똑같으면 같은 데이터로 볼 수 있지만
//참조데이터는 불변하는 개념이 아니기ㄸㅐ문에 선언할 때 마다 새로운 메모리 주소에 참조데이터가 할당이되고
//생김새가 같아도 같은데이터가 아닐수있다 (하나가바뀌면 다른쪽도 바뀐다)