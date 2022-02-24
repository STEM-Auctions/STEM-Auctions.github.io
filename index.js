function toggleDarkMode() {
    if(document.classList.contains("dark")) {
        document.classList.replace("dark", "light")
    } else {
        document.classList.replace("light", "dark")
    }
}