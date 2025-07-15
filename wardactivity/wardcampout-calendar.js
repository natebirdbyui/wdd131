document.addEventListener("DOMContentLoaded", () => {
    const calendarEl = document.getElementById("campout-calendar");
    if (!calendarEl) return;

    const campoutYear = 2025;
    const campoutMonth = 7; // August (0-based)
    const campoutDays = [29, 30];

    const year = campoutYear;
    const month = campoutMonth;

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let html = `<div class="calendar-header"><h3>Save the Date - August 2025</h3></div>`;
    html += `<div class="calendar-weekdays">`;
    weekdays.forEach(day => {
        html += `<div class="calendar-weekday">${day}</div>`;
    });
    html += `</div><div class="calendar-days">`;

    for (let i = 0; i < firstDay; i++) {
        html += `<div class="calendar-day empty"></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const isCampoutDay = campoutDays.includes(day);
        html += `<div class="calendar-day${isCampoutDay ? " campout-day" : ""}">${day}</div>`;
    }

    html += `</div>`;

    calendarEl.innerHTML = html;
});
