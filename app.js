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
