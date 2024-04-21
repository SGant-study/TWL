<h1> SSR & CSR </h1>

렌더링 : 웹 페이지에 접속 시 그 페이지를 화면에 그려주는 것    
<h2> SSR (Server-Side Rendering) </h2>
    - 페이지를 이동할 때마다 새로운 페이지 요청<br>
    - 모든 템플릿은 서버 연산을 통해 렌더링하고 완성된 페이지 형태로 응답<br>
    - ex/ MPA (Multi Page Application)<br>
        : 여러 페이지로 구성된 웹 어플리케이션<br>
        : 인터렉션 발생 시 서버로부터 새로운 html을 받아와서 해당 링크로 이동하여 페이지 전체를 새로 렌더링하는 구성 방식
        
    - 장점
        * 초기 렌더링 속도가 매우 빠름
        * 검색엔진최적화(SEO) 가능
    - 단점
        * 프로젝트가 복잡해짐
        * 초기 렌더링은 빠르지만 연속적으로 수행할 경우 서버과부화 발생가능
<h2>CSR (Client-Side Rendering)</H2>
        - 사용자의 요청에 따라 필요한 부분만 응답 받아 렌더링<br>
        - ex/ SPA (Single Page Application)<br>
            : 하나의 페이지로 구성된 웹 어플리케이션<br>
            : 최초에 한 번 페이지를 전체 로드하고, 이후엔 특정 부분만 Ajax 통해 데이터 바인딩<br>
            : ex/ React, Vue, Angular와 같은 Javascript framework

        - 장점
            * 서버와 클라이언트 사이의 데이터양, 트래픽 감소
            * 연속된 렌더링으로 인한 과부하 감소
        - 단점
            * 검색엔진최적화(SEO) 사용 불가능
            * 렌더링을 위해 필요한 작업이 많음(개발, 유지보수에 필요한 작업이 많음)