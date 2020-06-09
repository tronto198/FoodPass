# FoodPass
푸드트럭과 고객을 이어지는 예약 웹앱
- 사용자는 푸드트럭을 운영하는 운영자와 푸드트럭을 이용하는 고객으로 분류된다.
- 고객은 특정한 위치를 중심으로 주변의 푸드트럭을 검색하여 검색된 푸드트럭의 정보들을 확인할 수 있다.  
이때 자신의 위치를 기준으로도 검색가능하다.
- 푸드트럭의 정보에는 이름, 설명, 사진 등의 필수 정보와  
위치, 대기 인원수, 예상 대기 시간 등의 영업중 정보가 있다.
- 고객은 검색된 푸드트럭에서 자신이 원하는 메뉴와 옵션을 선택하여 주문을 할 수 있다.
- 고객이 주문 요청은 서버를 거쳐 운영자에게 전달된다.
- 운영자는 주문 정보를 보고 메뉴를 준비한 뒤, 고객을 호출한다.
- 고객은 호출 알림을 푸시알림을 통해 전달받고, 해당 푸드트럭에서 주문을 수령한 뒤 주문 수령 버튼을 통해 주문 과정을 마친다.

주로 웹 앱의 동작을 구현하는 역할을 하였다.

개발 환경
--------------
- ionic (angular) Framework  -  HTML, css, typescript
- 서버는 express.js, DB는 PostgreSQL 사용
- aws ec2, aws rds, fcm 사용
- kakao map api
- 현재 진행중

개발 동기 등
==================
푸드트럭 앞에서 서있는 시간을 줄이기 위해 진행하고 있는 프로젝트이다.
처음에는 안드로이드 앱으로 개발하려 하였으나 사용자의 접근성을 높이기 위해 웹 앱으로 급히 바꾸어 진행했다.
따라서 빠르게 개발 환경을 다시 정리해야 했었는데, 이 과정에서 다음의 이유로 Ionic을 선택하게 되었다.
- angular 기반으로 typescript를 사용하기 때문에 js와 다르게 타입을 명확하게 지정할 수 있다.
- 웹 개발에 익숙하지 않기에 ionic의 기능으로 html로 빠르게 UI를 구성할 수 있다.
- 컴포넌트 기반으로 개발하기 때문에 각각을 모듈화하여 이후 수정하기 편하다.
- 이후 하나의 코드로 안드로이드, ios 앱으로 지원할 수 있다.
