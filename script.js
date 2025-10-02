// ✅ Part 1: Variable Declarations and Conditionals
let userName = "Ropk";
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome, " + userName);
} else {
  console.log("Please log in.");
}

// ✅ Part 2: Custom Functions
function greetUser(name) {
  return `Hello, ${name}!`;
}

function calculateSum(a, b) {
  return a + b;
}

// ✅ Part 3: Loop Examples
function showNumbers() {
  let output = "";
  for (let i = 1; i <= 5; i++) {
    output += i + " ";
  }
  console.log("Numbers:", output);
}

function listFruits() {
  const fruits = ["Apple", "Banana", "Cherry"];
  for (let fruit of fruits) {
    console.log("Fruit:", fruit);
  }
}

// ✅ Part 4: DOM Interactions
document.getElementById("greetBtn").addEventListener("click", () => {
  const message = greetUser(userName);
  document.getElementById("output").textContent = message;
});

document.getElementById("loopBtn").addEventListener("click", () => {
  let result = "";
  for (let i = 0; i < 3; i++) {
    result += `Loop ${i + 1} executed\n`;
  }
  document.getElementById("output").textContent = result;
});

// Change title color on load
document.getElementById("main-title").style.color = "blue";

// Log DOM element
console.log(document.getElementById("output"));