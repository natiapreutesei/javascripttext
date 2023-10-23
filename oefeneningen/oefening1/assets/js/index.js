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
function perimeterParallelogram(sidea,sideb){ //function to calculate perimeter of a parallelogram
    return (sidea*2)+(sideb*2);
}1
function areaParallelogram(base,height){ //function to calculate the area of a parallelogram
    return base*height;
}
function perimeterCircle(radius){ //function to calculate the perimeter of a circle
    var pi=3.14;
    return 2*pi*radius;
}
function areaCircle(radius){ //function to calculate the area of a circle
    var pi=3.14;
    return pi*radius*radius;
}
/*
var diagonal1 = 10;
var diagonal2 = 15;
let area = areaRhombus(diagonal1,diagonal2);
console.log(area);
*/


