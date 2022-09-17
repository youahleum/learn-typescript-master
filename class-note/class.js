function Person(name, age){
  this.name=name;
  this.age=age;
}
// 위 Person함수와 아래 Person클래스는 완전 동일!!


class Person{
  // 클래스 로직
  constructor(name, age){
    console.log('생성 되었습니다')
    this.name=name;
    this.age=age;
  }
}

var hey=new Person('hey', 30);
console.log(hey)