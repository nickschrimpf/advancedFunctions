// TAGGED TEMPLATES

function productDestcription(strings,productName,productPrice){
    console.log(strings)
    console.log(productName)
    console.log(productPrice)
    let priceCatigory = 'cheap';
    if(prodcutPrice > 20){
        priceCatigory = 'fair';
    }
    
    return`${strings[0]}${productName}${strings[1]}${priceCatigory}${strings[2]} price at ${prodcutPrice}`;
}
const productName = 'javaScript Course';
const prodcutPrice = 29.99;

const productOutput = productDestcription`this product (${productName}) is ${prodcutPrice}`;

console.log(productOutput)


// REGEX!!!  THIS ALWAYS FELT LIKE MAGIC JUST SOMETHING I DIDN'T UNDERSTAND
//  its not magic but still kind of wierd might be something to look up because
// it might take a while to get used to writing complex patterns and might not be that useful

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
const userInput = 'testtest.com'
const regex = /^\S+@\S+\.\S+$/;
const anotherRegex = new RegExp('^\S+@\S+\.\S+$');

regex.test(userInput);
regex.test('test@test.com');
console.log(regex.test('test@test.com'))
console.log(regex.test(userInput))

const regexHello = /hello/
console.log(regexHello.test('Hello'))//false
console.log(regexHello.test('hello'))//true case sensitive
const regExhelloOrHello = /(h|H)ello/;
console.log(regExhelloOrHello.test('hello'))//true
console.log(regExhelloOrHello.test('Hello'))//true we are allowing either case
console.log(regExhelloOrHello.test('hi - Hello, how are you?'))// yup! still in there! 

