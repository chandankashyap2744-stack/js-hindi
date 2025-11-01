// singleton

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Chandan",
    "full name": "Chandan Kashyap",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "chandan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["emal"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "chandan@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "chandan@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JsUser");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JsUser, ${this.name}`);
}



console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

