//.includes()


const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']


const a = numbers.includes(3);
console.log(a);

const b = fruits.includes('SOYEON');
console.log(b);





// 문제

const a동 = ["A502", "A504", "A203", "A305", "A530"];
const b동 = ["B202", "B609", "B303"];
const c동 = ["C403", "C408"];


//문제1 선유도윤영빌의 남은 모든 호수를 하나의 배열[sumArr]로 만드세요~
//문제2 [sumArr]에서 3층에 해당하는 모든 호수를 출력하는 배열[third] 를 만드세요. 
//문제3 [third] 에서 5호를 찾아서 [five]라는 변수에 담으세용
// /.+(?=@)/


//내장 함수를 이용한 것..-> a배열을 B와 합친다. 
// 1번 1 + 1 > temp(1+1) , 
//2번  temp + 1 ->  1 + 1 + 1
//(1 + 1) + 1

const sumArr = c동.concat(a동,b동);

console.log('sumArr:',sumArr);

const thrid = sumArr.filter(sumArr => sumArr.indexOf('30') == 1);
//

const arr2 = sumArr.filter(str => str.includes == '30');

console.log("arr2 ::: ", arr2);



console.log('thrid:',thrid);

const five = thrid.filter(thrid => thrid.indexOf('305') == 1);
console.log('five:', five);

//index.of -> 위치를 찾는다. 내가 찾고자 하는 문자열의 위치 또는 배열의 위치(index)


// const result = [];
// console.log("결과 : ", result)