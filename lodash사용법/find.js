import _ from 'lodash'

const users = [
  {
    userId: '1',
    name: 'SOYEON'
  },
  {
    userId: '2',
    name: 'LEE'
  },
  {
    userId: '3',
    name: 'KIM'
  },
  {
    userId: '4',
    name: 'SUNG'
  },
  {
    userId: '5',
    name: 'MIN'
  }
]

// lodesh의 _.find(), 내용이 많은 배열 데이터 안에 특정 객체 데이터를 찾을때 유용
// 대상 users 에서 name: 'KIM' 인 객체를 찾는다.
const foundUser = _.find(users, { name: 'KIM' });
console.log(foundUser);

// _.findIndex(), 특정 객체 데이터의 인덱스 번호를 반환
const foundUserIndex = _.findIndex(users, {name: 'KIM'});
console.log(foundUserIndex);


_.remove(users, { name: 'SOYEON'})
console.log(users);

