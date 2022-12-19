// PURE FUNCTION GIVEN THE SAME INPUT IT WILL ALWAYS
// RETURN THE SAME VALUE AND HAS NO EFFECT OUTSIDE OF ITSELF
// AIM FOR PURE FUNTIONS FOR MORE PREDICTABLE CODEBASE AND METHODS
// USED IN THE WRONG CONTEXT WILL NOT CAUSE SIDE EFFECTS
function sum(a,b){
    return a + b
}
console.log("pure")
console.log(sum(1,11))//will always return 12
console.log(sum(1,1))//will always return 2


// IMPURE FUNTION WILL RETURN DIFFERENT VALUES CAN NOT PREDICT THE OUTCOME
function sumRandom(a){
    return a + Math.random()
} 
console.log("impure")
console.log(sumRandom(1))//THESE COULD BE DIFFERENT EVENT THOUGH THE INPUTS ARE THE SAME
console.log(sumRandom(1))//REALLY THEY ARE DIFFERENT 

// IMPURE FUCTIONS CAN BE CONSIDERD IMPURE IF THEY EFFECT ANYTHING OUTSIDE OF THEIR SCOPE 
// EVEN IF THE RETURNED VALUES ARE PREDICTABLE 
// THIS IS A SIDE EFFECT
let prevValue = 0;
console.log('prevValue');
console.log(prevValue)

function addTotal(num){
    prevValue += num
    return prevValue
}
addTotal(15)
console.log(prevValue)

// ANOTHER SIDE EFFECT HOBBIES HAS CHANGED AFTER THE FUNCTION
//  RAN THIS COULD BE AVOIDED BY MAKING A COPY AN RETURN THE COPY AFTER CHANGES
const hobbies = ['sports','reading','playing music']
console.log(hobbies)
function addToArray(array){
    hobbies.push('THIS NEW HOBBY')
}
addToArray(hobbies)
console.log(hobbies)
function nonMutatingAddToArray(array){
    const newHobbies = [...array];
    newHobbies.push('NEW HOBBY');
    return newHobbies;
}
console.log(hobbies)
console.log(nonMutatingAddToArray(hobbies))
console.log(hobbies)

// TRY TO KEEP IT LOGICAL AND NAME FUNCTIONS WITH A DESCRIPTION OF WHAT IT DOES
// IF THERE IS A SIDE EFFECT TRY AND CALL IT OUT
// GETS DATA FROM SERVER, DISABLES, TOGGLES, CLICKHANDLER ETC...
// YUP THIS ONE AGAIN FUNCTIONS GUIDE
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions

// CLOSURES!
// THIS DUDE MAKES IS SO SIMPLE https://www.youtube.com/watch?v=CQqwU2Ixu-U
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

// FACTORY FUNCTIONS!
// LOVE THIS DUDE! https://www.youtube.com/watch?v=ImwrezYhw4w
// FUNCTIONS THAT RETURN FUNTIONS OR OBJECTS
// FUNCTIONS ARE SLOWER THAN CLASSES BUT NOT A HUGE ISSUE UNLESS YOUR RENDERING 10,000 OBJECTS
function createTaxCalc(taxrate){
    function calculateTax(amount){
        return amount * taxrate;
    };
    return calculateTax;
};

const calculateCOSalesTax = createTaxCalc(.22);
const calculateCountySalesTax = createTaxCalc(.19);
console.log(calculateCOSalesTax(199.00))
console.log(calculateCountySalesTax(235.99))


// RECURSION!!!!! CHECK OUT DEVSAGE https://www.youtube.com/watch?v=LteNqj4DFD8
// https://www.youtube.com/watch?v=k7-N8R0-KY4
// Function THAT CALLS ITSELF UNTIL IT REACHES ITS BASECASE
// USE IT WHEN YOU WANT TO USE A FOR LOOP BUT DO NOT KNOW THE LENGTH 

// function powerOf(num,power){
//     let result = 1;
//     for(let i = 0; i< power;i++){
//         result *= num
//     }
//     return result;
// }

function powerOf(num,power){
    if(power === 1 ){ //BASECASE WE HAVE WIDDLED AWAY ALL THE TIMES WE NEED TO MULTIPY 
        return num
    }
    console.log(num,power);
    return num * powerOf(num, power - 1);
}
console.log(powerOf(2,4))//2 * 2 * 2 * 2 

// FROM A 4 LOOP TO ONE LINE!!
function anotherPowerOf(num,power){
    return power === 1 ? num : num * anotherPowerOf(num , power - 1)
}
console.log(anotherPowerOf(2,4))

// GREAT USE CASE FOR RECURSION 
// SOMETIMES WE MIGHT NOT KNOW IF THERE IS DATA ON SOME OF THE ELEMENTS
// HERE MAX AND MANUEL HAVE FRIENDS BUT JULIA AN CHRIS DO NOT 
// NESTING FOR LOOPS GETS MESSY AND HARD TO READ

// function printNames(person){
//     for(const friends of person.friends){
//         for (const friendsFriends of friends.friends){
//             etc... how many level of nesting would be needed?
//         }
//     }
// }

const someBody = {
    name:'Max',
    friends:[
        {
            name:'Manuel',
            friends:[
                {
                    name:'chris'
                }
            ]
        },
        {
            name:'julia'
        }
    ]
};

function printNames(person){
    const collectedNames = []

    if(!person.friends){
        return [];
    }
    for(const friend of person.friends){
        collectedNames.push(friend.name);
        collectedNames.push(...printNames(friend));
    }

    return collectedNames
}
console.log(printNames(someBody))