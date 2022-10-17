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


// 함수
var add  = function(a:number){
  //...
}
var sum =function (a:number, b:number){
  //....
}

sum= add ; // 호환 가능 
add = sum;  // 호환 불가능 , sum은 인자가 두개이고 add는 하나이기 때문