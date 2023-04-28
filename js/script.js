const button = document.querySelector(".nav-menu-button")
const menu = document.querySelector(".navbar-bottom .container")

let sayac = 0

button.addEventListener("click", () => {
    if(sayac == 0){
        menu.style.display = "block"
        sayac = sayac + 1
    } else {
        menu.style.display = "none"
        sayac = 0
    }
})