import _ from 'lodash'

// 얕은 복사 (Shallow copy), 깊은 복사(Deep copy)

const user = {
  name: 'Soyeon',
  age: 92,
  emails: ['yeon@getMaxListeners.com']
};

// 첫번째인수 대상객체 두번째인수 출처객체
// {} 하나의 데이터가 되기때문에(리터럴방식)새로운객체로 새로운 메모리에 할당된다
// const copyUser = Object.assign({}, user);

//Object.assign 이 아닌 전개연산자를 사용한 얕은복사방법
// const copyUser = {...user};

// 깊은복사
const copyUser = _.cloneDeep(user);
console.log(copyUser === user);

user.age = 22;
console.log('user', user);
console.log('copyUser', copyUser);

console.log('------');
console.log('------');

// push()메소드는 배열데이터의 가장 뒷부분의 새로운 아이템으로 push의 인수를 밀어넣는다.
user.emails.push('lsy@naver.com');
console.log(user.emails === copyUser.emails);
console.log('user', user);
console.log('copyUSer', copyUser);


//특정객체데이터혹은배열데이터 참조형데이터를 복사할때는 얕은복사로도
//문제없이복사가될때는 오브젝트어싸인,전개연산자통해 복사 ㄱㄱ

//참조형데이터가 내부에 또다른참조형데이터를 갖고있을때는 깊은복사를 통해 ㄱㄱ
//순수 js로직으로는 복잡하기에 lodash패키지로 cloneDeep 내부메소드를 사용해서
//깊은복사사용가능 

// => 객체나 배열 복사할때는 그 내부에 또다른 참조 데이터가 없다라는 전제하에선
// 간단하게 얕은 복사를 사용하면 됨
// 특정한 참조 데이터 내부에 또 다른 참조데이터가 있을때는 깊은복사를 사용 