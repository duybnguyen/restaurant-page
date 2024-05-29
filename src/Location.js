const Location = () => {
    const content = document.getElementById('content')

    const locationContent = document.createElement('div')
    locationContent.classList.add('location-content')

    const image = document.createElement('img')
    image.src = '../src/images/location.png'
    image.classList.add('location-image')
    
    const h2 = document.createElement('h2')
    h2.textContent = 'WE HAVE GHOST KITCHENS GLOBALLY'

    locationContent.append(image, h2)


    content.appendChild(locationContent)

}

export default Location