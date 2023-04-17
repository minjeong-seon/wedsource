//오늘 날짜 확인-1 : 어제 날짜를 화면에 보여주기
const txYear = document.getElementById("txYear");
const selMonth = document.getElementById("selMonth");
const selDay = document.getElementById("selDay");

//박스오피스 순위 보여줄 영역 가져오기
const msg = document.getElementById("msg");
const box3 = document.querySelector(".box3");

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
}

function show(movieCd) {
  console.log("movieCd : " + movieCd);
  //영화 상세정보 요청하기
  let url =
    "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=";
  url += movieCd;
  console.log("영화 상세정보 : ", url);

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("데이터가 없습니다.");
      }
      return response.json();
    })
    .then((data) => {
      //console.log(data);

      const movieInfo = data.movieInfoResult.movieInfo;
      console.log(movieInfo);

      //movieInfo 에서 movieNm, movieNmEn, showTm, directors[0 - peopleNm], actors[전부] 추출해서 box3에 넣기
      let str = "<ul>";
      str += "<li>영화제목 : " + movieInfo.movieNm + "</li>";
      str += "<li>영어제목 : " + movieInfo.movieNmEn + "</li>";
      str += "<li>상영시간 : " + movieInfo.showTm + "분</li>";
      if (movieInfo.directors.length > 0) {
        str += "<li>감독 : " + movieInfo.directors[0].peopleNm + "</li>";
      } else {
        //감독이 없는 경우
        str += "<li>감독 : 없음 </li>";
      }

      //출연배우 : 전부 추출
      const length = movieInfo.actors.length;
      let peopleNm = "";
      movieInfo.actors.forEach((e, i) => {
        if (i == length - 1) {
          //▲마지막 출연자 뒤에는 콤마','가 붙지 않도록 지정
          peopleNm += e.peopleNm;
        } else {
          peopleNm += e.peopleNm + ", ";
        }
      });
      str += "<li>출연 : " + peopleNm + "</li>";
      str += "</ul>";
      box3.innerHTML = str;
    })
    .catch((err) => {
      box3.innerHTML = err;
    });
}

init();

// 확인 버튼 클릭 시 전일자 영화 순위 가져오기
document.getElementById("btn1").addEventListener("click", () => {
  let url =
    "	http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=";

  // 사용자가 선택한 날짜 가져오기
  let wantDate = txYear.value + selMonth.value + selDay.value;

  // url 과 연결
  url += wantDate;

  //console.log()로 확인
  console.log(url);

  // 데이터 요청 ==> ajax 형태로

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("주소를 확인해 주세요.");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // dailyBoxOfficeList 가져오기
      const dailyBoxOfficeList = data.boxOfficeResult.dailyBoxOfficeList;
      console.log(dailyBoxOfficeList);

      //가져올 데이터가 없으면(날짜가 안 맞아서) msg 창에 "조회된 정보가 없습니다." 띄우기
      if (dailyBoxOfficeList.length == 0) {
        msg.innerHTML = "조회된 정보가 없습니다.";
      } else {
        let str = "";
        // data에서 rank(rankInten) : movieNm 추출
        dailyBoxOfficeList.forEach((list) => {
          // 순위(rank)
          str += list.rank + " 위";
          // 전일자 대비 증감
          const rankInten = parseInt(list.rankInten);
          if (rankInten > 0) str += "(▲";
          else if (rankInten < 0) str += "(▼";
          else str += "(";

          str += rankInten + ") : ";

          //영화명
          str +=
            "<a href='#' onclick='javascript:show(" +
            list.movieCd +
            ")'>" +
            list.movieNm +
            "</a><br>";
        });

        msg.innerHTML = str;
      }
    })
    .catch((err) => {
      msg.innerHTML = err;
    });
});
