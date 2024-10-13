function addWorkingDays(startDate, numDays, holidays) {
    const addDays = (date, days) => {
        const result = new Date(date);
        result.setDate(result.getDate() + days);
        return result;
    };

    const isWeekendOrHoliday = (date) => {
        const day = date.getDay();
        const formattedDate = date.toISOString().split('T')[0];
        return day === 0 || day === 6 || holidays.includes(formattedDate);
    };

    let currentDate = new Date(startDate);
    let daysAdded = 0;

    while (daysAdded < numDays) {
        currentDate = addDays(currentDate, 1);
        if (!isWeekendOrHoliday(currentDate)) {
            daysAdded++;
        }
    }

    return currentDate;
}

function formatDate(date) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function calculateDate() {
    const startDate = document.getElementById('startDate').value;
    const numDays = parseInt(document.getElementById('numDays').value, 10);

    if (!startDate || isNaN(numDays) || numDays < 1) {
        document.getElementById('result').innerText = "Please enter valid inputs.";
        return;
    }

    const holidays = [
        '2024-01-01', '2024-01-13', '2024-01-14', '2024-01-26', '2024-02-09',
        '2024-03-29', '2024-04-10', '2024-04-13', '2024-04-21', '2024-05-23',
        '2024-06-17', '2024-08-07', '2024-08-15', '2024-08-19', '2024-08-28',
        '2024-09-17', '2024-09-24', '2024-10-02', '2024-10-10', '2024-10-11',
        '2024-10-25', '2024-11-01', '2024-11-08', '2024-11-15', '2024-12-03',
        '2024-12-25'
    ];

    const resultDate = addWorkingDays(startDate, numDays, holidays);
    const formattedResultDate = formatDate(resultDate);
    const thanksMessage = `Date after ${numDays} working days is: ${formattedResultDate}`;
    const thanksMessage1 = `Thank you for using our calculator!💗`;
    
    document.getElementById('result').innerText = thanksMessage;
    document.getElementById('result1').innerText = thanksMessage1;

    trackUniqueVisitors();
}

function trackUniqueVisitors() {
    const deviceId = localStorage.getItem('deviceId');

    if (!deviceId) {
        // Generate a unique identifier for the device
        const newDeviceId = Date.now().toString() + Math.random().toString();
        localStorage.setItem('deviceId', newDeviceId);
        incrementVisitorCount();
    }
}

function incrementVisitorCount() {
    const deviceId = localStorage.getItem('deviceId');

    fetch('/increment-visitor-count', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ deviceId })
    })
    .then(response => response.json())
    .then(data => {
        console.log(`Current unique visitor count: ${data.count}`);
    })
    .catch(error => {
        console.error('Error updating visitor count:', error);
    });
}


document.getElementById('toggleInstructions').addEventListener('click', function() {
    const instructionsBox = document.querySelector('.instructions-box');
    instructionsBox.style.display = instructionsBox.style.display === 'none' || instructionsBox.style.display === '' ? 'block' : 'none';
});
