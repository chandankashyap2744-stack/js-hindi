const name = "chandan"
const repoCount = 50

// console.log(name + repoCount + " Value"); nver recomended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String(`chandan-ck-com`)

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("n"));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   Chandan   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://chandan.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('and'));

console.log(gameName.split('-'));








