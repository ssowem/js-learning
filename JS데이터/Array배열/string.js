// [ length: ]
const str = '0123';
//띄어쓰기도 공백문자로 포함
console.log(str.length);

// [ indexOf: ]
const str2 = "hello world";
console.log(str2.indexOf('soyeon') !== -1)

// [ slice: 문자열의 일부를 추출하면서 새로운 문자열을 반환하는 메소드]
// 추출 종료점 인덱스의 그 직전까지 추출 됨
// [ slice(?,?) (추출시작점, 추출종료점)]
const str3 = "hello world";
console.log(str3.slice(6, 11));


// [ replace: 첫번째 인수에 해당하는 문자를 찾아서
// 두번째인수에 해당내용으로 교체해주는 메소드 ]
const str4 = "hello world";
console.log(str4.replace('world', 'soyeon'));
// 빈 문자로도 만들 수 있음
console.log(str4.replace(' world', ''));


// [ match: 특정 문자데이터에서 정규표현식을 통해 특정문자를
// 매치&일치 시켜서 배열 데이터로 반환하고, 배열데이터 내부에서
// 원하는 정보를 아이템으로 추출하여 사용할수있음 ]
// 정규표현식 /.+(?=@)/
const str5 = "yeon@gmail.com";
console.log(str5.match(/.+(?=@)/)[0]);

// [trim: 맨앞,맨끝기준 연결되어있는 모든 공백문자를 제거하는 메소드 ]
const str6 = "   Hello world   ";
console.log(str6.trim());





