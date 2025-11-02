
function SayMyName() {
    console.log("C");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("D");
    console.log("A");
    console.log("N");
    
}

// SayMyName();

function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}

addTwoNumbers(4, 5);

const result = addTwoNumbers(7, 8);
// console.log("Result:", result); // undefined

function addTwoNumbers(num1, num2) {
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
}

const result2 = addTwoNumbers(3,5)
// console.log("Result:", result2);

// ***********************************************************************

function loginUsreMessage(username){
    // if(username === undefined){
    //     console.log("Please enter a username");
    //     return;   
    // }
     if(!username){
        console.log("Please enter a username");
        return;   
    }
    return `Hello ${username}, welcome back!`;
}

// console.log(loginUsreMessage("Chandan"))
// console.log(loginUsreMessage())


// function calculateCartPrice(...num1){
//     return num1;
// }

// console.log(calculateCartPrice(200, 400, 500, 2000));


function calculateCartPrice(val1, val2, ...num1){
    return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 2000, 3000));

const user = {
    username: "chandan",
    price: 400,
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "kashyap",
    price: 500,
})

const myArray = [1,2,3,4,5];

function returnSecondvalue(getArray){
    return getArray[1];
}

console.log(returnSecondvalue(myArray));
