function fetchPeople() {
    axios.get("https://swapi.dev/api/people").then(response=>{
        const people = response.data;
        displayPeople(people.results);
    })
}

function displayPeople(peopleList) {
    const overzicht = document.getElementById("overzicht");
    let ul = document.createElement("ul");
    for (let i=0; i<peopleList.length; i++){
        let li = document.createElement("li");
        li.innerHTML = peopleList[i]['name'];
        ul.appendChild(li);
    }
    overzicht.appendChild(ul);
}

window.addEventListener('load', fetchPeople);