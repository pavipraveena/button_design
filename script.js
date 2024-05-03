let count = 0;
const display = document.getElementById("display");
const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");

function changeCount(amount) {
  count += amount;
  display.textContent = count;
}

// Initialize buttons based on the current count
changeCount(0);