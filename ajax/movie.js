//오늘 날짜 확인-1 : 어제 날짜를 화면에 보여주기
const txYear = document.getElementById("txYear");
const selMonth = document.getElementById("selMonth");
const selDay = document.getElementById("selDay");

function init() {
  const date = new Date();
  //년
  let year = date.getFullYear();
  txYear.value = year;

  //월
  let month = date.getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  selMonth.value = month;

  //일-1
  let day = date.getDate() - 1;
  if (day < 10) {
    day = "0" + day;
  }
  selDay.value = day;

  //
}
init();
