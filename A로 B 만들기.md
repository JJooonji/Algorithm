# A로 B 만들기

<br>

## 문제설명
#### 문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.
<br>

## 제한사항
* 0 < before의 길이 == after의 길이 < 1,000
* before와 after는 모두 소문자로 이루어져 있습니다.

<br>

## 기본코드
```
function solution(before, after) {
    var answer = 0;
    return answer;
}
```


## 문제풀이
```
function solution(before, after) {
    var answer = 0;
    
    before = [...before].sort()
    after = [...after].sort()
    
    return JSON.stringify(before) === JSON.stringify(after) ? 1:0
}
```
### 문제를 처음 보고 분리해서 작성
1. before과 after의 문자를 나열하여 오름차순 정리
2. 두 배열을 비교하여 true라면 1을, false라면 0을 return

<br>

### 문제설명 - 로직 분리
1. 스프레드 문법
   - 기존 문자열값을 펼쳐 개별적의 값의 목록으로 분리
2. sort
   - 스프레드 문법으로 분리된 값을 오름차순으로 나열
3. JSON.stringify
   - 두 배열의 값 비교=>문자열로 변경해준 뒤 비교하는 방법 사용   
4. 삼항 연산자
   - 두 배열을 비교한다는 조건 / true라면 1을, false라면 0을 return   