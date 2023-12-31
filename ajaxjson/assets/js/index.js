function jsonLink(){ //connection making
    const xhr = new XMLHttpRequest();
    xhr.onload = onLoad;
    xhr.open("GET", "https://swapi.dev/api/people", true);
    xhr.send(null);
    // here the status van the server is still not known
}

function onLoad(){ //if the connection is okay
    const overzicht = document.getElementById("overzicht");
    let ul = document.createElement("ul");
    let people = JSON.parse(this.responseText);
    for (let i=0; i<people["results"].length;i++){
        let li = document.createElement("li");
        if (people.name !== ""){
            console.log(people["results"][i]["name"]);
            li.innerHTML = people["results"][i]["name"];
        }
        ul.appendChild(li);
    }
    overzicht.appendChild(ul);
}

window.addEventListener("load",jsonLink);

