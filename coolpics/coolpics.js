//hiding the menu button
const menuButton = document.querySelector(".menuButton");
const gallery = document.querySelector(".gallery");
const modal = document.querySelector(".viewer");
const modalImg = modal.querySelector("img");
const closeButton = modal.querySelector(".closeViewer");

//close modal by clicking outside the image
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

function toggleMenu() {
    const menu =  document.querySelector(".menuNav")
    menu.classList.toggle("show");
}
menuButton.addEventListener("click", toggleMenu);

//handling the user's menu screen
function handleResize() {
    const menu = document.querySelector(".menuNav")
    if (window.innerWidth > 1000) {
        menu.classList.remove("show");
    } else {
        menu.classList.add("show");
    }
}
window.addEventListener("resize", handleResize);
handleResize();//callign the function to set the initial state

//opens modal
gallery.addEventListener("click", (event) => {
    const clickedImg = event.target.closest("img");
    if (!clickedImg) return;

    const src = clickedImg.getAttribute("src");
    const alt = clickedImg.getAttribute("alt");
    const fullscreen = src.replace("-sm", "-full");;//the other way wasnt working.

    modalImg.src = fullscreen;
    modalImg.alt = alt;
    modal.showModal();
});

//close modal by clicking the close button
closeButton.addEventListener("click", () => {
    modal.close();
});

//dialog photo function
function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="closeViewer">X</button>
        <img src="${pic}" alt="${alt}">
        </div>`;
}
