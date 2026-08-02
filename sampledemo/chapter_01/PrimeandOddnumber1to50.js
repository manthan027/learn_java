// Write all the prime and odd number from 1 to 50
let x = 50;
console.log("Prime numbers from 1 to " + x + ":");
for (let i = 1; i <= x; i++) {
    if (x%i==0) {
        console.log(i);
    }
}
console.log("Odd numbers from 1 to " + x + ":");
for (let i = 1; i <= x; i += 2) {
    console.log(i);
}