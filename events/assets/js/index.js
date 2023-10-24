window.onload = function (){
    document.getElementById("textButton").addEventListener("click",function (){
        var naam = document.getElementById("textNaam").value;
        document.getElementById('resultaat').innerHTML = naam;
    }, false)
}
