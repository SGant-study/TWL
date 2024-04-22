/*
    문제 설명
    정수 num1 과 num2 가 매개변수로 주어집니다.
    두 수가 같으면 1 다르면 -1을 return 하도록 solution 함수를 완성하시오.

    제한사항
    0 ≤ num1 ≤ 10,000
    0 ≤ num2 ≤ 10,000

*/

function solution(num1, num2){
    var answer = 0;
    if(num1 == num2){
        return answer = 1;
    } else {
        return answer = -1;
    }
    return answer;
}