/*
    문제 설명
    중앙값은 어떤 주어진 값들을 
    크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미.
    예를 들어 1, 2, 7, 10, 11 의 중앙값은 7.
    정수 배열 array가 매개변수로 주어질 때,
    중앙값을 return 하도록 solution 함수를 완성해보세요.

    제한 사항
    array의 길이는 홀수입니다.
    0 < array의 길이 < 100
    -1,000 < array의 원소 < 1,000
*/

function solution(array) {
    // 크기 순서대로 재정렬
    var Array = array.sort((a, b)=>(a-b));
    // 배열의 길이
    var n = Array.length;
    // 중앙값 : n+1/2 번째 숫자
    var num = (n+1)/2;

    var answer = Array[num-1];
    return answer;
}

/*
    [] 안에 index는 0부터 시작.
    Array = [1, 3, 5, 7, 9] 배열 속 숫자 '3'을 고르고 싶다면,
    Array[2] 가 아니고 Array[1]로 써야함!
    Array[0] = 1, Array[1] = 3 ... 
*/