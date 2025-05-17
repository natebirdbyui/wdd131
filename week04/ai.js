let button = document.getElementById("button");
let message = document.getElementById("message");
let colors = ["red", "green", "blue", "yellow", "purple", "orange"];
let colorButton = document.getElementById("colorButton");
let resetButton = document.getElementById("resetButton");
colorButton.disabled = true; // disables the button



let currentColorIndex = 0;  // tracks which color is next

button.addEventListener("click", function () {
    let age = parseInt(document.getElementById("ageInput").value);
    if (isNaN(age)) {
        message.textContent = "Please enter a valid number.";
        message.style.color = "orange";
    } else if (age >= 18) {
        message.textContent = "You are allowed to view.";
        message.style.color = "green";
        message.style.fontWeight = "bold";
        colorButton.disabled = false;
    } else if (age >= 13 && age <= 17) {
        message.textContent = "You are allowed to view, however not allowed to view mature content.";
        message.style.color = "yellow";
        message.style.fontWeight = "bold";
    } else if (age >= 5 && age <= 12) {
        message.textContent = "You are allowed to view, however not allowed to view mature content and adult content.";
        message.style.color = "blue";
        message.style.fontWeight = "bold";
    } else {
        message.textContent = "You are not allowed to view.";
        message.style.color = "red";
        message.style.fontWeight = "bold";
    }
});

colorButton.addEventListener("click", function () {
    let age = parseInt(document.getElementById("ageInput").value);

    if (!isNaN(age) && age >= 18) {
        // cycle through colors
        document.body.style.backgroundColor = colors[currentColorIndex];
        currentColorIndex++;
        if (currentColorIndex >= colors.length) {
            currentColorIndex = 0; // reset to start
            
        }
        message.style.color = colors[currentColorIndex];
    } else {
        // no color change if under 18 or invalid age
        message.textContent = "You must be 18 or older to change background color.";
        message.style.color = "red";        
    }
});

resetButton.addEventListener("click", function () {
    document.getElementById("ageInput").value = "";
    message.textContent = "";
    document.body.style.backgroundColor = "white"; // reset background color
    currentColorIndex = 0; // reset color index
    colorButton.disabled = true; // disable color button again
});
