import './styles.css'
const Contact = () => {

    const content = document.getElementById('content')

    const contactContent = document.createElement('div')
    contactContent.classList.add('contact-content')

    const image = document.createElement('img')
    image.src = '../src/images/phone.png'
    image.classList.add('contact-image')
    
    const h2 = document.createElement('h2')
    h2.textContent = "DON'T CALL US"

    contactContent.append(image, h2)


    content.appendChild(contactContent)
}

export default Contact