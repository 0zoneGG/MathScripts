const a = 26;
const b = 19;
const c = 30;

// Find the smallest number
let smallest;
if (a <= b && a <= c) {
  smallest = a;
} else if (b <= a && b <= c) {
  smallest = b;
} else {
  smallest = c;
}

// Find the largest number
let largest;
if (a >= b && a >= c) {
  largest = a;
} else if (b >= a && b >= c) {
  largest = b;
} else {
  largest = c;
}

console.log("Smallest number: " + smallest);
console.log("Largest number: " + largest);
