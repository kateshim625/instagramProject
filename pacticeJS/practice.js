// console.log(window)

// single element
// const form = document.getElementById('todo-form');

// const form = document.querySelector("#todo-form");
// console.log(form)

//meltiple element

// with Nodelist
// console.log(document.querySelectorAll('.item'));

// saperated lis
// const items = document.querySelectorAll('.item');
// items.forEach((item) => {
//     console.log(item);
// })

// class by name
// console.log(document.getElementsByClassName('item'));

// tag by name
// console.log(document.getElementsByTagName('li'))

/*
 const todos = document.querySelector("#todo-list");
 console.log(todos);
//  todos.remove();
// todos.style.background = 'red';
todos.lastElementChild.remove();
todos.firstElementChild.textContent = 'Hello';
todos.lastElementChild.innerHTML = '<h1>Hello</h1>';

// button click event
const button = document.querySelector('.submit');
// console.log(button);

*/

/* 
// button.addEventListener(어떤이벤트, 어떤기능?)
button.addEventListener('click', function(e) {
    //e는 클릭한 이벤트가 담기게됨

//버튼클릭시 콘솔나오자마자 사라지며 새로고침되는데 이유는 인덱스 폼태그의 버튼이 폼을 제풀했기에 (기본탑재되어있는 기능)
//방지위함 > preventDefault로 막아주면 기본적으로일어나는 이벤트가 방지가되고 실행되지않고 다음페이지로 넘기는것을 방지하게됨
    e.preventDefault();
    //이벤트안에는 마우스이벤트객체가 반환되고 마우스위치, 마우스클릭한 대상등 내용들이 다담겨있어 다양한기능을 활용할수있음
    console.log(e.target);
    //클릭시 색이바뀜
    e.target.style.color = 'red'
})
*/

const todos = document.querySelector("#todo-list");
const button = document.querySelector('.submit');
//input 내용 출력
const todoInput = document.querySelector('#todo-input');

const msg = document.querySelector('#msg');
//위보다 function을 웹으로뺀방법
button.addEventListener('click', onSubmit)

 
function onSubmit(e) {
    e.preventDefault();
    
    //아무것도 입력이되어있지않을시 처리
    if(todoInput.value === '') {
        //msg 보이게 화면에 하기
        msg.style.display = 'block';
        //몇초있다가 사라지게하기 (기본 function()보다 에로펑션사용시 1줄이면 {}중갈호 생략가능)
        setTimeout(() => msg.style.display = 'none', 2000 );
        return;
    }
    
    const li = document.createElement('li');
    // li 생성
    li.appendChild(document.createTextNode(todoInput.value));
    // css 클래서 적용
    li.classList.add('item');
    // console.log(li);
    
    //입력시 추가됨
    todos.appendChild(li);
    // console.log(e);
    // console.log(todoInput.value);

    //작성하고 다시 빈킨되게하기
    todoInput.value = '';

    

}



