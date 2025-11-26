// navigation.js

export async function loadLinks() {
    try {
        const response = await fetch("./js/links.json");
        const links = await response.json();

        // Sidebar nav
        const navContainer = document.getElementById("activitiesMenu");
        if (navContainer) {
            navContainer.innerHTML = Object.entries(links)
                .map(([key, url]) => `<li><a href="${url}">${formatKey(key)}</a></li>`)
                .join('');
        }

        // Footer
        const footerContainer = document.getElementById("footerlinks");
        if (footerContainer) {
            footerContainer.innerHTML = Object.entries(links)
                .map(([key, url]) => `<li><a href="${url}">${formatKey(key)}</a></li>`)
                .join('');

        }

    } catch (err) {
        console.error("Failed to load links.json:", err);
    }
}


// ✅ Convert snake_case to Title Case
export function formatKey(key) {
    return key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}


// ✅ Dropdown menu initializer
export function initDropdownMenu() {
    const activitiesToggle = document.getElementById("activitiesToggle");
    const activitiesMenu = document.getElementById("activitiesMenu");

    if (!activitiesToggle || !activitiesMenu) return;

    activitiesToggle.addEventListener("click", (e) => {
        e.stopPropagation();
        activitiesMenu.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
        if (!activitiesMenu.contains(e.target) && !activitiesToggle.contains(e.target)) {
            activitiesMenu.classList.remove("show");
        }
    });

    activitiesMenu.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            activitiesMenu.classList.remove("show");
        }
    });
}


// ✅ Hamburger menu initializer
export function initHamburgerMenu() {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const sidebar = document.querySelector(".sidebar-nav");

    if (!hamburgerBtn || !sidebar) return;

    hamburgerBtn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        document.body.style.overflow =
            sidebar.classList.contains("open") ? "hidden" : "";
    });

    sidebar.addEventListener("click", (e) => {
        if (e.target.tagName === "A") {
            sidebar.classList.remove("open");
            document.body.style.overflow = "";
        }
    });

    document.addEventListener("click", (e) => {
        const clickedInsideMenu = sidebar.contains(e.target);
        const clickedHamburger = hamburgerBtn.contains(e.target);

        if (!clickedInsideMenu && !clickedHamburger && sidebar.classList.contains("open")) {
            sidebar.classList.remove("open");
            document.body.style.overflow = "";
        }
    });
}
