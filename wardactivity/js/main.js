//main.js
import { loadLinks, initDropdownMenu, initHamburgerMenu } from './navigation.js';
import { initCalendar } from './calendar.js';
import { initAlbumSlider } from './photomoviealbum.js';
import { initThemeSwitch } from './lightanddark.js';
import { initCountdown } from './countdown.js';

document.addEventListener("DOMContentLoaded", () => {
    loadLinks();
    initDropdownMenu();
    initHamburgerMenu();
    initCountdown("August 29, 2025 13:00:00");
    initThemeSwitch();
    initCalendar();
    initAlbumSlider();
});

