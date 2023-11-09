let array = [];
function pushArray(){
    let word = document.getElementById("something").value;
    array.push(word);
    document.getElementById('something').value = '';
}
function showArray(){
    let result = document.getElementById("result");
    let p = document.createElement("p");
    p.classList.add("border","border-1","rounded-pill","bg-success","text-white","text-center","m-2");
    p.textContent = array.join(" ");
    result.appendChild(p);
}

//declaration variables needed for the loop
let lastN =0;
let reverseArray = [];
function invertArray(){
    lastN=array.length;
    for (let i=0; i<array.length; i++){
        reverseArray[lastN] = array[i];
        lastN--;
    }
    let result = document.getElementById("result");
    let p = document.createElement("p");
    p.classList.add("border","border-1","rounded-pill","bg-success","text-white","text-center","m-2");
    p.textContent = reverseArray.join(" ");
    result.appendChild(p);
}
