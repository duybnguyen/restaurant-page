import './styles.css'
const Menu = () => {

    const content = document.getElementById('content')

    const menuContent = document.createElement('div')
    menuContent.classList.add('menu-content')

    const h2 = document.createElement('h2')
    h2.textContent = 'FRESHLY KILLED TO ORDER'
    const image = document.createElement('img')
    image.classList.add('menuImage')
    image.src = '../src/images/food.jpeg'

    menuContent.append(image, h2)

    content.appendChild(menuContent)

    
}

export default Menu