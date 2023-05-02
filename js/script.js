const button = document.querySelector(".nav-menu-button")
const menu = document.querySelector(".navbar-bottom .container")

const sections = document.querySelectorAll('section')

var observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        entry.target.classList.toggle("slipping", entry.isIntersecting)
    })
}) 

sections.forEach(section => {
    observer.observe(section)
})

// let serviceHeight = service.getBoundingClientRect().height

// window.addEventListener("scroll", () => {
//     console.log(serviceHeight)
//     console.log(window.scrollY)
//     if(Math.ceil(serviceHeight) == window.scrollY - 50){
//         service.classList.add("slipping")
//     }
// })

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