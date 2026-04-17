/**
 * Updates the millisecond timer.
 * Ensures data-testid="test-user-time" is always current.
 */
function updateTime() {
    const timeDisplay = document.querySelector('[data-testid="test-user-time"]');
    if (timeDisplay) {
        timeDisplay.textContent = Date.now();
    }
}

// Initial render
updateTime();

// Update every 10ms for high precision, 
// though 100ms-500ms is usually enough for visual comfort.
setInterval(updateTime, 100);