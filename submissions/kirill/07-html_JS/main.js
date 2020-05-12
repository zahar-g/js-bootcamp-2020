let cont_1 = document.querySelector('.content_1');
let cont_2 = document.querySelector('.content_2');
let cont_3 = document.querySelector('.content_3');
let task_1_btn = document.querySelector('#btn-1');
let task_2_btn = document.querySelector('#btn-2');
let btn3 = document.querySelector('#btn-3');
// Task 2
let task_2_btn_hidden = document.querySelector('#count__btn');

// Task 3

function createElem(txt) {
    let div = document.createElement('div');
    div.textContent = txt;
    cont_1.appendChild(div);
}

function logIn() {
    let rtn;
    let data = {
        name: 'Admin',
        pass: 'Я Главный'
    };
    let nameAnswer = prompt('Who\'s there?');

    if (nameAnswer === data.name) {
        let passAnswer = prompt('Пароль?');

        if (passAnswer === data.pass) {
            rtn = 'Здравствуйте';
        } else if (passAnswer === null || passAnswer === '') {
            rtn = 'Отменено';
        } else {
            rtn = 'Не верный пароль';
        }
    } else if (nameAnswer === null || nameAnswer === '') {
        rtn = 'Отменено';
    } else {
        rtn = 'I don\'t know you';
    }
    createElem(rtn);
    return rtn;
}
function addCounter() {
    let count_block = document.querySelector('.container__btn--click');
    count_block.style.display='block';
}
function counting(){
    let span = document.querySelector('#count');
    span.textContent = +span.textContent + 1;
}

task_1_btn.addEventListener('click', logIn);
task_2_btn.addEventListener('click', addCounter);
task_2_btn_hidden.addEventListener('click', counting);