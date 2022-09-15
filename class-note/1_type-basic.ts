// js 문자열 선언
// var str = "hello";

// ts 문자열 선언
var str: string = "hello";
// ts 숫자
let num: number = 10;
// ts 배열
let arr: Array<number> = [1, 2, 3]; // 이 배열에는 number만 들어갈수 있다.
let items: number[] = [1, 2, 3]; // 배열 리터럴을 통해서 간단하게 표현할수도 있다.
let heroes: Array<string> = ["capt", "Thor"];

// ts 튜플 : 배열의 특정위치의 타입까지 정의
let address: [string, number] = ["gangnam", 2];

// ts 객체
let obj: object = {};
// let person: object = {
//   name: "capt",
//   age: 100,
// };
let person: {
  name: string;
  age: number;
} = {
  name: "thor",
  age: 1000,
};

// ts 진위값
let show: boolean = true;
