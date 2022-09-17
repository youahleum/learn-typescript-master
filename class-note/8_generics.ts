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

const obj:Dropdown<number>={value:'abc', selected:true}
