

const todoDaFare = document.getElementById('todo-da-fare');
const todoFatti = document.getElementById('todo-fatti');

const todos = [
  { id: 1, text: 'Fare la spesa ma che bello', fatto: false },
  { id: 2, text: 'Studiare JavaScript', fatto: false },
  { id: 3, text: 'Chiamare il dottore', fatto: false },
  { id: 4, text: 'Pagare le bollette va pur fatto', fatto: false }
];

function renderTodos() {
  
  todoDaFare.innerHTML = '<h2>Da Fare</h2>';
  todoFatti.innerHTML = '<h2>Fatti</h2>';

  todos.forEach(todo => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.textContent = todo.text;

    todoItem.addEventListener('click', () => {
      todo.fatto = !todo.fatto;
      renderTodos();
    });

    if (todo.fatto) {
      todoFatti.appendChild(todoItem);
    } else {
      todoDaFare.appendChild(todoItem);
    }
  });
}

renderTodos();