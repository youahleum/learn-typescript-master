

// 숫자형 이넘 

// enum Shoes{
//   Nike,
//   Adidas
// }

// 이넘의 값을 따로 지정하지 않으면 숫자형 이넘으로 취급을 한다
// var myShoes = Shoes.Nike;
// console.log(myShoes);  // 0 


// 문자형 이넘
enum Shoes{
  Nike ='나이키',
  Adidas='아디다스'
}
var myShoes = Shoes.Nike;
console.log(myShoes);  // 나이키 

// 예제
enum Answer{
  Yes ='Y',
  No='N'
}

function askQuestion(answer:Answer){
  if(answer===Answer.Yes){
    console.log('정답입니다.')
  }
  if(answer===Answer.No){
    console.log('오답입니다.')
  }
}
askQuestion(Answer.Yes);
askQuestion('Yes');