// this
// 일반함수는 호출 위치에서 따라 this를 정의한다.
// 화살표함수는 자신이 선언된 함수가 만들어진 범위에서 this를 정의한다.

const soyeon = {
  name: 'Soyeon',
  //일반(펑션)함수
  normal: function () {
    console.log(this.name)
  },
  //화살표함수
  arrow: () => {
    console.log(this.name)
  }
};
soyeon.normal();
soyeon.arrow();


const ddangja = {
  name: 'DdangJa',
  normal: soyeon.normal, //()소괄호가 없기때문에 함수실행(호출)이 아닌 함수할당이 된다.
  arrow: soyeon.arrow // 위에 soyeon 함수에 있는 데이터가 할당이 되는 구조
};
ddangja.normal(); //ddangja안에 있는 메소드 normal은 연결되어있는 객체가 ddangja이므로, 즉 ddangja=this임
ddangja.arrow();


