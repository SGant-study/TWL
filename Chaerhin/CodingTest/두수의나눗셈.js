/*
    문제설명
    정수 num1, num2가 매개변수로 주어질 때,
    num1 을 num2로 나눈 값에 1000을 곱한 후 정수 부분을 return 하도록 solution 함수를 완성하시오.
    
    제한사항
    0 < num1 ≤ 100
    0 < num2 ≤ 100
*/

function solution (num1, num2){
    return Math.floor(num1/num2*1000);
}