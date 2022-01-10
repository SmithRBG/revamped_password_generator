//generator functions

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


console.log(getRandomSymbol());

//returns within the range needed by adding 97
//console.log(Math.floor(Math.random() * 26) + 97);

//Charcode is a 3rd party system for JS
//console.log(String.fromCharCode(97));
