// Function to create a Promise that resolves after a specific delay
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Async function to handle the display after delay
async function displayAfterDelay() {
  // Get user input values
  const textValue = document.getElementById('text').value;
  const delayValue = parseInt(document.getElementById('delay').value, 10);

  // If delayValue is not a number, do not proceed
  if (isNaN(delayValue)) {
    alert('Please enter a valid number for delay.');
    return;
  }

  try {
    // Await for the delay to complete before continuing
    await delay(delayValue);
    // Display the user-entered text
    document.getElementById('output').textContent = textValue;
  } catch (error) {
    console.error('Error during delay:', error);
  }
}

// Adding event listener to the button when the content is loaded
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btn').addEventListener('click', displayAfterDelay);
});