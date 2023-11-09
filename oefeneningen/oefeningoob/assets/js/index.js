class Person{
    /*characteristics*/
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    /*methods*/
    fullName(){
        return this.name + ' ' + this.surname;
    }
}
/*child*/
class Student extends Person{
    /*characteristics*/
    constructor(name,surname, s_number){
        super(name, surname);
        this.s_number = s_number;
    }
    /*methodes*/
    showStudentInfo(){
        return `Student: ${this.fullName()}, Student-number: ${this.s_number}`;
    }
}
/*Program*/
let arrayStudent = [];
function add(){
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let s_number = document.getElementById("s_number").value;

    arrayStudent.push(new Student(name,surname,s_number));
    console.log(arrayStudent);
}

function show(){
    let listStudents = document.getElementById("listStudents");
    listStudents.innerHTML = "";
    arrayStudent.forEach(student => {
        let listItem = document.createElement("li");
        listItem.className = 'list-group-item rounded-pill bg-primary text-center';
        listItem.textContent = student.showStudentInfo();
        listStudents.appendChild(listItem);
    });
}



/*
let v = 'Tom';
let f='Vanhoutte';
let s = 1111;

let student1 = new Student('Benjamin', 'm', 53663);
let student2 = new Student('Ruben');
let student3 = new Student(v,f,s);
console.log(student1.studentnummer);
console.log(student3.voornaam);*/
