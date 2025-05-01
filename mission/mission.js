'use strict';

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
        logo.src = 'images/byui-logo_white.png';
        logo.alt = 'BYUI Logo White';
    }
    else
    {        
        body.classList.remove('dark');
        logo.src = 'images/byui-logo_blue.webp';
        logo.alt = 'BYUI Logo Blue';
    }
}