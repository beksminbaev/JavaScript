//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption=document.querySelector('.filter-todo')
const alert=document.querySelector('.alert')
//function 
const addTodo =(event)=>{
    event.preventDefault()
    if(!todoInput.value){
        alert.innerText='Please enter a valid text!'
        alert.style.visibility='visible'
        alert.classList.add('style-alert')
        setTimeout(()=>{
            alert.style.visibility='hidden'
            alert.classList.remove('style-alert')
        }, 1500)
    }else {
         //create todoDiv
    const todoDiv=document.createElement('div')
    todoDiv.classList.add("todoDiv")
    todoDiv.innerHTML=`
    <li class="todo-item">${todoInput.value}</li>
     <button class="completed-btn">
     <i class="fas fa-check"></i>
     </button>
    <button class="delete-btn">
    <i class="fas fa-trash">
    </i></button>
    `

     //append todoDiv to UL
     todoList.appendChild(todoDiv)
     saveLocalTodos(todoInput.value)
     //clearing input
     todoInput.value=""
     //ALERT IF ADDED PROPERLY
     alert.innerText='Item succesfully added!'
     alert.style.visibility='visible'
     alert.classList.add('success')
        setTimeout(()=>{
            alert.style.visibility='hidden'
            alert.classList.remove('style-alert')
        }, 1500)    
}
}
    // //create todoDiv
    // const todoDiv=document.createElement('div')
    // todoDiv.classList.add("todoDiv")
    // todoDiv.innerHTML=`
    // <li class="todo-item">${todoInput.value}</li>
    //  <button class="completed-btn">
    //  <i class="fas fa-check"></i>
    //  </button>
    // <button class="delete-btn">
    // <i class="fas fa-trash">
    // </i></button>
    // `

    //  //append todoDiv to UL
    //  todoList.appendChild(todoDiv)
    //  //clearing input
    //  todoInput.value=""



    // //create li
    // const newTodo=document.createElement('li')
    // newTodo.classList.add("todo-item")
    // newTodo.innerText=todoInput.value
    // todoDiv.appendChild(newTodo)
    // //complete btn
    // const completedButton = document.createElement('button')
    // completedButton.classList.add("completed-btn")
    // completedButton.innerHTML= ' <i class="fas fa-check"></i>'
    // todoDiv.appendChild(completedButton)
    // //delete btn
    // const deletedButton = document.createElement('button')
    // deletedButton.classList.add("delete-btn")
    // deletedButton.innerHTML= '<i class="fas fa-trash"></i>'
    // todoDiv.appendChild(deletedButton)

  

const deleteComplete=(event)=>{
    const item =event.target 
    if(item.classList.contains('delete-btn')){
        const todo = item.parentElement;
        todo.classList.add('fall')
        removeLocalTodos(todo)
        todo.addEventListener('transitionend', ()=>{
            todo.remove()
        })  
    }else if (item.classList.contains('completed-btn')){
        const todo = item.parentElement;
        todo.classList.toggle('completed')
        
}
}

const filterTodo =(event)=>{
    const todos = todoList.childNodes
    todos.forEach((todo) => { 
        switch(event.target.value){
        case 'all':
                todo.style.display="flex"
                break;
        case 'completed':
                    if(todo.classList.contains('completed')){
                        todo.style.display="flex"
                    }else {
                        todo.style.display="none"
                    }
                break;
        case 'uncompleted':
                        if(!todo.classList.contains('completed')){
                            todo.style.display="flex"
                        }else {
                            todo.style.display="none"
                        }
                 break;
        }
    })
}

const saveLocalTodos = (todo)=>{
    let todos;
    if(localStorage.getItem('todos')== null){
        todos = []
    }else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
}
const getdata=()=>{
    let todos;
    if(localStorage.getItem('todos')== null){
        todos = []
    }else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.forEach(function(todo){
        const todoDiv=document.createElement('div')
    todoDiv.classList.add("todoDiv")
    todoDiv.innerHTML=`
    <li class="todo-item">${todo}</li>
     <button class="completed-btn">
     <i class="fas fa-check"></i>
     </button>
    <button class="delete-btn">
    <i class="fas fa-trash">
    </i></button>
    `

     //append todoDiv to UL
     todoList.appendChild(todoDiv)
    })
}
const removeLocalTodos =(todo)=>{
    let todos;
    if(localStorage.getItem('todos')== null){
        todos = []
    }else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    const text = todo.children[0].innerText
    let startIndex = todos.indexOf(text)
    todos.splice(startIndex,1)
    localStorage.setItem('todos', JSON.stringify(todos))

}

//evenlistener
todoButton.addEventListener('click',addTodo)
todoList.addEventListener('click', deleteComplete)
filterOption.addEventListener('click', filterTodo)
document.addEventListener('DOMContentLoaded', getdata )