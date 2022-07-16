function solution(arr1, arr2) {
    var answer = [[]];
    for(let i = 0; i < arr1.length; i++) {
        answer[i] = [];//행
        for(let j = 0; j < arr1[i].length; j++){ //열
            answer[i][j] = arr1[i][j] + arr2[i][j]
        }
    }
    return answer;
}


//2차원배열의 문제
//for 문을 이용하여 i를 정해진 길이만큼 돌려주고 [i]라는 값으로 출력
// 다시 for문을 돌려 j를 i 길이만큼 돌려준다.

// answer = []
// answer[i] = [ [], [] ] 첫번째 for문으로 행 추가
// answer[i][j] = [ [ 4, 6 ], [ 7, 9 ] ]  두번째 for문에서 더한 열 추가/