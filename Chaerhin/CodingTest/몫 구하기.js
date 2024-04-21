/*
    문제 설명
    정수 num1, num2가 매개변수로 주어질 때,
    num1을 num2로 나눈 몫을 return 하도록 solution 함수 완성하기.

    제한사항
    0 < num1 ≤ 100
    0 < num2 ≤ 100
*/

function solution(num1, num2) {
    // num1, num2를 나눈 값의 소수점을 제외한 값 리턴
    var answer = Math.floor(num1/num2);
    return answer;
}