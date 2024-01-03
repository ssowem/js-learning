// 생성자 함수는 new라는 키워드를 통해
// 기본적인 로직을 복제해나가면서 새로운 데이터들을 정의한다.

// 생성자함수 생성
class Vehicle {
  constructor(name, wheel) {
    this.name = name;
    this.wheel = wheel;
  }
}
// instance 생성
// new 키워드를 통해 Vehicle 생성자 함수(=클래스)를 실행.
const myVehicle = new Vehicle('운송수단', 2);
console.log(myVehicle);


//클래스를 사용 = 미리 만들어진 정보에 추가적으로 살을 붙여
//새로운 기능들을 확장(상속) 개념으로 관리를 해줄수 있다.

// extends(확장,상속)
// Vehicle에 대한 기본적인 정보를 Bicycle 이라는 새로운 클래스로
// 확장(=상속)을 해서 이 내부에서 사용하겠다는 의미를 갖게 됨.
// super(함수)는 extends 뒤쪽에있는 확장된 클래스 Vehicle를 의미하게 됨.
class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel);
  }
}
const myBicycle = new Bicycle('삼천리자전거', 2);
const daughtersBicycle = new Bicycle('세발자전거', 3);
console.log(myBicycle);
console.log(daughtersBicycle);

// 기존 정보와 추가적인(필요 정보 this.license=license)내용으로
// 'Vehicle 운송수단'에서 'Car 자동차'라는 정보로 바뀌게 함.
class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel);
    this.license = license;
  }
}
const myCar = new Car('벤츠', 4, true);
const daughtersCar = new Car('포르쉐', 4 , false);
console.log(myCar);
console.log(daughtersCar);
