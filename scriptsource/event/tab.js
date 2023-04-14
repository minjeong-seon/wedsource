//하나씩 일일이 클래스명 부착/제거
//탭을 클릭하면 탭에 orange 포인트+내용에 맞는 p 만 남기기
//calsslist.add & remove + visibility:visible
const tab0 = document.querySelector(".list>li:first-child");
const tab1 = document.querySelector(".list>li:nth-child(2)");
const tab2 = document.querySelector(".list>li:last-child");

//tab버튼이 클릭되면 맞는 content(div) 내용 보여지기
const content0 = document.querySelector(".mt-5>div:nth-child(2)");
const content1 = document.querySelector(".mt-5>div:nth-child(3)");
const content2 = document.querySelector(".mt-5>div:last-child");

//orange 클래스명 부착
//tab버튼 누르면 모든 버튼에 붙은 orange 클래스명 제거
//클릭한 버튼에 클래스명 부착

// tab0.addEventListener("click", () => {
//   tab0.classList.add("orange");
//   tab1.classList.remove("orange");
//   tab2.classList.remove("orange");
//   content0.classList.add("show");
//   content1.classList.remove("show");
//   content2.classList.remove("show");
// });

// tab1.addEventListener("click", () => {
//   tab0.classList.remove("orange");
//   tab1.classList.add("orange");
//   tab2.classList.remove("orange");
//   content0.classList.remove("show");
//   content1.classList.add("show");
//   content2.classList.remove("show");
// });

// tab2.addEventListener("click", () => {
//   tab0.classList.remove("orange");
//   tab1.classList.remove("orange");
//   tab2.classList.add("orange");
//   content0.classList.remove("show");
//   content1.classList.remove("show");
//   content2.classList.add("show");
// });
