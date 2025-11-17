document.addEventListener("DOMContentLoaded", () => {
    const calendarBody = document.getElementById('calendar-body');
    const monthYear = document.getElementById('month-year');
    const prevBtn = document.getElementById('prev-month');
    const nextBtn = document.getElementById('next-month');
    const eventList = document.getElementById('event-list');

    let currentDate = new Date();

    // Add events here:
    // Format: "YYYY-MM-DD": "Event description"
    const events = {
    "2025-08-29": "Ward Campout starts @ 1 PM!",
    "2025-08-30": "Ward Campout ends @ 11 AM",
    "2025-09-01": "Labor Day",
    "2025-10-25": "Trunk-or-Treat & Chili Cook-off @ 5-8 PM",
    "2025-10-31": "Halloween",
    "2025-11-11": "Veterans Day",
    "2025-11-26": "Thanksgiving",
    "2025-12-20": "Ward Christmas Party 6 PM @ Montana Building",
    "2025-12-24": "Christmas Eve",
    "2025-12-25": "Christmas Day",
    "2025-12-31": "New Year's Eve",
    "2026-01-01": "New Year's Day",
    "2026-01-20": "Martin Luther King Jr. Day",
    "2026-02-14": "Valentine's Day",
    "2026-02-17": "Presidents' Day",
    "2026-03-13": "Karaoke Game Night @ 6 PM Stake Center",
    "2026-05-25": "Memorial Day",
    "2026-07-04": "Independence Day",
    "2026-09-06": "Labor Day",
    "2026-10-30": "Trunk-or-Treat & Chili Cook-off @ 6 PM",
    "2026-10-31": "Halloween",
    "2026-11-11": "Veterans Day",
    "2026-11-26": "Thanksgiving",
    "2026-12-19": "Ward Christmas Party 6 PM @ Stake Center",
    "2026-12-24": "Christmas Eve",
    "2026-12-25": "Christmas Day",
    "2026-12-31": "New Year's Eve",
    };

    function renderCalendar(date) {
        calendarBody.innerHTML = '';
        const year = date.getFullYear();
        const month = date.getMonth();

        // Get today's date in timezone
        const today = new Date();
        const todayStr = today.getFullYear() + '-' +
            String(today.getMonth() + 1).padStart(2, '0') + '-' +
            String(today.getDate()).padStart(2, '0');

        // Display month year
        monthYear.textContent = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long' });

        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);

        const startDay = firstDayOfMonth.getDay(); // 0-6 (Sun-Sat)
        const totalDays = lastDayOfMonth.getDate();

        let day = 1;
        for (let i = 0; i < 6; i++) {  // 6 weeks rows max
            const row = document.createElement('tr');

            for (let j = 0; j < 7; j++) {
                const cell = document.createElement('td');

                if (i === 0 && j < startDay) {
                    cell.textContent = '';
                } else if (day > totalDays) {
                    cell.textContent = '';
                } else {
                    const dayStr = day < 10 ? `0${day}` : day;
                    const monthStr = (month + 1) < 10 ? `0${month + 1}` : (month + 1);
                    const dateStr = `${year}-${monthStr}-${dayStr}`;

                    cell.textContent = day;

                    if (events[dateStr]) {
                        cell.classList.add('event-day');
                        cell.title = events[dateStr];
                    }

                    if (dateStr === todayStr) {
                        cell.classList.add('today');
                    }

                    cell.addEventListener('click', () => {
                        showEventDetails(dateStr);
                    });

                    day++;
                }
                row.appendChild(cell);
            }

            calendarBody.appendChild(row);
        }
    }

    function showEventDetails(dateStr) {
        eventList.innerHTML = '';
        if (events[dateStr]) {
            const li = document.createElement('li');
            li.textContent = `${dateStr}: ${events[dateStr]}`;
            eventList.appendChild(li);
        } else {
            const li = document.createElement('li');
            li.textContent = 'No events on this day.';
            eventList.appendChild(li);
            }
    }

    prevBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
        eventList.innerHTML = '';
    });

    nextBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
        eventList.innerHTML = '';
    });

  // Initial render
    renderCalendar(currentDate);
});
