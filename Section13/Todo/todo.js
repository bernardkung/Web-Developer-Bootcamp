var todos = ["Buy new turtle"];

var input = prompt("What would you like to do?");


function listTodos() {
    todos.forEach(function list_todos(todo, index) {
        console.log("Todo", (index+1) + ":", todo);
    })
}

function addTodo() {        
    //ask for new todo
    var newTodo = prompt("Enter new todo");
    // push to todos array
    todos.push(newTodo);
    console.log("Todo added!");
}

function deleteTodo() {
    // Ask for index of todo to delete
    var index = prompt("Enter index of todo to delete");
    // Delete the specified todo
    todos.splice(index, 1);
    console.log("Todo deleted!");
}

while(input !== "quit") {

    if(input === "list") {
        listTodos();
    } else if(input==="new") {
        addTodo();
    } else if(input === "delete") {
        deleteTodo();
    }

    // Ask for new input
    input = prompt("What would you like to do?");
}

console.log("Goodbye!")