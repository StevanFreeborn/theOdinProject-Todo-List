import { createTodo } from './models/todo.js';
document.getElementById('content').innerText = 'Hello World';
const newTodo = createTodo({
    title: 'A Task',
    description: 'A task that needs doing',
    dueDate: new Date(),
    priority: 'High',
});
console.log(newTodo.title);
