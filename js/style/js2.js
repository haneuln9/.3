//변수 첫번째 값 두번째값
const first_n = document.querySelector ('#first_n');//첫번째 값입력
const second_n = document.querySelector ('#second_n');//두번째 값입력
const bt = document.querySelector('#btn');//버튼
const answer_correct = document.querySelector ('.answer_correct')//정답은
let multiply
//---확인
console.log(first_n, second_n, bt, answer_correct )
//-------구구단 계산기 (multiply =곱셈)
bt.addEventListener('click',function(){
    multiply = first_n.value * second_n.value ;
    answer_correct.innerHTML = `정답은 ${multiply}입니다.` ;
})