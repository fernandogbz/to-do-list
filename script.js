// Info date
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');

// Tasks Container
const tasksContainer = document.getElementById('tasksContainer');

const setDate = () => {
  const date = new Date();
  dateNumber.textContent = date.toLocaleString('en', {day: 'numeric'});
  dateText.textContent = date.toLocaleString('en', {weekday: 'long'});
  dateMonth.textContent = date.toLocaleString('en', {month: 'short'});
  dateYear.textContent = date.toLocaleString('en', {year: 'numeric'});
}

// Adding tasks
const addNewTask = event => {
  event.preventDefault();
  const {value} = event.target.taskText;
  if(!value) return;
  const task = document.createElement('div');
  task.classList.add('task', 'roundBorder');
  task.addEventListener('click', changeTaskState);
  task.textContent = value;
  tasksContainer.prepend(task);
  event.target.reset();
}

// Changing task state
const changeTaskState = event => {
  event.target.classList.toggle('done');
}

// Ordering Tasks
const order = () => {
  const done = [];
  const toDo = [];
  tasksContainer.childNodes.forEach(element =>{
    element.classList.contains('done') ? done.push(element) : toDo.push(element)
  })
  return[...toDo, ...done];
}

// Adding each element to tasksContainer
const renderOrderedTasks = () => {
  order().forEach(element => tasksContainer.appendChild(element));
}

setDate();