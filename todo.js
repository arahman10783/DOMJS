const storedList = JSON.parse(localStorage.getItem("todoList"))
let todoList = storedList ? storedList : []

function displayList (list){
  todoListUL.innerHTML = ""
  if(list.length > 0){
    document.getElementById("info").style.display = "none"
    list.forEach((task) => {
      todoListUL.innerHTML += `
        <li class="todo-element">
            <label class="checkLabel" for="check${task.id}">
              <input type="checkbox" class="checkbox" onclick="onCheckedHandler(${task.id})" id="check${task.id}" ${task.completed && "checked"} />
            </label>
            <span id="title${task.id}">${task.title}</span>
            <button role="button" onclick="onDeleteHandle(${task.id})" class="delete">Delete</button>
          </li>
      `
      onCheckedHandler(task.id)
    })
    
  }else{
    document.getElementById("info").style.display = "block"
  }
}

const todoListUL = document.getElementById("todoListId")

window.onload = displayList(todoList)



function onDeleteHandle (id){
  todoList = todoList.filter(task => task.id !== id)
  localStorage.setItem("todoList", JSON.stringify(todoList))
  displayList(todoList)
}

function onCheckedHandler(id){
  const checkbox = document.getElementById(`check${id}`)
  const taskTitle = document.getElementById(`title${id}`)
  const checked = checkbox.checked

function updateList(){
  return todoList.map(task => {
      if(task.id === id){
        task.completed = checked
      }
      return task
    })
}

  if(checkbox.checked){
    todoList = updateList()
    localStorage.setItem("todoList", JSON.stringify(todoList))
    taskTitle.className = "completedTask"
  }else{
    todoList = updateList()
    localStorage.setItem("todoList", JSON.stringify(todoList))
    taskTitle.className = ""
  }
}


const addTaskBtn = document.getElementById("addTaskBtn")
const taskInput = document.getElementById("taskInput")

// on click on button addTaskBtn
// get value of task input
// add new element in the array
// dhow the new tasks in HTML
// empty input

function addTaskHandler() {
  const newTask = {
    id: new Date().getTime(), //use UUID
    title: taskInput.value,
    completed: false
  }
  if(taskInput.value.trim().length > 0 && !checkDuplication(taskInput.value)){
    document.getElementById('error').style.display = 'none'
    todoList.push(newTask)
    localStorage.setItem("todoList", JSON.stringify(todoList))
    displayList(todoList)
    taskInput.value = ""
  }else{
    document.getElementById('error').style.display = 'block'
  }
}


addTaskBtn.addEventListener("click", addTaskHandler)

function checkDuplication(str) {
  const duplicateArr = todoList.filter(({title}) => title.toLowerCase() === str.toLowerCase())
  return duplicateArr.length > 0 ? true : false
}

taskInput.oninput = function(){
  document.getElementById('error').style.display = 'none'
}



//To convert object to string
// JSON.stringify()
// JSON.parse()