function leapYear(year){
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
         return  true;
        /*document.write(year + " is a leap year.")*/
    }else{
        return false;
        /*document.write(year + "is not a leap year.")*/
    }
}
function checkLeapYear(){
    const yearInput = document.getElementById("yearInput");
    const result = document.getElementById("result");
    const year=Number(yearInput.value);
    const isLeap = leapYear(year);
    if (isLeap){
        result.style.backgroundColor = 'green';
        result.textContent = "Leap Year";
    }else{
        result.style.backgroundColor = 'red';
        result.textContent = "Not Leap Year";
    }
}