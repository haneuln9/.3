// 변수 목록= 체중 , 키입력버튼 초기화 버튼
const user_weight = document.querySelector ('#user_weight'); //키입력
const user_height = document.querySelector ('#user_height'); //몸무게 입력
const bt = document.querySelector('#btn');//버튼
const weight_over = document.querySelector ('.weight_over')
const height_over = document.querySelector ('.height_over')
let standard
//-------------
console.log(user_weight, user_height, bt, height_over,weight_over);
//-------------
bt.addEventListener('click',function(){
    standard =(user_height.value -100)*0.9 ;
    weight_over.innerHTML = `정`
})

