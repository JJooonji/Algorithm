function solution(num) {
    // var answer = 0;

    if(num === 1){
        return 0;
    }
    for(let i=0; i<500; i++){
        if(num % 2 ===0){
            num = num/2
        }else if(num===1) {
            return i+1
        } else {
            num = (num*3)+1
        }
    }   
    return -1;
}

console.log(solution(6))
console.log(solution(16))
console.log(solution(626331))
