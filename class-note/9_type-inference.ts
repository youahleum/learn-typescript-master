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
  value:'a',  // 위에서 제네릭으로 number를 선언해놓았기 때문에 K, T 모두 제네릭으로 number가 와야 한다
  tag:'a'
}

// Best Common Type   - union타입으로 Best Common Type을 지정해준다
var arr = [1,2,3, true, 'a'];
