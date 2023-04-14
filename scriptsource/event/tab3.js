//이벤트 버블링을 활용하여
//탭을 클릭하면 탭에 orange 포인트+내용에 맞는 p 만 남기기

//이벤트 버블링: 자식에서 발생한 이벤트가 부모로 전달되는 것
//e.target : 이벤트가 일어난 대상
//e.currentTarget : 이벤트가 일어난 대상 + 버블링 된 대상
//이벤트 대상(tab-button)의 부모 = ul(.list)에게 이벤트가 전달되도록 작성
const tabParent = document.querySelector(".list");
const tabs = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

// tabs.forEach((tab) => {
//   tab.addEventListener("click", (e) => {
//     console.log(e.currentTarget.className);
//   });
// });

function tabOpen(i) {
  //모든 tab버튼에 있는 orange 클래스명 제거
  tabs.forEach((tab) => {
    tab.classList.remove("orange");
  });

  //모든 content에 있는 show 클래스명 제거
  contents.forEach((cts) => {
    cts.classList.remove("show");
  });

  //클릭된 tab버튼(이벤트가 발생한 요소)에만 orange 클래스명 부착
  tabs[i].classList.add("orange");

  //클릭된 tab버튼에 맞는 content만 보여주기
  contents[i].classList.add("show");
}

// tabParent.addEventListener("click", (e) => {
//   if (e.target == tabs[0]) {
//     tabOpen(0);
//   } else if (e.target == tabs[1]) {
//     tabOpen(1);
//   } else {
//     tabOpen(2);
//   }
// });

//data- 이용 : 조건문 안 쓰려고
//data- : 전역속성(dash- 뒤에 이름은 자유롭게 사용 가능)
//      -이름을 지을 때 index-number로 지정 > 가져올 때는 indexNumber로(카멜케이스)
tabParent.addEventListener("click", (e) => {
  //이벤트가 발생한 대상의 data- 값 가져오기
  tabOpen(e.target.dataset.id);
});
