// Write a program that classifies a triangle based on its side lengths. 
// Given three input values representing the lengths of the sides, determine if the triangle is equilateral (all sides are equal), isosceles (exactly two sides are equal), or scalene (no sides are equal). 
// Use an if-else statement to classify the triangle.

function classifyTriangle(side1, side2, side3) {
if (side1 === side2 && side2 === side3) {
        return "Equilateral";
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        return "Isosceles";
    } else {
        return "Scalene";
    }
}

// Example usage
let side1 = 5;
let side2= 5;
let side3 = 5;
let triangleType = classifyTriangle(side1, side2, side3);
console.log("The triangle with sides " + side1 + ", " + side2 + ", and " + side3 + " is classified as: " + triangleType);