const input = document.getElementById("input");
const button = document.getElementById("button");
const ul = document.getElementById("ul")

function addlist(value) {
  if (input.value == "") {
    window.alert("please enter the value");
    savedata();
  } else {
    const list = document.createElement("li");
    list.innerHTML = value;
    ul.appendChild(list);
    let span = document.createElement("span");
    span.innerHTML = "x";
    list.appendChild(span);
    savedata();
   
  }
  input.value = "";
}

button.addEventListener("click", () => {
  addlist(input.value);
});

ul.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      
      savedata();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata();
    }
  },
  false
);

function savedata() {
  localStorage.setItem("data", ul.innerHTML);
}
function showdata() {
  ul.innerHTML = localStorage.getItem("data");
}

showdata();
