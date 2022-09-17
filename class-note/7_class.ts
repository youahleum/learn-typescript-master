
class PersonClass{
// function과 다르게 class에서는 안에 이렇게 작성
// 변수에 대한 유효범위까지 설정이 가능하다
// class 안에서만 사용시 private , 그렇지 않으면 기본적으로 public, readonly: 접근만 가능, 변경은 불가능
  private name:string;
  public age:number;
  readonly log:string;

  constructor(name:string, age:number){
    this.name=name;
    this.age=age;
  }
}