// calendar.js

export function initCalendar() {

    const calendarBody = document.getElementById('calendar-body');
    const monthYear = document.getElementById('month-year');
    const prevBtn = document.getElementById('prev-month');
    const nextBtn = document.getElementById('next-month');
    const eventList = document.getElementById('event-list');

    // If page doesn't contain calendar, STOP
    if (!calendarBody || !monthYear || !prevBtn || !nextBtn || !eventList) return;

    let currentDate = new Date();

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
        "2025-12-25": "Christmas Day"
    };

    function renderCalendar(date) {

        calendarBody.innerHTML = "";
        const year = date.getFullYear();
        const month = date.getMonth();

        const today = new Date();
        const todayStr = today.toISOString().split("T")[0];

        monthYear.textContent = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long"
        });

        const firstDay = new Date(year, month, 1).getDay();
        const totalDays = new Date(year, month + 1, 0).getDate();

        let day = 1;

        for (let i = 0; i < 6; i++) {

            const row = document.createElement("tr");

            for (let j = 0; j < 7; j++) {

                const cell = document.createElement("td");

                if (i === 0 && j < firstDay || day > totalDays) {
                    cell.textContent = "";
                } else {

                    const dateStr =
                        `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

                    cell.textContent = day;

                    if (events[dateStr]) {
                        cell.classList.add("event-day");
                        cell.title = events[dateStr];
                    }

                    if (dateStr === todayStr) {
                        cell.classList.add("today");
                    }

                    cell.addEventListener("click", () => showEventDetails(dateStr));
                    day++;
                }

                row.appendChild(cell);
            }

            calendarBody.appendChild(row);
        }
    }

    function showEventDetails(dateStr) {
        eventList.innerHTML = "";
        const li = document.createElement("li");
        li.textContent = events[dateStr] ? `${dateStr}: ${events[dateStr]}` : "No events on this day.";
        eventList.appendChild(li);
    }

    prevBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
        eventList.innerHTML = "";
    });

    nextBtn.addEventListener("click", () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
        eventList.innerHTML = "";
    });

    renderCalendar(currentDate);
}
