interface Developer3{
  name:string;
  skill: string;
}

interface Person4{
  name:string;
  age:number;
}


// 아래 함수의 형식의 유니온 타입은 공통된 부분만 나타낸다 

function introduce():Developer3 | Person4{
  return {name:'Tony', age:33 , skill: 'Iron Making'}

}

var tony=introduce();

// 그렇기 때문에 공통된 name만 나타날것 
console.log(tony.skill);
console.log(tony.name);

// 만약 skill을 나타내고 싶다면 타입단언을 사용해볼수 있다.
if((tony as Developer3).skill){
  var skill = (tony as Developer3).skill;
  console.log(skill);
}else if((tony as Person4).age){
  var age=(tony as Person4).age;
  console.log(age)
}
