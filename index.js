// Your code here

const gameFieldWidth = 400; 
const dodgerWidth = 40;     

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  // Check if moving right is within the game field bounds
  if (left < (gameFieldWidth - dodgerWidth)) {
    dodger.style.left = `${left + 1}px`; // Move right by 1px
  }
}

function moveDodgerLeft() {
    const dodger = document.getElementById("dodger");
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    
    if (left > 0) {  // Check if dodger is within the game field
      dodger.style.left = `${left - 1}px`;
    }
  }
  

// Event listener for keyboard input
document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
