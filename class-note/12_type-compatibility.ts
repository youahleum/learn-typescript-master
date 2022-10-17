// 타입 호환

// 인터페이스
interface Al{
name:string;
skill:string;
}
// interface Js{
// name:string;
// }

class Js{
  name:string;
}

var al: Al;
var js : Js;


// 작은 것에 큰 것을 넣을 수 있다.
al= js;

js= al;


// 함수  : 작은 범위의 함수안에 큰 범위으 함수를 할당하려고 하면 할당이 되지 않는다
var add  = function(a:number){
  //...
}
var sum =function (a:number, b:number){
  //....
}

sum= add ; // 호환 가능 
// add = sum;  // 호환 불가능 , sum은 인자가 두개이고 add는 하나이기 때문

// 제네릭
interface Empty<T>{
  //..
}

var empty1:Empty<string>;
var empty2:Empty<number>;

empty1 = empty2; // 현재 interface Empty가 비어 있는 상황이기 때문에 둘다 호환이 된다 / 현재 빨간에러는 무시하고 보자
empty2 = empty1;  

interface NotEmpty<T>{
  data:T;
}
var notempty1:NotEmpty<string>;
var notempty2:NotEmpty<number>;

notempty1 =notempty2;  // NotEmpty 안에 data가 들어있기 때문에 호환이 되지 않는다
notempty2 =notempty1; 