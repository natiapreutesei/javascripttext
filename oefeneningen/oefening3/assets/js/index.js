function pow(base,exponent){ //function that asks for two parameters, the base and the exponent
    let result = base; //initializing the result with the same number that we gave for base // ex. base=2; result=2;
    for (let i=1;i<exponent; i++){   //it repeats the circle as many times as the exponent
        result = result*base;  //we store the value of r*b in result. that means that the first iteration we will have 2=2*2
    }                          //then the second iterations 4=4*2 with the result being 8
    return result;
}

function calculate(){
    var inputBase = document.getElementById("base");
    var inputExponent = document.getElementById("exponent");
    let base = inputBase.value;
    let exponent = inputExponent.value;

    let result = pow(base,exponent);
    let displayResult = document.getElementById("result");
    displayResult.innerHTML =`RESULT : ${base}^${exponent} = ${result}`;
    displayResult.className = "text-center";
    displayResult.style.fontWeight = "bold";
}