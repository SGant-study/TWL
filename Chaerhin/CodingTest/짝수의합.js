/*
    문제 설명
        정수n이 주어질 때, n 이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성하세요.

    제한 사항
        0 < n ≤ 1000

    입출력 예
        n	result
        10	30
        4	6

    입출력 예 설명
        입출력 예 #1
        n이 10이므로 2 + 4 + 6 + 8 + 10 = 30을 return 합니다.
        
        입출력 예 #2
        n이 4이므로 2 + 4 = 6을 return 합니다.
*/

function solution(n){
    var num = [];
    for(let i=1; i<=n; i++){
        if(i%2==0){
            num.push(i); //짝수만 담은 배열 만들기
        };
    };

    var sum = 0;
    for(let j=0; j<num.length; j++){
        sum += num[i];
    };
    return sum;
}