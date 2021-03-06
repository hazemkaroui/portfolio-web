const button = document.getElementById("dark-mode-button");
const root = document.querySelector(':root');
const stylesheet = document.styleSheets[0];

//On first visit
if (!localStorage.getItem('theme'))
    localStorage.setItem('theme', 'light');
setTheme();

//On click toggle the variable
button.addEventListener("click", function () {
    if (localStorage.getItem('theme') == 'light')
        localStorage.setItem('theme', 'dark');
    else
        localStorage.setItem('theme', 'light');
    setTheme();
});

//Apply changes to the stylesheet
function setTheme() {
    if (localStorage.getItem('theme') == 'dark') {
        root.style.setProperty('--text-color', 'rgb(255, 255, 255)');
        root.style.setProperty('--accent-color', 'rgb(251, 160, 17)');
        root.style.setProperty('--background-color', 'rgb(20, 33, 61)');
        root.style.setProperty('--menu-color', 'rgb(28, 47, 87)');
        stylesheet.cssRules[stylesheet.cssRules.length-1].style.listStyle = 'url(images/check-square-dark.svg';
    }

    else {
        root.style.setProperty('--text-color', 'rgb(14, 21, 21)');
        root.style.setProperty('--accent-color', 'rgb(124, 124, 125)');
        root.style.setProperty('--background-color', 'rgb(236, 238, 240)');
        root.style.setProperty('--menu-color', 'rgb(245, 245, 245)');
        stylesheet.cssRules[stylesheet.cssRules.length-1].style.listStyle = 'url(images/check-square.svg)';
    }
}