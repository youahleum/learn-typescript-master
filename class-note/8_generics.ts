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
str.split('');

const login= logText<boolean>(true);


