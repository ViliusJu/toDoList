




/// Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//Event Listeners

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);





//Functions

function addTodo(event){

    //Prevent form from submitting

    event.preventDefault();

    //Todo Div

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    //Create list item

    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Completed button

    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton); 	

     //Trash button

     const trashButton = document.createElement('button');
     trashButton.innerHTML = '<i class = "fas fa-trash"></i>';
     trashButton.classList.add('trash-btn');
     todoDiv.appendChild(trashButton); 

     //Apend to list

     todoList.appendChild(todoDiv);

     //Clear input value

     todoInput.value = "";

    
}


function deleteCheck(event){
    const item = event.target;

    ///Delete buttons 

    if(item.classList[0] === "trash-btn"){
       const todo = item.parentElement;
       //Animation
       todo.classList.add("fall")
       todo.addEventListener('transitionend', function(){
           todo.remove();
       })
       
    }

    ///Chech button 

    if (item.classList[0] === "complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}

function filterTodo(e) {
    const   todos = todoList.childNodes;
   todos.forEach(function(todo){
       switch (e.target.value){
           case "all":
               todo.style.display = "flex";
               break
            case "completed":
                if (todo.classList.contains('completed')) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }  
            case "uncompleted":
                if (todo.classList.contains('completed')){
                    todo.style.display = "none";
                } else {
                    todo.style.display = "flex"
                }

       }


   })
}

document.cookie = "username=John Doe; expires=Thu, 18 Dec 2025 12:00:00 UTC";



