// //논리 연산자
// const a = 1 === 2;
// const b = 'AB' === 'AB1';
// const c = true;

// console.log(a);
// console.log(b);
// console.log(c);

// // end 연산자
// console.log( '&&: ', a && b && c)

// // 또는 연산자 (or 연산자)
// console.log('||: ',  a || b)

// // 부정 연산자 (not 연산자)
// console.log( '!: ', !a);


//삼항연산자
// const a = 1 < 2

// if (a) {
//   console.log ('참')
// } else {
//   console.log ('거짓')
// }

// // a 가 true? false?   ture면 '참' , false면 '거짓'
// console.log(a ? '참' : '거짓')



import random from './getRandom'

const a = random()
if ( a === 0 ) {
  console.log('a is 0')
} else if ( a === 2 ) {
  console.log('a is 2')
} else if ( a === 4 ) {
  console.log('a is 4')
} else {
  console.log('rest...')
}