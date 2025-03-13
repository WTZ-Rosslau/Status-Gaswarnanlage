// Function to update the cell content
function updateCell() {
    // Get the cell by its ID
    var cell = document.getElementById('cell1');
    
    // Update the content of the cell with new value (just an example)
    cell.textContent = Math.random().toFixed(2); // Random value (for demonstration purposes)
}

// Set an interval to update the cell every 5 seconds
setInterval(updateCell, 1000);
