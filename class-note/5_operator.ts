// 연산자를 이용한 타입 정의- Union type
// 타입가드 : 특정 타입으로 타입의 범위를 좁혀나가는 (필터링 하는) 과정

// function logMessage(value: any){
//   console.log(value);
// }

// logMessage('hello');
// logMessage(10);



function logMessage(value: string |number){
  console.log(value);
  if(typeof value==='number'){
    value.toLocaleString();
  }
  if(typeof value ==='string'){
    value.toString()
  }
  throw new TypeError('value must be string or number')
}

logMessage('hello');
logMessage(10);
// logMessage(true);


var uni: string | number | boolean;
// 인터섹션 :  작성된 타입이 모두 포함
var inter: string & number & boolean;

interface Developer2{
  name:string;
  skill:string;
}
interface Person{
  name:string;
  age:number;
}

// union 타입
function askSomeone1(someone: Developer2 | Person){
// someone.name;
// someone.skill;
// someone.age;
}
askSomeone1({ name:'디벨로퍼', skill:'웹 개발'});
askSomeone1({ name:'디벨로퍼', age:30})

// 인터섹션 : 합집합으로 Developer2와 Person에 포함된 모든것들이 가능하다
function askSomeone2(someone: Developer2 & Person){
  // someone.name;
  // someone.skill;
  // someone.age;
  }
  askSomeone2({ name:'디벨로퍼', skill:'웹 개발', age:30})
  