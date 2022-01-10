// 3) DOM elements
const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

// 2) putting functions in object as keys
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
};

// 4) adding event listeners (When this is clicked we need to get the value)
//Length of password event listener
//Generate event Listen
generateEl.addEventListener('click', () =>{
    //+ changes string to 'number' same as -parse int-
    const length = +lengthEl.value;
    //check to see if boxes are checked (true or false)
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbol = symbolsEl.checked;

    //typeof changes actual number to 'number'
    //console.log(typeof length);

    //confirm if they are true or false when checked.
    //console.log(hasLower, hasUpper, hasNumber, hasSymbol);

    //function that passes in above + length => result gets passed into result element
    resultEl.innerText = generatePassword(
        hasLower, 
        hasUpper, 
        hasNumber, 
        hasSymbol, 
        length
    );
});

// 5) Genrate Password Function
function generatePassword(lower, upper, number, symbol, length) {
    //1. init password var
    //2. filter out unchecked types
    //3. loop over the length & call generator function for each type
    //4. add final password to password Var and return it so it's put into resultEl.innerText

    let generatePassword = '';

    const typesCount = lower + upper + number + symbol;
    //checking what has been checked/selected in boxes
    console.log('typesCount: ', typesCount);

    const typesArr = [lower, upper, number, symbol];
    //Which are true and false in the array
    console.log('typesArr: ', typesArr)
}

// 1) generator functions www.net-comber.com/charset.html

function getRandomLower() {
 return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%&*'
    return symbols[Math.floor(Math.random() * symbols.length)];
}



//returns within the range needed by adding 97
//console.log(Math.floor(Math.random() * 26) + 97);

//Charcode is a 3rd party system for JS
//console.log(String.fromCharCode(97));
