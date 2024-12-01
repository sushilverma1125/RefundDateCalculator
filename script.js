// Function to add working days
function addWorkingDays(startDate, numDays, holidays) {
  const addDays = (date, days) => {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  };

  const isWeekendOrHoliday = (date) => {
    const day = date.getDay(); // 0 for Sunday, 6 for Saturday
    const formattedDate = date.toISOString().split("T")[0]; // Format: YYYY-MM-DD
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

// Function to format the date
function formatDate(date) {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

// Function to calculate and display the result
function calculateDate() {
  const startDate = document.getElementById("startDate").value;
  const numDays = parseInt(document.getElementById("numDays").value, 10);

  if (!startDate || isNaN(numDays) || numDays < 1) {
    document.getElementById("result").innerText = "Please enter valid inputs.";
    return;
  }

  const holidays = [
    "2024-01-01",
    "2024-01-13",
    "2024-01-15",
    "2024-01-17",
    "2024-01-14",
    "2024-01-25",
    "2024-01-26",
    "2024-02-10",
    "2024-02-14",
    "2024-02-14",
    "2024-02-19",
    "2024-02-24",
    "2024-03-06",
    "2024-03-08",
    "2024-03-12",
    "2024-03-20",
    "2024-03-24",
    "2024-03-25",
    "2024-03-28",
    "2024-03-29",
    "2024-03-31",
    "2024-04-05",
    "2024-04-09",
    "2024-04-09",
    "2024-04-09",
    "2024-04-10",
    "2024-04-11",
    "2024-04-13",
    "2024-04-14",
    "2024-04-14",
    "2024-04-17",
    "2024-04-21",
    "2024-04-23",
    "2024-05-01",
    "2024-05-08",
    "2024-05-12",
    "2024-05-23",
    "2024-06-16",
    "2024-06-17",
    "2024-06-21",
    "2024-07-07",
    "2024-07-17",
    "2024-07-21",
    "2024-08-04",
    "2024-08-15",
    "2024-08-15",
    "2024-08-19",
    "2024-08-26",
    "2024-08-26",
    "2024-09-07",
    "2024-09-15",
    "2024-09-16",
    "2024-09-22",
    "2024-10-02",
    "2024-10-03",
    "2024-10-09",
    "2024-10-10",
    "2024-10-11",
    "2024-10-12",
    "2024-10-17",
    "2024-10-20",
    "2024-10-31",
    "2024-10-31",
    "2024-10-31",
    "2024-11-02",
    "2024-11-03",
    "2024-11-07",
    "2024-11-15",
    "2024-11-24",
    "2024-12-21",
    "2024-12-24",
    "2024-12-25",
    "2024-12-26",
    "2024-12-31",
    "2025-01-01",
    "2025-01-02",
    "2025-01-06",
    "2025-01-13",
    "2025-01-14",
    "2025-01-14",
    "2025-01-14",
    "2025-01-26",
    "2025-01-29",
    "2025-02-02",
    "2025-02-12",
    "2025-02-14",
    "2025-02-19",
    "2025-02-23",
    "2025-02-26",
    "2025-03-02",
    "2025-03-13",
    "2025-03-14",
    "2025-03-14",
    "2025-03-20",
    "2025-03-28",
    "2025-03-30",
    "2025-03-30",
    "2025-03-30",
    "2025-03-31",
    "2025-03-31",
    "2025-04-06",
    "2025-04-10",
    "2025-04-13",
    "2025-04-13",
    "2025-04-14",
    "2025-04-14",
    "2025-04-15",
    "2025-04-17",
    "2025-04-18",
    "2025-04-20",
    "2025-05-01",
    "2025-05-09",
    "2025-05-11",
    "2025-05-12",
    "2025-06-07",
    "2025-06-15",
    "2025-06-21",
    "2025-06-27",
    "2025-07-06",
    "2025-07-10",
    "2025-08-03",
    "2025-08-09",
    "2025-08-15",
    "2025-08-15",
    "2025-08-15",
    "2025-08-16",
    "2025-08-27",
    "2025-09-05",
    "2025-09-05",
    "2025-09-22",
    "2025-09-22",
    "2025-09-28",
    "2025-09-29",
    "2025-09-30",
    "2025-10-01",
    "2025-10-02",
    "2025-10-02",
    "2025-10-07",
    "2025-10-10",
    "2025-10-20",
    "2025-10-20",
    "2025-10-22",
    "2025-10-23",
    "2025-10-28",
    "2025-10-31",
    "2025-11-05",
    "2025-11-24",
    "2025-12-15",
    "2025-12-21",
    "2025-12-22",
    "2025-12-24",
    "2025-12-25",
    "2025-12-31",
  ];

  const resultDate = addWorkingDays(startDate, numDays, holidays);
  const formattedResultDate = formatDate(resultDate);

  const resultDiv = document.getElementById("result");
  const messages = [
    `<span style="color: aquamarine;">The date after ${numDays} working days is:<span style="color: #ffffff;"> ${formattedResultDate}</span></span>`,
    `<span style="color: aquamarine; font-weight: bold;">Thank you for using our calculator! 💗</span>`,
    `<span style="color: white; font-weight: bold;">Help us grow! 🌱 <span style="color: aquamarine; font-weight: bold;">8002957962@axisb</span></span>`,
  ];

  let messageIndex = 0;

  const updateMessage = () => {
    resultDiv.innerHTML = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
  };

  // Start the message cycle
  updateMessage();
  setInterval(updateMessage, 2000);
}
