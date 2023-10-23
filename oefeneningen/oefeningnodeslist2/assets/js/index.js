function go() {
    var input = document.getElementById('myInput');
    var list = document.querySelector('.list-group');
       if (input.value === ''){
           alert("The field cannot be empty!");
       }else{
           var item = document.createElement('li');
           item.className = 'list-group-item';
           item.textContent = input.value;

           list.appendChild(item);
           input.value='';
       }
}