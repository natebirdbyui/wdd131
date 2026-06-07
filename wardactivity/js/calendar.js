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
        "2026-06-07": "Linger Longer after second hour",
        "2026-07-04": "Independence Day",
        "2026-07-05": "Linger Longer after second hour",
        "2026-08-15": "Ward BBQ @ Stake Center 6pm",
        "2026-09-06": "Linger Longer after second hour",
        "2026-09-07": "Labor Day",
        "2026-09-22": "Fall Equinox",
        "2026-10-03": "General Conference 10am-12pm & 2pm-4pm",
        "2026-10-04": "General Conference 10am-12pm & 2pm-4pm",
        "2026-10-11": "(Final) Linger Longer after second hour",
        "2026-10-29": "Ward Trunk or Treat & Chili Cook-off @ Middleton Building 6pm",
        "2026-10-31": "Halloween",
        "2026-11-26": "Thanksgiving",
        "2026-12-05": "Ward Christmas Party @ Middleton Building 6pm",
        "2026-12-21": "Winter Solstice",
        "2026-12-24": "Christmas Eve",
        "2026-12-25": "Christmas"
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
