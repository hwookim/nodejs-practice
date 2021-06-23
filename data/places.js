const PLACES = [
  {
    id: 0,
    name: "진땡이 순대국",
    category: "한식",
    station: "충무로역",
    phone: "02-2263-8441",
    address: "서울 중구 필동로 15-9",
    location: {
      latitude: 37.56019,
      longitude: 126.99655,
    },
    comment: "허기진 배를 가득 채워줄 든든한 국밥, 동국인의 해장 no.1",
    menu: "순대국",
    price: 7_000,
    score: 4.21,
    photo:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MDZfMTEw%2FMDAxNjE3Njg1NDMzMTMy.2rH8Y8I1rPJSH5OeDorZp_2wFrnXHlIWkxW2kwuwYegg.q1cEDFSctQ7JqOqkZjnrrSNI7mQuFCLHQ54zQ13MDjwg.JPEG.slangword%2F20210402%25A3%25DF114758.jpg",
    naver: "http://naver.me/Gw5QaB06",
    kakao: "https://place.map.kakao.com/14519636",
  },
  {
    id: 1,
    name: "동대닭한마리",
    category: "한식",
    station: "충무로역",
    phone: "02-2269-5596",
    address: "서울 중구 서애로 16-5",
    location: {
      latitude: 37.56102,
      longitude: 126.99737,
    },
    comment: "마음의 고향 빨간 간판집",
    menu: "닭한마리(2 ~ 3인)",
    price: 22_000,
    score: 4.46,
    photo:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20201231_300%2F16094242382180rEh3_JPEG%2Fupload_552356f4598ebf3d712478b9dc14df00.jpeg",
    naver: "http://naver.me/54VLHbnS",
    kakao: "https://place.map.kakao.com/25085251",
  },
  {
    id: 2,
    name: "산타돈부리",
    category: "일식",
    station: "충무로역",
    phone: "0507-1348-8151",
    address: "서울 중구 서애로 19",
    location: {
      latitude: 37.56072,
      longitude: 126.99753,
    },
    comment: "점심시간 핫플레이스, 사케동도 일품이지만 모든 메뉴가 탁월",
    menu: "사케동",
    price: 10_500,
    score: 4.36,
    photo:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDExMDJfMjY3%2FMDAxNjA0MjkxMDU2OTUz.HQQLn0G7NwGqNLtsahi5ceeHWSJgCg9kjT_TqRndLoog.WbvDMEDwAd5YqzJ-5adMTmTJKiapN8fK3u-Wz4yYIy0g.JPEG.civil95%2F1604291038523.jpg",
    naver: "http://naver.me/xH2abpNz",
    kakao: "",
  },
  {
    id: 3,
    name: "라화방",
    category: "중식",
    station: "충무로역",
    phone: "02-2272-7792",
    address: "서울 중구 서애로1길 10",
    location: {
      latitude: 37.56097272306064,
      longitude: 126.99846322708959,
    },
    comment: "꿔바로우가 일품",
    menu: "마라탕",
    price: 0,
    score: 4.48,
    photo:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210504_299%2F16201213269913F0cs_JPEG%2Fupload_ca759853588d9a978ef93e500755709d.jpeg",
    naver: "http://naver.me/xScNAeCg",
    kakao: "https://place.map.kakao.com/542765616",
  },
  {
    id: 4,
    name: "일미정",
    category: "한식",
    station: "동대입구역",
    phone: "02-2264-5800",
    address: "서울 중구 동호로30길 38",
    location: {
      latitude: 37.561016794195474,
      longitude: 127.00500306941825,
    },
    comment: "백반으로 한끼 뚝딱",
    menu: "숯불구이정식",
    price: 8_000,
    score: 4.37,
    photo:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA3MjhfMTQ2%2FMDAxNTk1OTI0MDg0NDQy.YXnXox6smTD5ds8eMp5qo_jDNMYj3JwrB1thTXXq4fIg.Mwk-LJGLuDNng1TK6pc4LZzNORgIMja9g5U6Xxd6e2Eg.JPEG.mingong12%2FNaverBlog_20200728_171443_08.jpg",
    naver: "http://naver.me/xivqJAsO",
    kakao: "https://place.map.kakao.com/10738696",
  },
  {
    id: 5,
    name: "제육원소",
    category: "한식",
    station: "동대입구역",
    phone: "0507-1310-7873",
    address: "서울 중구 장충단로7길 12-1",
    location: {
      latitude: 37.56247347979862,
      longitude: 127.00576202708956,
    },
    comment: "제육과 고수의 조합, 엄청난 시너지",
    menu: "제육볶음 정식",
    price: 7_500,
    score: 4.24,
    photo:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210426_231%2F1619410386246TVNuo_JPEG%2Fupload_74c561fc045b7f8a49862fa86c2566c6.jpg",
    naver: "http://naver.me/FWJP92YN",
    kakao: "https://place.map.kakao.com/1976959727",
  },
  {
    id: 6,
    name: "미스터돈",
    category: "일식",
    station: "동대입구역",
    phone: "02-2275-2711",
    address: "서울 중구 퇴계로50길 41",
    location: {
      latitude: 37.56083807498169,
      longitude: 127.0011277559252,
    },
    comment: "떡볶이도 맛있는 돈까스집",
    menu: "Mr.돈까스",
    price: 7_800,
    score: 4.55,
    photo:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODEwMjVfOTUg%2FMDAxNTQwNDY3MDA5OTEw.PM-W3nMM-bX3jbku0aDhbRF-NK6Ndd962lhc0S3KdZwg.nB4wuhnoB2dmkcTLi-xS9TH_12h9hdYQKKT6x8Y9eLwg.JPEG.dkdlfjqmwnsl%2F2018-10-24-11-53-54.jpg",
    naver: "http://naver.me/GSiQEQlV",
    kakao: "https://place.map.kakao.com/25464948",
  },
  {
    id: 7,
    name: "맹산식당",
    category: "한식",
    station: "동대입구역",
    phone: "02-2266-1224",
    address: "서울 중구 동호로30길 37",
    location: {
      latitude: 37.56115077979901,
      longitude: 127.00504048476093,
    },
    comment: "고향집밥이 생각나는 푸근한 맛과 친절한 사장님",
    menu: "제육볶음",
    price: 8_000,
    score: 4.47,
    photo:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAxMDRfMTAy%2FMDAxNjA5NzU0ODQyMzAy.6PvkwtDM-5rwwAK_dhxq1fRqc4K6778Fxt7g82cruyYg.hVF6fkJjWlscWXcimIhvftQBxfMwjUc7g0GnY9YlDd4g.JPEG.symin67%2F2020-12-16_039.jpg",
    naver: "http://naver.me/x1egTePq",
    kakao: "https://place.map.kakao.com/13291851",
  },
  {
    id: 8,
    name: "파파포",
    category: "기타",
    station: "충무로역",
    phone: "0507-1365-8292",
    address: "서울 중구 필동로 15-7",
    location: {
      latitude: 37.56083068131759,
      longitude: 126.99650290278588,
    },
    comment:
      "고수들만 안다는 전설의 쌀국수, 양과 맛을 모두다 챙겨버린 욕심의 그집!",
    menu: "불고기 쌀국수",
    price: 7_000,
    score: 4.5,
    photo:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210118_11%2F1610936082797nazDM_JPEG%2Fupload_671c06aeff5791148ce7ad1725954dd6.jpeg",
    naver: "http://naver.me/5bXujB5O",
    kakao: "http://kko.to/ZUcIJWkDM",
  },
  {
    id: 9,
    name: "국수가",
    category: "한식",
    station: "충무로역",
    phone: "02-2263-9289",
    address: "서울 중구 서애로 12-8",
    location: {
      latitude: 37.56150941953086,
      longitude: 126.99766423717969,
    },
    comment: "국수가 먹고 싶다면 국수가를 가~",
    menu: "바지락 칼국수",
    price: 6_000,
    score: 4.47,
    photo:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTAyMTBfMjk5%2FMDAxNTQ5ODAxNjIzNjYy.dS9DIsoImI-DWmL2Bs9kp9PbRBh8kuTZcN05vnsUqeEg.WruhygjRnOGnBVw9FWpYyLQXe-ci1xIDjtwe3PTaZo0g.JPEG.seven_lovery%2FIMG_8211.jpg",
    naver: "http://naver.me/FNmaAOwf",
    kakao: "http://kko.to/fSIAGWkY0",
  },
  {
    id: 10,
    name: "남원본가추어탕",
    category: "한식",
    station: "동대입구역",
    phone: "02-2267-7373",
    address: "서울 중구 동호로24길 27-9",
    location: {
      latitude: 37.56074031054201,
      longitude: 127.00480231255331,
    },
    comment: "동대근처에 추어탕 집이 있었다고? 고소함과 걸쭉함으로 승부한다!",
    menu: "추어탕",
    price: 10_000,
    score: 4.4,
    photo:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxOTExMDNfMTMy%2FMDAxNTcyNzQ1NjgxOTQw.E8wphUPtjCsir5PikCmESxlnGuMKzc4Hg4LOroS6IcEg.UA2RxSAn4z4_oCc40eOKt_NjzLCy5Ua1y640WD8U9UQg.JPEG.dingding1234%2Foutput_2936425939.jpg",
    naver: "http://naver.me/GY2algUb",
    kakao: "http://kko.to/9TUAViCDj",
  },
  {
    id: 11,
    name: "2점5 닭갈비",
    category: "한식",
    station: "동대입구역",
    phone: "02-2261-5579",
    address: "서울 중구 퇴계로56길 41",
    location: {
      latitude: 37.56258560354788,
      longitude: 127.00607686077839,
    },
    comment:
      "이름은 2점5지만 평점은 4.5를 넘는 전설의 집, 닭갈비가 이보다 저렴한 곳은 없었다..",
    menu: "닭갈비정식",
    price: 8_000,
    score: 4.56,
    photo:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA0MjFfMjgg%2FMDAxNjE5MDAyMTcyNjky.YGZsEBWef6rWvsZex6e6l0DjWDE5mQuV0v-_-o3Pb2Yg.krvZPmPxFjzxgOuWwxNwvVOfkabCDsMJUeIW9lxrVjUg.JPEG.tori0113jm%2F20210420%25A3%25DF150414.jpg",
    naver: "http://naver.me/xkxqLSvl",
    kakao: "http://kko.to/9TUAViCDj",
  },
  {
    id: 12,
    name: "모리짱",
    category: "일식",
    station: "충무로역",
    phone: "02-2271-0393",
    address: "서울 중구 서애로 12",
    location: {
      latitude: 37.56137516557949,
      longitude: 126.99792422419333,
    },
    comment:
      "일본 고유의 분위기와 맛과 가격까지 모두 착한 집인데 심지어는 사람도 없다.. 노래만 빼면 다 좋은 곳, 혼밥러들의 성지",
    menu: "돈코츠 라멘",
    price: 7_000,
    score: 4.4,
    photo:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNjEwMjJfMTU5%2FMDAxNDc3MTA4NDQ4MDQ0.MF4k7oulh4uLMnulkHJwytwXQg5BnaZs9uou7k3C8f4g.rQ46RQ3GUtsgvGbjpRSkIVNIrpoTcbwiZOGmwtX8x4Mg.JPEG.boringblog%2FDSC03417.JPG",
    naver: "http://naver.me/IIqYOG3R",
    kakao: "http://kko.to/hIVPmiCD0",
  },
  {
    id: 13,
    name: "남산골",
    category: "한식",
    station: "충무로역",
    phone: "02-2278-2777",
    address: "서울 중구 서애로1길 12-1",
    location: {
      latitude: 37.56094859058187,
      longitude: 126.99875443953724,
    },
    comment:
      "동국인들의 든든한 한끼식사, 구수함에 빠져보고 싶다면 이리 오시길 ",
    menu: "제육쌈밥",
    price: 7_000,
    score: 4.35,
    photo:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20200528_158%2F15905925935090Ny6p_JPEG%2Fupload_f0a4baabf9821fda48e9a465d7300c74.jpg",
    naver: "http://naver.me/5girvPKV",
    kakao: "http://kko.to/mEHUyWkDj",
  },
  {
    id: 14,
    name: "강서",
    category: "중식",
    station: "충무로역",
    phone: "02-2266-0466",
    address: "서울 중구 서애로1길 6",
    location: {
      latitude: 37.561165361213156,
      longitude: 126.9983680278973,
    },
    comment: "고추짜장, 볶음밥 개 꿀맛, 고추 볶음밥이 나오면 참 좋을텐데..",
    menu: "고추짜장",
    price: 6_500,
    score: 4.26,
    photo:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210501_151%2F1619879824953JpKHl_JPEG%2Fupload_df2e82478886c3f85e799b1667c0ed9a.jpeg",
    naver: "http://naver.me/5nca0KnN",
    kakao: "http://kko.to/lN3x43kYp",
  },
  {
    id: 15,
    name: "가보리",
    category: "한식",
    station: "동대입구역",
    phone: "02-2274-6719",
    address: "서울 중구 퇴계로50길 14",
    location: {
      latitude: 37.70014042776261,
      longitude: 126.95645527362808,
    },
    comment: "고등어가 넘나 부드러운 것, 싼 가격에 배터지게 먹어보자",
    menu: "고등어구이",
    price: 7_000,
    score: 4.54,
    photo:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20200916_129%2F1600227402084yBln3_JPEG%2Fupload_610a59006c1f2cfbaa96b6c95a9a86a1.jpg",
    naver: "http://naver.me/xswCQe4n",
    kakao: "http://naver.me/xswCQe4n",
  },
  {
    id: 16,
    name: "호반정",
    category: "한식",
    station: "충무로역",
    phone: "02-2275-7666",
    address: "서울 중구 퇴계로48길 6",
    location: {
      latitude: 37.56247506796654,
      longitude: 127.00046189796676,
    },
    comment: "모든 메뉴 6000원, 집밥식 혼밥 맛집",
    menu: "돼지갈비구이백반",
    price: 6_000,
    score: 4.1,
    photo:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTAzMjZfNjcg%2FMDAxNjE2NzY2MjM0MjQ2.zNcLrPzNBA150H9Sp-VGyAER2UJQzkhpZ3pQdECcaDEg.AVqJuDGcQP1C3B9LKVErp5icXU23QAsSu0iBAqrvPfQg.JPEG.slangword%2F20210322%25A3%25DF184658.jpg",
    naver: "http://naver.me/Gw5dBOvh",
    kakao: "https://place.map.kakao.com/8682194",
  },
  {
    id: 17,
    name: "브라운호프",
    category: "기타",
    station: "충무로역",
    phone: "02-2279-0271",
    address: "서울특별시 중구 묵정동 32-4",
    location: {
      latitude: 37.5624239634227,
      longitude: 126.99974095389759,
    },
    comment: "옛날 스타일의 호프집, 그리고 넘치는 서비스",
    menu: "후라이드 한마리",
    price: 15_000,
    score: 4.5,
    photo:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MDNfNjgg%2FMDAxNjIyNjk1MzA3MjEx.iQUKzzSeyl4lAA0B9_grb5SxKeEhwIyCW7p2pKJMiO8g.1PgDl6AxF7iDLpiwRSBtB5WWrMoeQtRA3kKE1y4yqkUg.JPEG.cowa-bunga%2FKakaoTalk_20210603_114428284_19.jpg",
    naver: "http://naver.me/GVANPYXJ",
    kakao: "https://place.map.kakao.com/8682194",
  },
  {
    id: 18,
    name: "필동함박",
    category: "양식",
    station: "충무로역",
    phone: "02-6428-2204",
    address: "서울특별시 중구 필동 퇴계로 218-16",
    location: {
      latitude: 37.560994175997614,
      longitude: 126.99636205574836,
    },
    comment: "백종원의 골목식당에 나온 그집! 함박스테이크를 먹고 싶다면 여기로",
    menu: "투움바 함박",
    price: 9_500,
    score: 3.4,
    photo:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210111_260%2F1610361905481CsGzv_JPEG%2Fupload_ef9df8e087d49d429489d0cf183d0d45.jpeg",
    naver: "http://naver.me/xcKJJViG",
    kakao: "https://place.map.kakao.com/1347856721",
  },
  {
    id: 19,
    name: "필동멸치국수",
    category: "한식",
    station: "충무로역",
    phone: "0507-1353-2886",
    address: "서울 중구 퇴계로 210-4 1층",
    location: {
      latitude: 37.56129638487937,
      longitude: 126.99505778458398,
    },
    comment: "백종원의 골목식당에 나온 그집! 시원하고 양 많은 멸치국수가 일품",
    menu: "필동멸치국수",
    price: 5_000,
    score: 4.2,
    photo:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210508_83%2F1620448267888fbICP_JPEG%2Fupload_b9e97eb464bee2638031d2ec475cabd4.jpg",
    naver: "http://naver.me/xZDGLUqy",
    kakao: "https://place.map.kakao.com/20615157",
  },
  {
    id: 20,
    name: "파스타마켓",
    category: "양식",
    station: "충무로역",
    phone: "0507-1301-0355",
    address: "서울 중구 퇴계로 210-14",
    location: {
      latitude: 37.562273113661995,
      longitude: 126.9942530034468,
    },
    comment: "충무로 데이트코스 1순위",
    menu: "스파이시 로제 파스타 (1.5인분)",
    price: 18_000,
    score: 3.5,
    photo:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210117_179%2F1610882441791xCCma_JPEG%2Fupload_2994b49b293aab79265d0f0d93677786.jpg",
    naver: "http://naver.me/GxOR6NkO",
    kakao: "https://place.map.kakao.com/27268080",
  },
  {
    id: 21,
    name: "홍탁집",
    category: "한식",
    station: "충무로역",
    phone: "02-2266-6332",
    address: "서울 중구 퇴계로42길 8",
    location: {
      latitude: 37.5614304377427,
      longitude: 126.99663563484911,
    },
    comment: "와썹맨 을지로편 출연, 가성비 넘치는 보쌈정식",
    menu: "보쌈정식",
    price: 7_000,
    score: 4.5,
    photo:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210410_96%2F1618059957406KlbWv_JPEG%2Fupload_b323673b6b65bbd7f7ba7f58d665a3e6.jpeg",
    naver: "http://naver.me/51YRyrjH",
    kakao: "https://place.map.kakao.com/1541088615",
  },
  {
    id: 22,
    name: "마라식객",
    category: "중식",
    station: "충무로역",
    phone: "02-2285-5517",
    address: "서울 중구 퇴계로42길 23 1층",
    location: {
      latitude: 37.56075242772107,
      longitude: 126.99662111764569,
    },
    comment: "동국대 마라처돌이들 다 모여! 깔끔한 마라탕 맛집",
    menu: "마라탕 100g",
    price: 1_600,
    score: 4.4,
    photo:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20210414_14%2F1618396430603xRCEH_JPEG%2Fupload_fccc89831776eaf7a050e21f8eb4a877.jpeg",
    naver: "http://naver.me/xTeSjAzt",
    kakao: "https://place.map.kakao.com/1022943297",
  },
  {
    id: 23,
    name: "김치만선생",
    category: "한식",
    station: "충무로역",
    phone: "02-6052-5526",
    address: "서울 중구 필동로 30-1",
    location: {
      latitude: 37.55916348520624,
      longitude: 126.99605028458402,
    },
    comment:
      "돼지고기가 많이 들어간 김치찌개 맛집. 라면사리와 계란말이는 필수!",
    menu: "김치찌개 2인",
    price: 13_000,
    score: 3.5,
    photo:
      "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA0MjJfMTE2%2FMDAxNTI0MzQ0NTI3MzYw.C8jU_fFkgHIw0xC25Z0tHHQbIwPX2RW97646pYzofAMg.7YwlL3zyq32syCQYmfq5ODT49vynBXWnQpzWNLiFZ0cg.JPEG.jinn_dalle%2FIMG_9665.jpg",
    naver: "http://naver.me/x1eTKoqH",
    kakao: "https://place.map.kakao.com/996312899",
  },
];

module.exports = PLACES;
