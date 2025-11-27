const inputBox = document.getElementById("text-box");
const listContainer = document.getElementById("list-container");
const btnAdd = document.getElementById("btn-add");

btnAdd.addEventListener("click", function() {
    if (inputBox.value === '') {
        alert("tulis sesuatu dong!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; 
        li.appendChild(span); 
    }
    inputBox.value = "";
});
listContainer.addEventListener("click", function(e) {
    
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked"); 
    }
    
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove(); 
    }
    
}, false);
