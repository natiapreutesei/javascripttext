function checkPalindrome(word){
        const cleanedWord = word.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
        return cleanedWord === cleanedWord.split('').reverse().join('');
}

function check(){
    let word = document.getElementById("word").value;
    if (checkPalindrome(word)) {
        let displayResult = document.getElementById("result");
        displayResult.innerHTML = (`${word} is a palindrome.`);
        displayResult.className = "text-center";
        displayResult.style.fontWeight = "bold";
    } else {
       let displayResultFalse = document.getElementById("result");
        displayResultFalse.innerHTML = (`${word} is not a palindrome.`);
        displayResultFalse.className = "text-center";
        displayResultFalse.style.fontWeight = "bold";
    }
}