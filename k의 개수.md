# k의 개수

<br>

## 문제설명
#### 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

<br>

## 제한사항
* 1 ≤ i < j ≤ 100,000
* 0 ≤ k ≤ 9


<br>

## 기본코드
```
function solution(i, j, k) {
    var answer = 0;
    return answer;
}
```


## 문제풀이
```
function solution(i, j, k) {
    var answer = 0;
    for(i; i <= j; i++){
        let iNum = i + '';
        let kNum = k + '';
        for(let z = 0; z < iNum.length; z++){
            if(iNum[z] === kNum){
                answer++;
            }
        }
    }
    return answer;
}
```
### 문제를 처음 보고 분리해서 작성
1. 정수 i, j, k
2. i부터 j까지 k가 몇 번 등장하는지 return

<br>

### 문제설명 - 로직 분리
1. 반복문
   - i를 j만큼 증가시키며 반복
   - 문자열로 바꾼 매개변수의 길이만큼 반복하며 요소가 k와 일치할 때 answer을 증가시켜줌



<br>

#### `매개변수를 문자열로 변환하고 반복문 돌리기`
