// lightanddark.js

export function initThemeSwitch() {

    const themeView = document.getElementById("themeView");
    const body = document.body;

    // Exit if not on a page with theme selector
    if (!themeView) return;

    function changeTheme() {
        const selectedTheme = themeView.value;

        if (selectedTheme === "dark") {
            body.classList.add("dark");
            body.classList.remove("light");
        } else {
            body.classList.add("light");
            body.classList.remove("dark");
        }
    }

    // Initial load
    changeTheme();

    // Event listener
    themeView.addEventListener("change", changeTheme);
}
