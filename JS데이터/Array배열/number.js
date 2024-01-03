const pi = 3.14159265358979;
console.log(pi);


// [ toFixed : 메소드가 호출될때 인수로 소수점의
// 몇번째 자리까지 유지할것인지를 명시함.]
// *실행시 문자데이터로 반환이 된다. 
const str = pi.toFixed(2);
console.log(str);
console.log(typeof str) // 데이터타입을 확인하면 string으로 확인됨

// parseInt,parseFloat 전역함수(문자열을 숫자로 변환)
// parse(분석), int(integer:정수)
const integer = parseInt(str);
// parseFloat 소수점자리까지 유지하면서 문자데이터를 숫자로 변환
const float = parseFloat(str);
console.log(integer);
console.log(float);
console.log(typeof integer, typeof float); // 데이터타입을 확인하면 number로 확인됨