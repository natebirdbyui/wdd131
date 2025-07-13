//count down timer
function countDownTimer() {
    var countDownDate = new Date("August 29, 2025 13:00:00").getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);
}
countDownTimer();

//light and dark mode
const themeView = document.getElementById('themeView'); // Get the select element by its ID
const body = document.body;
const logo = document.getElementById('logo');

themeView.addEventListener('change', changeTheme); // Add an event listener to the select element
// When the selected option changes, the changeTheme function will be called

function changeTheme() {
    const selectedTheme = themeView.value;

    if(selectedTheme === 'dark')
    {        
        body.classList.add('dark');
        body.classList.remove('light');
    }
    else
    {        
        body.classList.add('light');
        body.classList.remove('dark');        
    }
}

//photo/movie album
document.addEventListener("DOMContentLoaded", () => {
    const albumItems = document.querySelectorAll(".album-item");
    const leftBtn = document.querySelector(".scroll-btn.left");
    const rightBtn = document.querySelector(".scroll-btn.right");
    const reel = document.getElementById("album-reel"); 
    let currentIndex = 0;
    let autoplayInterval;

function showSlide(index) {
    albumItems.forEach((item, i) => {
    item.classList.toggle("active", i === index);
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % albumItems.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + albumItems.length) % albumItems.length;
    showSlide(currentIndex);
}

function startAutoplay() {
    autoplayInterval = setInterval(() => {
    // Skip autoplay if a video is playing
    const activeVideo = albumItems[currentIndex].querySelector("video");
    if (activeVideo && !activeVideo.paused && !activeVideo.ended) return;
    nextSlide();
    }, 5000);
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

function resetAutoplay() {
    stopAutoplay();
    startAutoplay();
}

  // Event listeners for nav buttons
rightBtn.addEventListener("click", () => {
    nextSlide();
    resetAutoplay();
});

leftBtn.addEventListener("click", () => {
    prevSlide();
    resetAutoplay();
});

// Touch/swipe support
let touchStartX = 0;
reel.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
});
reel.addEventListener("touchend", (e) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX;
    if (deltaX > 50) {
        prevSlide();
        resetAutoplay();
    } else if (deltaX < -50) {
        nextSlide();
        resetAutoplay();
    }
});

// Pause autoplay when video plays, resume after video ends
albumItems.forEach((item) => {
    const video = item.querySelector("video");
    if (video) {
        video.addEventListener("play", stopAutoplay);
        video.addEventListener("ended", startAutoplay);
        video.addEventListener("pause", () => {
        // Optional: restart autoplay after user pauses it
        startAutoplay();
    });
    }
});

// Init
showSlide(currentIndex);
startAutoplay();
});

//Dropdown menu for activities
document.addEventListener("DOMContentLoaded", () => {
    const activitiesToggle = document.getElementById("activitiesToggle");
    const activitiesMenu = document.getElementById("activitiesMenu");

    activitiesToggle.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevents the click from bubbling up
        activitiesMenu.classList.toggle("show");
    });

    // Auto-close when clicking outside
    document.addEventListener("click", (e) => {
        if (!activitiesMenu.contains(e.target) && !activitiesToggle.contains(e.target)) {
            activitiesMenu.classList.remove("show");
        }
    });

  // Optional: Auto-close when clicking a link
    activitiesMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            activitiesMenu.classList.remove("show");
        });
    });
});

// Hamburger menu for mobile view
document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const sidebar = document.querySelector(".sidebar-nav");

    // Toggle sidebar when hamburger is clicked
    hamburgerBtn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        document.body.style.overflow = sidebar.classList.contains("open") ? "hidden" : "";
    });

    // Close sidebar when a nav link is clicked
    sidebar.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            sidebar.classList.remove("open");
            document.body.style.overflow = "";
        });
    });

    // Close sidebar when clicking outside of it
    document.addEventListener("click", (e) => {
        const clickedInsideMenu = sidebar.contains(e.target);
        const clickedHamburger = hamburgerBtn.contains(e.target);

        if (!clickedInsideMenu && !clickedHamburger && sidebar.classList.contains("open")) {
            sidebar.classList.remove("open");
            document.body.style.overflow = "";
        }
    });
});

