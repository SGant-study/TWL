/*
    문제 설명
    첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 
    두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2 가 매개변수로 주어집니다.
    두 분수를 더한 값을 기약 분수로 나타냈을 때,
    분자와 분모를 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

    제한사항
    0 <numer1, denom1, numer2, denom2 < 1,000
*/

function solution(numer1, denom1, numer2, denom2){
    var answer = [];
    
    var numer3 = numer1 * denom2 + numer2 * denom1;
    var denom3 = denom1 * denom2;

    var max = 1;

    for(let i=1; i<=numer3 && i<=denom3; i++){
        if(denom3%i == 0 && numer3%i == 0){
            max = i;
        };
    };

    var numer3 = numer3/max;
    var denom3 = denome/max;

    var answer = [numer3, denom3];

    return answer;
}