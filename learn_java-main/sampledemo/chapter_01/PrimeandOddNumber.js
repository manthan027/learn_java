// Write a program that checks if a given number is prime and odd. A prime number is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers. An odd number is an integer that is not divisible by 2.

for (let i = 1; i <= 100; i++) {
    temp = 0;
    for (let j = 2; j <= i-1; j++) {
        if (i % j === 0) {
            temp = temp + 1;
        }
    }
    if (temp === 0 ) {
        console.log(i);
    } else {
        temp = 0;
    }
}