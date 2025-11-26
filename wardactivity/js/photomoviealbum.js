// photomoviealbum.js

export function initAlbumSlider() {

    const albumItems = document.querySelectorAll(".album-item");
    const leftBtn = document.querySelector(".scroll-btn.left");
    const rightBtn = document.querySelector(".scroll-btn.right");
    const reel = document.getElementById("album-reel");

    // Safety check
    if (!albumItems.length || !leftBtn || !rightBtn || !reel) return;

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


    // Buttons
    rightBtn.addEventListener("click", () => {
        nextSlide();
        resetAutoplay();
    });

    leftBtn.addEventListener("click", () => {
        prevSlide();
        resetAutoplay();
    });


    // Touch / Swipe
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


    // Video logic
    albumItems.forEach((item) => {
        const video = item.querySelector("video");
        if (video) {
            video.addEventListener("play", stopAutoplay);
            video.addEventListener("ended", startAutoplay);
            video.addEventListener("pause", startAutoplay);
        }
    });


    // Init
    showSlide(currentIndex);
    startAutoplay();
}
