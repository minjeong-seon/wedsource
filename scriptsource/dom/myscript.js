//.container 요소 찾기
let container = document.querySelector(".container");
console.log(container);

//.pagination 안의 첫번째 li 요소 찾기
let fisrtLi = document.querySelector(".pagination li:first-child");
console.log(fisrtLi);

//data-target=#navbarNav 속성을 가진 요소 찾기
const navbar = document.querySelector("[data-target='#navbarNav']");
console.log(navbar);

//id가 navbarNav인 요소 찾기
let navbarNav = document.querySelector("#navbarNav");
console.log(navbarNav);

//.pagination 안의 모든 li 요소 찾기
let allLi = document.querySelectorAll(".pagination");
console.log(allLi);
allLi.forEach((element) => {
  console.log(element.innerHTML);
});
