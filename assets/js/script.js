var todos = document.querySelector(".input-grp");
var createTodos = document.querySelector(".todo-input");
var todoList;

createTodos.addEventListener("keyup", function (e) {
    if(createTodos.value === '' && !createTodos.value){
        alert("You must have to write somthing!");
    }else if (e.keyCode == 13) {
        todoList = document.createElement('span');
        todoList.classList.add("todolist-item");
        todos.appendChild(todoList);
        todoList.innerHTML = createTodos.value.trim();
        createTodos.value = "";
        removeTodo();
        toggleCompletedTodo();
    }
});

function removeTodo() {
    var lists = document.querySelectorAll(".todolist-item")
    lists.forEach((el) => {
        el.addEventListener("click", function () {
            el.remove()
        })
    })
}

function toggleCompletedTodo() {
    var lists = document.querySelectorAll(".todolist-item")
    lists.forEach((el, i) => {
        el.addEventListener("contextmenu", function (e) {
            e.preventDefault();
            if(e.target.tagName === "SPAN") {
                e.target.classList.toggle("todo-completed")
            }
        })
    })
}