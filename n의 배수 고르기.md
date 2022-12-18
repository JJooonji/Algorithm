# n의 배수 고르기

<br>

## 문제설명
#### 정수 n과 정수 배열 numlist가 매개변수로 주어질 때, numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return하도록 solution 함수를 완성해주세요.

<br>

## 제한사항
* 1 ≤ n ≤ 10,000
* 1 ≤ numlist의 크기 ≤ 100
* 1 ≤ numlist의 원소 ≤ 100,000


<br>

## 기본코드
```
function solution(n, numlist) {
    var answer = [];
    return answer;
}
```


## 문제풀이
```
function solution(n, numlist) {
    let answer = numlist.filter(num => num % n === 0)
    return answer;
}
```
### 문제를 처음 보고 분리해서 작성
1. 정수 n과 정수 배열 numlist
2. numlist에서 n의 배수가 아닌 수들을 제거한 배열을 return

<br>

### 문제설명 - 로직 분리
1. filter
   - array안의 배열을 호출하여 조건의 맞는 값만 재배열


<br>

#### `n을 나누었을 때 나머지가 0이 되면 n의 배수!`