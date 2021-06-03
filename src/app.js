const themes = [
    {
        colorBg: "hsl(0, 0%, 100%)",
        colorTopBgPattern: "hsl(225, 100%, 98%)",
        colorCardBg: "hsl(227, 47%, 96%)",
        colorCardBgHover: "hsl(237, 52%, 92%)",
        colorTextPrimary: "hsl(228, 12%, 44%)",
        colorTextSecondary: "hsl(230, 17%, 14%)",
        colorToggle: "hsl(230, 22%, 74%)"
    },
    {
        colorBg: "hsl(230, 17%, 14%)",
        colorTopBgPattern: "hsl(232, 19%, 15%)",
        colorCardBg: "hsl(228, 28%, 20%)",
        colorCardBgHover: "hsl(227, 28%, 25%)",
        colorTextPrimary: "hsl(228, 34%, 66%)",
        colorTextSecondary: "hsl(0, 0%, 100%)",
        colorToggle: "linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))"
    }]

const switchTheme = document.querySelector('.switch');
let root = document.documentElement
const changeTheme = (theme) => {

    for (const [key, value] of Object.entries(theme)) {
        root.style.setProperty(`--${key}`, value);
    }
}

const getTheme = (isChecked) => {
    if (isChecked) return themes[1];
    else return themes[0]
}

switchTheme.addEventListener("change", (e) => {
    changeTheme(getTheme(e.target.checked))
});
