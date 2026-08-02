// write a program to print prime numbers from 1 to 100
let numbers = 11; t=0;
for (let i = 2; i <= numbers; i++) {
    if (numbers % i === 0) {
        t=t+1;
    }
}
if (t === 1) {
    console.log(numbers + " is a prime number.");
} else {
    console.log(numbers + " is not a prime number.");
}   