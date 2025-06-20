 <script type="module" src="js/data.js"></script>
const list = document.getElementById("todoList");


function todoRender() {

  todos.forEach((todo)=> {
    const col = document.createElement('div');
    col.className = "col";

    col.innerHTML = `
      <div class ="m-auto pt-3">
           <p class="text-center text">${todo.todoId}</p>
          <p class="text-center text">${todo.todoTitle}</p>
          <p class="text-center text">${todo.isComplete}</p>    
      </div>
    `
    list.appendChild(col)

  })
}

todoRender()