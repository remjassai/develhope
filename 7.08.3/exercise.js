const question1 = 101 < 67;
const question2 = 1 == true;
const question3 = true != 1
const question4 = 4 <= 4

console.log(question1 || question2) //il risultato deve essere true
console.log(question1 && question2) //il risultato deve essere false
console.log(question3 || question2) //il risultato deve essere true
console.log(question4 ==! question4) //il risultato deve essere false
console.log(question2 ==! question4) //il risultato deve essere false