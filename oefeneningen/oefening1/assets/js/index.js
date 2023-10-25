function perimeterSquare(side){ //function to calculate perimeter of a square and rhombus
    return side*4;
}
function areaSquare(side){ //function to calculate the area of a square
    return side*side;
}
function areaRhombus(diagonal1,diagonal2){ //function to calculate the area og a rhombus
    return (diagonal1*diagonal2)/2;
}
function perimeterTriangle(sidea,sideb,sidec){ //function to calculate perimeter of a triangle
    return sidea+sideb+sidec;
}
function areaTriangle(base,height){ //function to calculate the area of a triangle
    return 1/2*base*height;
}
function perimeterParallelogram(sideA,sideB){ //function to calculate perimeter of a parallelogram
    return (sideA*2)+(sideB*2);
}
function areaParallelogram(base,height){ //function to calculate the area of a parallelogram
    return base*height;
}
function perimeterCircle(radius){ //function to calculate the perimeter of a circle
    const pi = 3.14;
    return 2*pi*radius;
}
function areaCircle(radius){ //function to calculate the area of a circle
    const pi = 3.14;
    return pi*radius*radius;
}

let mSelected = document.getElementById("menu");
function clck(){
    if(mSelected.value === "1"){
        perimeterSquare();
    }

   if(mSelected.value == "2"){
        perimeterSquare();
    }

    /*if(qSelect.value == "3"){
        qCD.innerHTML = "14";
        qStats1.innerHTML = "160";
    }*/
}
mSelected.addEventListener('change',clck);