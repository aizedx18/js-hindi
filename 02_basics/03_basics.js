// singleton
// Object.create 

const { jsx } = require("react/jsx-runtime")

// object literals 

const mySym = Symbol("key1")


const JsUser = {
    name: "Aized",
    "full name": "Aized khan",
    [mySym]: "mykey1",
    age: 20,
    location: "Bareilly",
    email: "aized@google.com",
    isLoggedIn: false,
    LastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "aized@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "aized@microsoft.com"
// console.log(JsUser);

JsUser.greetingTwo = function(){
    console.log('Hello JS user, ${this.name}');
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());






