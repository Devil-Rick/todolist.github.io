let todolist = document.getElementById('tasks');
const task = document.getElementById('work')
let count = 0

function getwork() {
    let todo = document.createElement('div')
    todo.setAttribute('id', 'task');
    let todoComp = document.createElement('div')
    todoComp.setAttribute('id', 'task-comp')
    todolist.appendChild(todo)
    todo.appendChild(todoComp)

    var newtask = document.createElement('p');
    // newtask.parentElement.parentElement.setAttribute('class', 'completed')

    newtask.innerHTML = task.value;

    let circle = document.createElement('div')
    circle.classList.add('circle')

    let del = document.createElement('button')
    del.setAttribute('id', 'del')
    del.setAttribute('onclick', 'deltodo()')

    let btn = document.createElement('i')
    btn.classList.add('fa-regular', 'fa-circle-xmark')

    todoComp.appendChild(circle);
    todoComp.appendChild(newtask);
    todo.appendChild(del)
    del.appendChild(btn)

    count = count + 1

    document.getElementById('counter').innerHTML = count

    task.value = ''

    newtask.addEventListener('click', function () {
        newtask.style.textDecoration = 'line-through'
        circle.style.backgroundColor = 'green'
        newtask.parentElement.parentElement.setAttribute('class', 'completed')
    })
}

function counterDec() {
    count = count - 1
    document.getElementById('counter').innerHTML = count
}

function deltodo() {
    let dTodo = document.getElementById('del')
    dTodo.parentElement.remove();
    counterDec();

}

function done() {
    var mark_ele = document.querySelectorAll('.circle');
    for (var i = 0; i < mark_ele.length; i++) {
        mark_ele[i].style.backgroundColor = 'green'
    }

    var strike_ele = document.querySelectorAll('#task-comp p');
    for (var i = 0; i < strike_ele.length; i++) {
        strike_ele[i].style.textDecoration = 'line-through'
    }
}

function clearAll() {
    var del_ele = document.querySelectorAll('.completed');
    for(var i = 0 ; i < del_ele.length; i++){
        del_ele[i].remove();
        counterDec();
    }

    document.getElementById('counter').innerHTML = count
}
