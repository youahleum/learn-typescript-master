interface DropdownItem<T>{
 value:T;
 selected:boolean
}

const emails: DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

const numberOfProducts :DropdownItem<number>[]= [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

// function createDropdownItem(item:DropdownItem<string> | DropdownItem<number>) {
//   const option = document.createElement('option');
//   option.value = item.value.toString();
//   option.innerText = item.value.toString();
//   option.selected = item.selected;
//   return option;
// }

// // NOTE: 이메일 드롭 다운 아이템 추가
// emails.forEach(function (email) {
//   const item = createDropdownItem(email);
//   const selectTag = document.querySelector('#email-dropdown');
//   selectTag.appendChild(item);
// });


// 제네릭으로 받을 수 있는 타입을 .toString() 함수가 있는 타입으로 제한하는 것입니다. 
// toString() API는 객체의 내장 API입니다. 따라서 해당 객체를 프로토 타입으로 받고 있는 
// 문자, 숫자, 불린 등 주요 타입들에도 다 toString() API가 기본적으로 제공됩니다. 
// 따라서 1번 코드 보다는 문자, 숫자 이외에 더 많은 타입을 수용할 수 있는 형태가 됩니다.
function createDropdownItem<T extends {toString:Function}>(item:DropdownItem<T> ):HTMLOptionElement {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem<string>(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});
