const add_list = document.querySelector(".button_add");
let container_list = document.querySelector(".container_list");
let input_list = document.getElementById("input_list");

let AddList = function(e) {
    if (input_list.value === "") {
        alert("Enter list");
    }
    else {
        let li = document.createElement("li");
        li.textContent = input_list.value;
        li.className = "list_item";
        let span = document.createElement("span");
        span.textContent = "x";
        span.className = "close_item";
        li.append(span);
    
        container_list.append(li);
    }

    input_list.value = "";
    StoredList();
}

let KeyPressEvent = function(e) {
    if (e.key === "Enter") {
        AddList();
    }
}

let RemoveList = function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        StoredList();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        StoredList();
    }
}

let StoredList = function() {
    localStorage.setItem("list", container_list.innerHTML);
}

let SaveList = function() {
    container_list.innerHTML = localStorage.getItem("list");
}

SaveList();

container_list.addEventListener("click", RemoveList);
add_list.addEventListener("click", AddList);
input_list.addEventListener("keypress", KeyPressEvent);