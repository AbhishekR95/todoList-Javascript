const input = document.getElementById("input");
const list = document.querySelector(".list");
const error = document.querySelector(".error");

function addTask() {
  if (input.value === "") {
    error.innerHTML = `Please write your task`;
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = `<i class="fa-regular fa-x"></i>`;
    li.appendChild(span);
  }
  input.value = "";
  saveData();
}

list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "I") {
    e.target.parentElement.parentElement.remove(); //parent element is span adn its parent is li
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

function showTask() {
  list.innerHTML = localStorage.getItem("data");
}

showTask();
