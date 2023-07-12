const textTask = document.getElementById('text-task');

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
const tasksLists = [];

textTask.addEventListener('submit', event => {
  tasks.textContent = '';

  const newInput = document.createElement('input');
  const newTextTask = document.createElement('span');
  const newButton = document.createElement('button');

  const taskObject = [
    {
      id: Date.now(),
      task: 'Comprar el pan',
      completed: false
    }
  ];

  taskObject.push(tasksLists);

  textTask.target.value;
});

// textTask.addEventListener('submit', event => {
//   tasks.textContent = '';
//   const newTextTask = document.createElement('span');

//   newTextTask.textContent = event.target.value;
//   tasks.classList.add('container-task');

//   tasks.append(checkbox);
//   tasks.append(newTextTask);
//   tasks.append(buttonClose);
// });

// buttonClose.addEventListener('click', () => {
//   tasks.remove();
// });

// - Saber lo que he escrito en el input
// - Crear
