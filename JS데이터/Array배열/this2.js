// This , 생성자함수에 응용된 예시
function User(name) {
  this.name = name
}

User.prototype.normal = function () {
  console.log(this.name);
}
User.prototype.arrow = () => {
  console.log(this.name);
}

const Lee = new User('Lee');

Lee.normal();
Lee.arrow();