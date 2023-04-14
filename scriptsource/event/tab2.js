// foreach 를 활용하여
//탭을 클릭하면 탭에 orange 포인트+내용에 맞는 p 만 남기기

//tab버튼 찾기
const tabs = document.querySelectorAll(".tab-button");

//content 내용 찾기
const contents = document.querySelectorAll(".tab-content");

//orange 클래스명 부착
//tab버튼 누르면 모든 버튼에 붙은 orange 클래스명 제거
//클릭한 버튼에 클래스명 부착

tabs.forEach((btn, i) => {
  //이벤트 대상이 되는 tab버튼에 이벤트 핸들러 작성
  btn.addEventListener("click", (e) => {
    //모든 tab버튼에 있는 orange 클래스명 제거
    tabs.forEach((tab) => {
      tab.classList.remove("orange");
    });

    //클릭된 tab버튼(이벤트가 발생한 요소)에만 orange 클래스명 부착
    e.target.classList.add("orange");

    //모든 content에 있는 show 클래스명 제거
    contents.forEach((cts) => {
      cts.classList.remove("show");
    });

    //클릭된 tab버튼에 맞는 content만 보여주기
    contents[i].classList.add("show");
  });
});
