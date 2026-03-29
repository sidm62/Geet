// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
]

// add your code here

const listContainer = document.querySelector('ul');
const dialog = document.querySelector('dialog');
const openDialogBtn = document.querySelector('.add-btn');
const form = document.querySelector('form');
const inputField = document.querySelector('form input');

function renderList() {
  listContainer.innerHTML = '';


  todoList.forEach((item, index) => {
    const li = document.createElement('li');
    const isChecked = item.completed ? 'checked' : '';


    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox'; // Lisätty tyyppi
    checkbox.checked = item.completed; // Käytetään objektin tilaa


    checkbox.addEventListener('change', () => {
      item.completed = checkbox.checked;
      console.log('Update todoList complete');
    });
    const label = document.createElement('label');
    label.textContent = item.task;



    const deleteButton = document.createElement('button');

    deleteButton.className = 'delete-btn';

    deleteButton.addEventListener('click', (e) => {
      todoList.splice(index, 1);

      listContainer.removeChild(li);
    })
    li.appendChild(checkbox);
    li.appendChild(deleteButton);
    li.appendChild(label);

    listContainer.appendChild(li);
  });

}

openDialogBtn.addEventListener('click', () => {
  dialog.showModal();
});
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const addTodo = inputField.value;
  if (addTodo) {
    const newItem = {
      id: Date.now(),
      task: addTodo,
      completed: false
    };
    todoList.push(newItem);
    inputField.value = '';
    dialog.close();
    renderList();

  }

});


renderList();
