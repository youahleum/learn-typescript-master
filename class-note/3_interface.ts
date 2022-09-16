interface User{
  age:number;
  name:string;
}

// 변수에 인터페이스 활용
var seho :User={
  age:33,
  name:'세호'
}

// 함수에 인터페이스 활용
function getUser(user:User){
  console.log(user)
}
const capt={
  name:"캡틴",
  age:100
}

getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용

interface SumFunction{
  (a:number, b:number):number;
}

var sum:SumFunction;
sum=function(a:number,b:number):number{
  return a+b;
}

//인덱싱
interface StringArray{
  [index:number]:string;
}

var arr2:StringArray=['a','b','c'];

// arr2[0]=10;

// 딕셔너리 패턴
interface StringRegexDicrionary{
  [key:string]:RegExp;
}

var obj2:StringRegexDicrionary={
  //sth:/abc/,
  cssFile:/\.css$/,
  jsFile:/\.js$/
}
// obj2['cssFile']='a'  

Object.keys(obj).forEach(function(value){})

// 인터페이스 확장
interface Person{
  name:string;
  age:number;
}

// interface Developer{
//   name:string;
//   age:number;
//   language:string;
// }
// -> 확장  :  extends 후 더해줄 interface를 입력하면 함께 포함이 되어 위의 주석된 developer와 같이 표현이 된다.
interface Developer extends Person{
  language:string;
}

var capt2:Developer={
  language:'ts',
  age:100,
  name:'캡틴'
}