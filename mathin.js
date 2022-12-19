// IN JAVASCRIPT EVERY NUMBER IS A FLOAT 00.00
// UNLIKE JAVA AN OTHER PROGRAMMING LANGUAGES
// JAVASCRIPT DOES NOT KNOW SPECIAL INTEGER TYPES LIKE INT OR DOUBLE ETC..
// NUMBER ARE STORED AS 64 BIT FLOATING POINTS IN JAVASCRIPT
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
console.log(Number.MAX_SAFE_INTEGER)//9007199254740991
const maxNumber = Number.MAX_SAFE_INTEGER
console.log(maxNumber + 10)//9007199254741000 ??? 

console.log(Math.pow(2,53)-1)//the highest most reliable number we can work with as long as we are not adding
console.log(Math.pow(2,53)+1)//might get unpredicatable 

console.log(Number.MAX_VALUE)//hightest value we can work with with out worring about representation.
// WORKING WITH BOTH DECIMAL SYSTEM AN BIANARY NUMBER SYSTEM
console.log(Number.MIN_SAFE_INTEGER)


console.log(0.2 + 0.4);//SHOULD BE 0.6 DUH! WHAT 0.6000000000000001? WHY
console.log(0.2 + 0.4 === 0.6);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString
console.log((1).toString(2));//toString Takes are radix 2 is for binary 

console.log((1/5).toString(2));

// CAN BY USED TO HELP FIX SOME ERRORS
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
console.log(0.2.toFixed(20));

// BigInt
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
// REPRESENTED AS A STRING ONLY WORKING WITH INTEGERS CAN NOT MIX WITH OTHER TYPES AND NEEDS TO BE CONVERTED
console.log(10007199254740991n);
10n - 4n 
// 10n - 4 //error mathin.js:34 Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
// 10 - 4n //same error
parseInt(10n) - 4
10n - BigInt(4)
console.log(10n / 2n);
console.log(5n/2n) //NO 2.5 IN BIG INT

// MATH 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
console.log(Math)

function randomNumber(min, max){
   return Math.floor(Math.random() * (max - min + 1) + min) 
}

console.log(randomNumber(1,100))
console.log(randomNumber(1,100))
console.log(randomNumber(1,100))
console.log(randomNumber(1,100))

