const textTask = document.getElementById('text-task');

const textWrite = document.getElementById('text-write');

const allButton = document.getElementById('allButton');

const uncompletedButton = document.getElementById('uncompletedButton');

const completedButton = document.getElementById('completedButton');

const tasks = document.getElementById('tasks');

// Usando este ejemplo como base, crea un ToDo list con el estilo que más te guste.

// El único requisito es que las tareas estén en un array de objetos con este formato:

// const tasks = [
//   {
//     id: Date.now(),
//     task: 'Comprar el pan',
//     completed: false
//   }
// ];
// Dentro de ese array iréis añadiendo las tareas nuevas y cuando se eliminen se eliminarán del objeto.

// Para que esté claro, el array de tareas y lo que se pinta en pantalla tiene que tener en todo momento la misma información.
let tasksLists = [];

textTask.addEventListener('submit', event => {
  // tasks.textContent = '';
  event.preventDefault();

  const newDiv = document.createElement('div');
  const newInput = document.createElement('input');
  newInput.type = 'checkbox';
  const newTextTask = document.createElement('span');
  const newButton = document.createElement('button');
  newButton.textContent = 'x';

  const taskObject = [
    {
      id: Date.now(),
      task: 'Comprar el pan',
      completed: false
    }
  ];

  newTextTask.textContent = textWrite.value;
  textTask.reset();

  taskObject.push(tasksLists);

  newDiv.append(newInput);
  newDiv.append(newTextTask);
  newDiv.append(newButton);

  tasks.append(newDiv);

  newDiv.classList.add('container-task');
});

tasks.addEventListener('click', event => {
  if (event.target.tagName === 'BUTTON') {
    event.target.parentElement.remove();
  }
});

// array de 10 num donde los num no se repitan BINGO

const tasksElement = document.getElementById('tasks');
const filtersElement = document.getElementById('filters');
const formElement = document.getElementById('form');

const filters = {
  all: 0,
  uncompleted: 1,
  completed: 2
};
let allTasks = [];

// Escuchar el evento de envio del formulario
// Obtener el valor de lo que hay escrito
// Meter tarea en el objeto de tareas
// Generar el HTML correspondiente de cada tarea
// Meter el HTML en el contenedor de tareas
// Borrar tarea
// Actualizar tarea

const generateHtmlForTask = task => {
  const newDiv = document.createElement('div');
  newDiv.classList.add('task');
  const newCheckbox = document.createElement('input');
  newCheckbox.type = 'checkbox';
  newCheckbox.checked = task.completed;
  const newTask = document.createElement('span');
  newTask.textContent = task.task;
  const newButton = document.createElement('button');
  newButton.textContent = 'X';

  newButton.addEventListener('click', () => deleteTask(task.id));
  newCheckbox.addEventListener('change', () => completeTask(task.id));

  newDiv.append(newCheckbox, newTask, newButton);

  return newDiv;
};

const insertTasks = () => {
  tasksElement.textContent = '';
  const fragment = document.createDocumentFragment;
  allTasks.forEach(task => {
    const newTask = generateHtmlForTask(task);
    fragment.append(newTask);
  });
  tasksElement.append(fragment);
};

const deleteTask = id => {
  // Metodo largo
  // const newTasks = []
  // for (const task of allTasks) {
  //   if (task.id !== id){
  //     newTasks.push(task)
  //   }
  // }

  // allTasks = newTasks

  // Metodo corto
  allTasks = allTasks.filter(task => task.id !== id);

  insertTasks();
};

const saveTask = task => {
  allTasks.push(task);
  insertTasks();
};

const completeTask = id => {
  allTasks = allTasks.map(task => {
    if (task.id === id) {
      task.complete = !task.completed;
    }
    return task;
  });
  insertTasks();
};

const createTask = task => {
  const newTask = {
    id: Date.now(),
    task: task,
    completed: false
  };
  saveTask(newTask);
};

const filterTasks = filter => {};

formElement.addEventListener('submit', event => {
  event.preventDefault();
  if (event.target.task.value === '') return;
  createTask(event.target.task.value);
  event.target.reset();
});

filtersElement.addEventListener('click', event => {
  if (event.target.tagName !== 'BUTTON') return;
  filterTasks(event.target.dataset.filter);
});
