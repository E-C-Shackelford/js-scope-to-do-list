const todos = [
  "Feed the dogs",
  "Water indoor plants",
  "Do laundry",
  "JavaScript studies",
  "Take the dogs out to exercise",
  "Workout",
  "Code a small project",
  "Water outdoor plants",
  "Garden",
  "Work on art piece",
  "Meditate",
  "Vacuum and mop floors",
];

const button = document.querySelector(".show-todos");
const todoList = document.querySelector(".todos");

const showTodos = function () {
  todos.forEach(function (todo) {
    const li = document.createElement("li");
    li.innerHTML = todo;
    todoList.append(li);
  });
  todoList.classList.remove("hide");
  button.innerText = "Hide list";
};

button.addEventListener("click", function () {
  if (todoList.classList.contains("hide")) {
    showTodos();
  } else {
    button.innerText = "Show list!";
    todoList.classList.add("hide");
    todoList.innerHTML = "";
  }
});
