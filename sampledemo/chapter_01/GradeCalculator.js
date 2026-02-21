// Write a program that calculates and displays the letter grade for a given numerical score (e.g., A, B, C, D, or F) based on the following grading scale:
// 90-100: A
// 80-89: B
// 70-79: C
// 60-69: D
// 59-0 : F
function calculaterGrade (score) {
    if (score >=90 && score <= 100) {
        return 'A';
    } else if (score >=80 && score <=89) {
        return 'B';
    } else if (score <=70 && score <=79) {
        return 'C';
    } else if (score >=60 && score <=69) {
        return 'D';
    }else if (score <=50 && score >=0) {
        return 'F'; 
    } else {
        return 'Invalid score';
    }
}

// Example
let score = 85;
let grade = calculaterGrade(score);
console.log("The letter grade for a score of " + score + " is: " + grade);