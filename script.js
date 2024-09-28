let interval = null;  // To store the interval ID
let milliseconds = 0;  // Track total milliseconds

// Function to format time in MM:SS:MS format
function formatTime(totalMilliseconds) {
    const totalSeconds = Math.floor(totalMilliseconds / 1000);
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');
    const millis = String(totalMilliseconds % 1000).padStart(3, '0');
    return `${minutes}:${seconds}:${millis}`;
}

// Function to update the stopwatch
function updateStopwatch() {
    milliseconds += 10;  // Update by 10 milliseconds
    document.getElementById('stopwatch').textContent = formatTime(milliseconds);
}

document.getElementById('startStop').addEventListener('click', function() {
    const button = this;

    // Toggle button text
    if (button.textContent === "Stop") {
        button.textContent = "Start";

        // Stop the interval to stop the stopwatch
        clearInterval(interval);
        interval = null;  // Reset the interval ID
    } else {
        button.textContent = "Stop";

        // Start the interval to update the stopwatch every 10 milliseconds
        interval = setInterval(updateStopwatch, 10);
    }
});

document.getElementById('reset').addEventListener('click', function() {
    // Stop the interval if running
    clearInterval(interval);
    interval = null;

    // Reset the time and stopwatch display
    milliseconds = 0;
    document.getElementById('stopwatch').textContent = formatTime(milliseconds);

    // Reset the start/stop button text to "Start"
    document.getElementById('startStop').textContent = "Start";
});
