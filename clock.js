function updateClock() {
    const now = new Date();

    // Get hours, minutes, seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros if needed
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Get the date
    const day = now.getDate();
    const month = now.getMonth() + 1; // Months are 0-based
    const year = now.getFullYear();

    // Format time and date
    const timeString = hours + ':' + minutes + ':' + seconds;
    const dateString = day + '/' + month + '/' + year;

    // Update the clock and date elements
    document.getElementById('clock').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

// Call the updateClock function every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);

// Call once initially to avoid delay
updateClock();