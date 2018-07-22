import "./style.css";

const form = document.querySelector(".js-form"),
  textInput = document.querySelector(".js-form > input[type='text']"),
  unList = document.querySelector(".js-unList");

const deleteToDo = event => {
  const button = event.target;
  console.log("asdf");
};

const addEvents = listItem => {
  const deleteBtn = listItem.querySelector("js-delete");
  deleteBtn.onclick = deleteToDo;
};

const createToDoElement = toDoText => {
  //create HTML ELEMENT(<li>)
  const listItem = document.createElement("li");

  //Add Buttons to HTML Element
  const editBtn = document.createElement("button");
  editBtn.innerHTML = "✏️";
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("js-delete");
  deleteBtn.innerHTML = "❌";
  listItem.appendChild(editBtn);
  listItem.appendChild(deleteBtn);

  //Insert toDoText
  const toDoElement = document.createElement("label");
  toDoElement.innerHTML = toDoText;
  console.log(unList, listItem, toDoElement);
  listItem.prepend(toDoElement);
  unList.prepend(listItem);

  //Add the HTML element (<li>)
  // addEvents(listItem);
};

const handleFormSubmit = event => {
  event.preventDefault();
  const toDo = textInput.value;
  console.log(toDo);
  createToDoElement(toDo);
  textInput.value = "";
};

form.addEventListener("submit", handleFormSubmit);
