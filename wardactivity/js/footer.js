// footer.js
console.log("footer.js loaded");
export function initFooter() {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    footer.innerHTML = `
        <p>
            C5 Ward Activities &copy; ${new Date().getFullYear()}<br>
            Nathan Bird
        </p>

        <div class="footersitemap">
            <ul>Sitemap</ul>
            <li id="footerlinks"></li>
        </div>

        <div class="footersiteplan">
            <p><a href="site-plan.html">Site-plan</a></p>
        </div>

        <div class="footerwebclicks">
            <a id="lds" href="https://churchofjesuschrist.org/?lang=eng" target="_blank">
                <img src="images/rsz_1200x675church_logo.jpg" alt="LDS Icon">
            </a>
        </div>
    `;
    
}