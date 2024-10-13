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

    // Define holidays (as YYYY-MM-DD strings)
    const holidays = [
        '2024-01-01', // New Year's Day
        '2024-01-13', // Lohri
        '2024-01-14', // Sankranti/Pongal
        '2024-01-26', // Republic Day
        '2024-02-09', // Maha Shivaratri
        '2024-03-29', // Good Friday
        '2024-04-10', // Eid-ul-Fitr (date may vary)
        '2024-04-13', // Baisakhi
        '2024-04-21', // Mahavir Jayanti
        '2024-05-23', // Buddha Purnima
        '2024-06-17', // Eid-ul-Adha (Bakrid) (date may vary)
        '2024-08-07', // Janmashtami
        '2024-08-15', // Independence Day
        '2024-08-19', // Raksha Bandhan
        '2024-08-28', // Onam
        '2024-09-17', // Ganesh Chaturthi
        '2024-09-24', // Vishwakarma Puja
        '2024-10-02', // Gandhi Jayanti
        '2024-10-10', // Navratri Begins
        '2024-10-11', // Dussehra (Vijayadashami)
        '2024-10-25', // Karva Chauth
        '2024-11-01', // Diwali (Deepavali) (date may vary)
        '2024-11-08', // Chhath Puja
        '2024-11-15', // Guru Nanak Jayanti
        '2024-12-03', // St. Francis Xavier Feast
        '2024-12-25'  // Christmas Day
    ];
    const resultDate = addWorkingDays(startDate, numDays, holidays);
    const formattedResultDate = formatDate(resultDate);
    const thanksMessage = `Date after ${numDays} working days is: ${formattedResultDate}`;
    const thanksMessage1 = `Thank you for using our calculator!💗`;
    
    // Displaying the result in the result element
    document.getElementById('result').innerText = thanksMessage;
    document.getElementById('result1').innerText = thanksMessage1;
    

}
