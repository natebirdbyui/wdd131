let participantCount = 2;

document.addEventListener("DOMContentLoaded", () => {
    const addButton = document.getElementById("add");
    const form = document.querySelector("form");
    const summarySection = document.getElementById("summary");

    //Add participant
    addButton.addEventListener("click", () => {
        participantCount++;
        const participantHTML = participantTemplate(participantCount);
        addButton.insertAdjacentHTML("beforebegin", participantHTML);
    });

    //Submit Form
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const total = totalFees();
        const name = document.getElementById("adult_name").value;
        const message = successTemplate({
            name: name,
            count: participantCount,
            total: total
        });

        form.style.display = "none";
        summarySection.innerHTML = message;
        summarySection.style.display = "block";
    });
});

// New participant template
function participantTemplate(count) {
    //copy and paste section class participant-HTML
    return `
    <section class="participant${count}">
        <p>Participant ${count}</p>
        <div class="item">
            <label for="fname"> First Name<span>*</span></label>
            <input id="fname" type="text" name="fname" value="" required />
        </div>
        <div class="item activities">
            <label for="activity">Activity #<span>*</span></label>
            <input id="activity" type="text" name="activity" />
        </div>
        <div class="item">
            <label for="fee">Fee ($)<span>*</span></label>
            <input id="fee" type="number" name="fee" />
        </div>
        <div class="item">
            <label for="date">Desired Date <span>*</span></label>
            <input id="date" type="date" name="date" />
        </div>
        <div class="item">
            <p>Grade</p>
            <select>
                <option selected value="" disabled selected></option>
                <option value="1">1st</option>
                <option value="2">2nd</option>
                <option value="3">3rd</option>
                <option value="4">4th</option>
                <option value="5">5th</option>
                <option value="6">6th</option>
                <option value="7">7th</option>
                <option value="8">8th</option>
                <option value="9">9th</option>
                <option value="10">10th</option>
                <option value="11">11th</option>
                <option value="12">12th</option>
            </select>
        </div>
    </section>`;
}

//Calculate total fees
function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");//^= means starts with (fee)
    console.log(feeElements);

    feeElements = [...feeElements];

    console.log(feeElements);

    const total = feeElements.reduce((sum, feeElement) => {
        const fee = parseFloat(feeElement.value);
        return sum + (isNaN(fee) ? 0 : fee);
    }, 0);

    return total;
}

function successTemplate({ name, count, total }) {
    return `
    <h2>Registration Successful!</h2>
    <p>Thank you, ${name}, for registering ${count} participants.</p>
    <p>Total Fees: $${total.toFixed(2)}</p>
    <p>We will contact you shortly with further details.</p>`;
}

