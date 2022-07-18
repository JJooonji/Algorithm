# 문자열 내 p와 y의 개수
<br>

## 문제설명
#### 대문자와 소문자가 섞여있는 문자열 s가 주어집니다. <br>s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. <br>'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. <br>단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

<br>

## 제한사항
* 문자열 s의 길이 : 50 이하의 자연수
* 문자열 s는 알파벳으로만 이루어져 있습니다.
<br>

## 기본코드
```
function solution(s){
    var answer = true;

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}
```


## 문제풀이
```
function solution(s){
    let searchS = s.toLowerCase()
    let searchP = searchS.split('p').length;
    let searchY = searchS.split('y').length
    if(searchP == searchY){
        return true
    } else {
        return false
    }
```
* 문제를 처음 보고 분리해서 작성
1. p의 개수와 y의 개수가 같으면 true, 아니면 flase
2. 대소문자 구별하지 않음
3. s는 문자열

<br>

* 문제설명 - 로직 분리
1. if문
   - p.length === y.length -> true
2. p와 y 문자열 추출
   - split('p'), split('y')로 각 문자열 추출