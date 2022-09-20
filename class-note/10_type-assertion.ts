// 타입 단언(type assertion)
//개발자가 해당 타입에 대해 확신이 있을 때 사용하는 타입 지정 방식

var ab;
ab=20;
ab='a'
var b=ab as string

// DOM API 조작
var div=document.querySelector('div');
if(div){
  div.innerText
}