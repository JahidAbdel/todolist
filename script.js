const inputBox = document.getElementById("inputBox");

const listeTaches = document.getElementById("listeTaches");

function ajoutTache(){
    
    if (inputBox.value === '') {
        alert("Veillez rentrer la tâche à faire avant d'ajouter !");
    }
    
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listeTaches.appendChild(li);
        let croix = document.createElement("croix");
        croix.innerHTML = "\u00d7";
        li.appendChild(croix); 
    }
    inputBox.value = '';
    sauvegarde();
}

listeTaches.addEventListener("click", function(f) {
    if (f.target.tagName === "LI"){
        f.target.classList.toggle("checked");
        sauvegarde();
    }
    else if (f.target.tagName === "CROIX") {
        f.target.parentElement.remove();
        sauvegarde();
    }
}, false);

function sauvegarde(){
    localStorage.setItem("donnes", listeTaches.innerHTML);
}

function ancienneSauvegarde(){
    listeTaches.innerHTML = localStorage.getItem("donnes");
}

ancienneSauvegarde();