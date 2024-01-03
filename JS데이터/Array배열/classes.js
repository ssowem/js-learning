// ES6 Classes (class 문법)
class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

//// constructor는 클래스의 인스턴스 객체를 생성하고 초기화하는 메서드이다.
// constructor 내부함수로 매개변수를 받아서 사용
// class문법은 리액트에서도 많이 사용됨
// : 콜론과 function 키워드는 class문법 안에서 지원X 

const soyeon = new User('soyeon', 'lee');
const amy = new User('Amy', 'Clarke');
const neo = new User('Neo', 'Smith');


console.log(soyeon);
console.log(amy.getFullName());
console.log(neo.getFullName());

// new 키워드를 통해 user라는 함수를 실행함 => 이를 생성자 함수라고 한다.
// 하나의 객체데이터가 생성된다.

// 자바스크립트는 프로토타입 개념을 사용하고 있어서, 프로토타입 기반의 프로그래밍 언어라고도 한다.

// 생성자함수는 일반함수와 구분이 안되기 때문에 new라는 키워드와 같이 사용되는 함수는
// 파스칼 케이스(대문자로 시작해서 작성)로 해서 생성자함수로 구분할 수 있게 한다.(암묵적 개념)


