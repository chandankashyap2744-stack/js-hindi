// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2025,0,31)
//let myCreatedDate = new Date(2025, 0, 23, 5, 3)
// console.log(myCreatedDate.toDateString());
//let myCreatedDate = new Date("2025-01-14")
let myCreatedDate = new Date("01-14-2025")

// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));    // to get time in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// '${newDate.toLocaleString()} and the time'

newDate.toLocaleString('default',{
    weekday: "long"
})



