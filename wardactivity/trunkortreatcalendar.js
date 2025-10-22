document.addEventListener("DOMContentLoaded", () => {
    const calendarEl = document.getElementById("trunkortreat-calendar");
    if (!calendarEl) return;

    const year = 2025;
    const month = 9; // October (0-based)
    const highlightDays = [25];

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let html = `<div class="calendar-title"><h3>October 2025</h3></div>`;
    html += `<div class="calendar-grid">`;

    weekdays.forEach(day => {
        html += `<div class="calendar-cell calendar-header">${day}</div>`;
    });

    for (let i = 0; i < firstDay; i++) {
        html += `<div class="calendar-cell empty"></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const isEventDay = highlightDays.includes(day);
        html += `<div class="calendar-cell${isEventDay ? " event-day" : ""}">${day}</div>`;
    }

    html += `</div>`;

    calendarEl.innerHTML = html;
});

function countDownTimerTot() {
    const countdownEl = document.getElementById("tot-countdown");
    if (!countdownEl) return;

    const countDownDate = new Date("October 25, 2025 17:00:00").getTime();
    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        if (distance < 0) {
            clearInterval(x);
            countdownEl.innerHTML = "EXPIRED";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}
countDownTimerTot();