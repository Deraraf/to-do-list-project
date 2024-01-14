const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function AddTask() {
  if (inputBox.value === "") {
    alert("you have to enter text");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
  sessionStorage;
}

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.nodeName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    }
    if (e.target.nodeName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
inputBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    AddTask();
  }
});
function saveData() {
  sessionStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = sessionStorage.getItem("data");
}
showData();
