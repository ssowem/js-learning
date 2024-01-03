const user = {
  name: 'SOYEON',
  age: 92,
  emails:[
    'soyeon@gmail.com',
    'lsy@naver.com'
  ]
};

// JSON.stringify()객체데이터를 문자데이터화한다.
// localStorage.setItem 
// localStorage.setItem('user', JSON.stringify(user));
// console.log(JSON.parse(localStorage.getItem('user')));
// localStorage.removeItem('user');

const str = localStorage.getItem('user');
const obj = JSON.parse(str);
obj.age = 22;
console.log(obj);
//JSON.stringify(obj)객체데이터를 문자데이터화시키기 위함 
localStorage.setItem('user', JSON.stringify(obj))