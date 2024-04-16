<h1>HTTP</h1>

<h2>HTTP ?</h2>
<p>
    HTTP (Hypertext Protocol) : <br>
    서버와 클라이언트간의 <strong>TCP</strong> / <strong>IP</strong> 통신 위에서 메시지 교환을 위해 사용되는 프로토콜
</p>
<ul>
    <li> 단방향성 : 클라이언트 요청 시 서버가 응답 </li>
    <li> 비연결성 : 클라이언트 요청에 대한 서버의 응답이 완료되면 연결 종료 </li>
    <li> stateless : 상태를 유지하지 않음<br>
                    -> 상태 유지 필요 시 : <strong>쿠키</strong> , <strong>세션</strong> 사용 </li>
</ul>

    - TCP : 사용자 계층과 네트워크 계층 간의 데이터 교환을 신뢰성 있게 보장하는 통신 규칙
    - IP : 데이터를 원하는 곳에 보내기 위한 통신 규칙
    - 쿠키 : 클라이언트에 저장되어 있는 키와 값이 들어있는 사용자 정보 파일
    - 세션 : 서버에 저장되어 있는 키와 값이 들어있는 사용자 정보 파일

<h2>HTTP Method ?</h2>
<p>
    HTTP 메소드 <br>
    : 클라이언트-서버 구조에서 요청(request)과 응답(response)이 이루어지는 방식<br>
    : <strong>서버가 수행해야 할 동작을 지정</strong>하여 요청(request)을 보내는 방법
</p>
<p>
    HTTP 메소드를 사용하는 이유?<br>
    : <strong>리소스</strong>와 <strong>동작</strong>을 분리하기 위해
</p>

<h3>HTTP Method의 종류 ?</h3>
<ul>
    <li>GET : 리소스를 조회</li>
    <li>POST : 데이터 추가, 등록</li>
    <li>PUT : 리소스 대체, 수정 / 해당 리소스가 없으면 새롭게 생성</li>
    <li>DELETE : 리소스 삭제</li>
    <li>PATCH : 리소스 부분 변경/수정</li>
</ul>