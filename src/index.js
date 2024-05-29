import './styles.css'
import Menu from "./Menu";
import Location from "./Location";
import Contact from "./Contact";

Menu()


const menuBtn = document.querySelector('.menu-btn')
const locationBtn = document.querySelector('.location-btn')
const contactBtn = document.querySelector('.contact-btn')

menuBtn.addEventListener('click', () => {
    content.textContent = ''
    Menu()
})

locationBtn.addEventListener('click', () => {
    content.textContent = ''
    Location()
})

contactBtn.addEventListener('click', () => {
    content.textContent = ''
    Contact()
})


