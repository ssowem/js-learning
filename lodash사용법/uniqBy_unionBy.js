import _ from 'lodash';

const usersA = [
  { userId: '1',
    name: 'SOYEON'
  },
  { userId: '2',
    name: 'KIM'
  }
]

const usersB = [
  { userId: '1',
    name: 'SOYEON'
  },
  { userId: '3',
    name: 'SUNG' 
  }
]

const usersC = usersA.concat(usersB);
console.log('concat', usersC);
// uniqBy()메소드 : 특정 속성기준으로 중복된요소를 제거함
// 첫번째인수:중복된데이터가 들어가있는 배열데이터
// 두번째인수:중복을 구분할 고유한 속성이름
console.log('uniqBy', _.uniqBy(usersC, 'userId'));

//unionBy()메소드
const usersD = _.unionBy(usersA, usersB, 'userId');
console.log('unionBy', usersD);

// 차이점
// uniqBy() 하나의 배열에서 중복을 제거함 (위 예시 concat메소드로 합쳐진 배열)
// unionBy() 여러 배열을 합치고 중복을 제거하여 모든 배열의 고유한 요소를 새롭게 반환 