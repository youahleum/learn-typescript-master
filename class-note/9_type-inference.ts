// 타입 추론 기본 1
var a=10;

function getB(b=10){
  var c='hi';
  return b+c;
}

10+'10'// 1010

// 타입 추론 기본 2
// interface Dropdown2<T>{
//   value:T;
//   title:string;
// }

// var shoppingItem:Dropdown2<string>={
//   value:'abc',
//   title:'hello'
// }

// 타입 추론 기본 3
interface Dropdown2<T>{
  value:T;
  title:string;
}
interface DetailedEropdown<K> extends Dropdown2<K>{
  description:string;
  tag:K;
}

var detailedItem:DetailedEropdown<number>={
  title:'abc',
  description:'ab',
  value:'a',
  tag:'a'

}