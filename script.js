const themeButton = document.getElementById("themeButton");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeButton.textContent = "Светлая тема";
}

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "Светлая тема";
        localStorage.setItem("theme", "dark");
    } else {
        themeButton.textContent = "Тёмная тема";
        localStorage.setItem("theme", "light");
    }
});