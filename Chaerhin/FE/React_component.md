# react component 방식
- 컴포넌트 작성 시 최상위 레벨은 <b>반드시 1개</b>(한 개의 요소만 리턴 가능!)

## 1. function 방식
  - 기능 부족
  - 함수 문법만 알면 사용 가능
  - 컴포넌트 내부에 "state" 사용 불가
  - life cycle API 사용 불가 (컴포넌트 생성, 수정, 삭제 관련 이벤트)
  - 현재는 Hook 도입으로 class 정도의 성능 지원(React 16.8 이상)
    
    <p>
    <b>Example</b><br>
      function NAME(){
          return (/*출력 내용 작성*/)
      };
    </p>

## 2. class
  - 리액트 기능 100% 활용
  - 클래스 문법에 대한 이해 필요
  - 많은 자료가 클래스 문법으로 작성

    <p>
    <b>Example</b><br>
      import React, {Component} from 'react';

      class Name extends from Component{ //js 최신 문법에서는 function 생략 가능
          render(){
              return (/*출력 내용 작성*/)
          }
      };
    </p>

## props
    1. class
        props 이름 = {값}

    2. function
        props 이름 = {값}
        - 함수명에 매개변수 작성
        - 컴포넌트 사용 시 {매개변수명.props이름} 으로 출력
        - this는 함수 방식에서는 사용X, 삭제!

## state
    1. class
        - state에 props를 전달하여 사용
        - render() 함수 외부에 작성 //그래야 바뀐 값으로 사용가능
        - state={state이름:값, state이름:값, ..} //state초기화
        - {this.state.state이름}으로 사용
        - state 값이 바뀔 때 마다 클래스 컴포넌트의 render() 실행

    2. function
        - hook 사용
        - React 내장 hook, 사용자 정의 hook 가능
        - hook 이름은 'use'로 시작
        - useState : 페이스북이 제공하는 내장 hook 이름

### useState
    - 페이스북이 제공하고 있는 내장 hook
    - 현재의 state값과 이 값을 업데이트하는 2개의 값을 배열 형태로 제공
        1) 첫 번째 값에 사용하고자 하는 값 리턴(state 초기값)
        useState('현재값','변경할 값')
        
        var 리턴받을 변수 = useState(props.props이름);
        var 리턴받을 변수 = useState(5);

        2) 두 번째 값에 상태 변경 여부 또는 변경될 값 작성
        useState[0] : 기존 state 값
        useState[1] : 변경할 state 값

        var numberState = useState();
        var number = numberState[0];
        var setNumber = numberState[1];
        -> var [number, setNumber] = useState();
           var [time, setTime] = useState();
