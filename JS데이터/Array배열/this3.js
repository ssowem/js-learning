//setTimeout, 콜백함수를 사용한 this 예시

const timer = {
  name: 'soyeon',
  timeout: function () {
    setTimeout(() => {
      console.log(this.name)
    }, 2000)
  }
};
timer.timeout();