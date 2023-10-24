document.querySelector('#id-checkbox').addEventListener('click',function(event){
    document.getElementById('resultaat').innerHTML = "standard gedraging uitgeschakelen";
    event.preventDefault();
}, false)