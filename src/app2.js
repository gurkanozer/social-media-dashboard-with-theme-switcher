
const switchTheme = document.querySelector('.switch');
const body = document.querySelector('body');
const themes = ['light-theme', 'dark-theme'];

switchTheme.addEventListener("change", () => {
    let activeTheme = body.className;
    if (activeTheme === null) activeTheme = themes[0];
    let index = themes.findIndex(theme => theme === activeTheme);
    if (index === themes.length - 1) index = -1;
    body.classList.remove(activeTheme);
    body.classList.add(themes[index + 1]);
});