const input = document.querySelector("#text");
const listContainer = document.querySelector("#list-cont");
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  addTask();
});
// btn.addEventListener("keydown", (e) => {
//   e.preventDefault();
//   if (e.key == "Enter") {
//     alert("hello");
//   }
// });

function addTask() {
  if (input.value === "") {
    alert("enter a massege");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
}

listContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showData();
