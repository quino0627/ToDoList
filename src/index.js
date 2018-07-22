import "./style.css";

const form = document.querySelector(".js-form"),
  textInput = document.querySelector(".js-form > input[type='text']"),
  unList = document.querySelector(".js-unList"),
  comList = document.querySelector(".js-comList");

const deleteToDo = event => {
  const button = event.target;
  const toDelete = button.parentElement;
  toDelete.parentElement.removeChild(toDelete);
};

const editToDo = event => {
  const listItem = document.createElement("li");
  const lalala = event.target.parentElement.querySelector("label");
  listItem.innerHTML = `✅ ${lalala.innerHTML} ✅`;
  comList.prepend(listItem);

  event.target.parentElement.parentElement.removeChild(
    event.target.parentElement
  );
};

const addEvents = listItem => {
  const deleteBtn = listItem.querySelector(".js-delete");
  deleteBtn.onclick = deleteToDo;
  const editBtn = listItem.querySelector(".js-edit");
  editBtn.onclick = editToDo;
};

const createToDoElement = toDoText => {
  //create HTML ELEMENT(<li>)
  const listItem = document.createElement("li");

  //Add Buttons to HTML Element
  const editBtn = document.createElement("button");
  editBtn.classList.add("js-edit");
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
  addEvents(listItem);
};

const handleFormSubmit = event => {
  event.preventDefault();
  const toDo = textInput.value;
  console.log(toDo);
  createToDoElement(toDo);
  textInput.value = "";
};

form.addEventListener("submit", handleFormSubmit);
