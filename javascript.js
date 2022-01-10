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

//6) Copy password to clipboard

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = result.innerText;

    if(!password) {
        return;
    }

    textarea.value = password;
    //append child puts it in the body
    document.body.appendChild(textarea);
    textarea.select();
    //copy to clipboard
    document.execCommand('copy');
    //remove text area after
    textarea.remove();
    alert('password copied to clipboard!');
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

    //adding {} gives a name to the boolean/ objects
    //filer loops through each item, and based on true or false, will take out = flase
    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter
    //get value of true or false, then pass in ITEM which is an array
    //if false, or unchecked it should be filtered out of the array starting with 0
    (item => Object.values(item)[0]
    );

    //Which are true and false in the array
    console.log('typesArr: ', typesArr)

    //if nothing checked, return nothing
    if(typesCount === 0) {
        return '';
    }

    // number 3
    //generate different characters and call generator function for each type
    //int by number of checked boxes (i+=typescount)
    // part 1) this will do one of each type, so we need to slice it down for length selected (website) under 4 length, otherwise length of 1 will produce 4
    for(let i=0; i<length; i+=typesCount) {
        //loop through each type of array
        typesArr.forEach(type => {
            //call object of const randomFunc above keys
            const funcName = Object.keys(type)[0]
            //shows it looping through and pulling out random items from each type
            //console.log('funcName: ', funcName);

            //will add to open string 'let' above
            generatePassword += randomFunc[funcName]();
        });
    }
    //part 2) adding slice 0(starting at beginning) and use the length inputted
    //console.log - to test below
    const finalPassword = (generatePassword.slice(0, length));

    //THE END!!  This will show up in the box   
    return finalPassword;
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
