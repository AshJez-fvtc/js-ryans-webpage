// Get the list from local storage
const todos = JSON.parse(localStorage.getItem('todo-list')) || [];

// Get references to the DOM elements
const todoList = document.querySelector('.todo-list');
const input = document.getElementById('new-todo');
const addButton = document.querySelector('button');

//Adding new to-do list items 
const renderTodos = () => {
  todoList.innerHTML = ''; // Clear the li's before we recreate them
  //Creating li elements with the forEach method
  todos.forEach(todo => {
    const li = document.createElement('li');  // Create a new li element
    li.textContent = todo.text;  // Set the text content to the todo's text
    todoList.append(li);  // Append the li in the DOM
  });
};
// Click event listener for the 'Add To Do' button
addButton.addEventListener('click', () => {
  const newTodoText = input.value;
  if (newTodoText === '') return; //input validation, if there is no content it is not added
  todos.push({ text: newTodoText, completed: false }); //using the push method to dynamically add the new task to the array while maintaining the order integrity of the data (I found this on google and wanted to give it a try! :) )
  localStorage.setItem('todo-list', JSON.stringify(todos)); // Save the updated list to local storage
  // Call the renderTodos function to update the DOM with the new item
  renderTodos();
  // Clear the input field
  input.value = '';
});
// Calls the renderTodos function when the page loads to display with the updated items
renderTodos();
