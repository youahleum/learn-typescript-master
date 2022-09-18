// function logText(text){
//   console.log(text);
//   return text;
// }

// logText(10);
// logText('하이');
// logText(true);



function logText<T>(text:T):T{
  console.log(text);
  return text;
}

const stri= logText<string>('하이');
stri.split('');

const login= logText<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T>{
  value:T;
  selected:boolean;
}

const obj:Dropdown<string>={value:'abc', selected:true}


// 제네릭의 타입 제한
// function logTextLength<T>(text:T):T{
//   console.log(text.length);
//   return text;

// }

// logTextLength<string>('hi')

function logTextLength<T>(text:T[]):T[]{
  console.log(text.length);
  text.forEach(function(text){
    console.log(text)
  })
  return text;

}

// logTextLength<string>('hi')

logTextLength<string>(['hi', 'abc'])

// 제네릭 타입 제한2 - 정의된 타입 이용하기
interface LengthType{
  length:number;
}

function logTextLength2<T extends LengthType>(text:T):T{
  text.length;
  return text;
}