document.body.onload = addElement;

function addElement(){
    //een nieuwe div zetten
    var newDiv = document.createElement("div");
    //tekst nodig voor mijn div
    var newContent = document.createTextNode("Hallo, full stack developers!");
    //samenvoegen van div en tekst
    newDiv.appendChild(newContent);
    //push deze div naar de DOM
    var currentDiv = document.getElementById("div1");
    document.body.insertBefore(newDiv, currentDiv);
}