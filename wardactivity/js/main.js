//main.js
console.log("main.js loaded");

import { loadLinks, initDropdownMenu, initHamburgerMenu, initNav } from './navigation.js';
import { initCalendar } from './calendar.js';
import { initAlbumSlider } from './photomoviealbum.js';
import { initThemeSwitch } from './lightanddark.js';
import { initCountdown } from './countdown.js';
import { initFooter } from './footer.js';

document.addEventListener("DOMContentLoaded", () => {

    // 1. BUILD STRUCTURE
    initNav();
    initFooter();

    // 2. LOAD DATA INTO STRUCTURE
    loadLinks();

    // 3. ATTACH EVENTS
    initDropdownMenu();
    initHamburgerMenu();
    initThemeSwitch();

    // 4. PAGE FEATURES
    initCountdown("August 29, 2025 13:00:00");
    initCalendar();
    initAlbumSlider();
});

