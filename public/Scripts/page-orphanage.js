// Zoom Settings
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    ZoomControl:false
}

// create map
const map = L.map('mapid', options).setView([-25.907083,32.5996303],14)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map)

// create icon

const icon = L.icon ({
    iconUrl: './public/images/map-marker.svg',
    iconSize: [58,68],
    iconAnchor: [29, 68] ,
    popupAnchor: [170, 2]
})



// create and add marker
L.marker([-25.9072319,32.6016803], {icon})
    .addTo(map)

// image gallery 

function selectImage(event) {
   const button = event.currentTarget


    // remover as classes .active
    const buttons = document.querySelectorAll(".images button")

    buttons.forEach(removeActiveClass)

    function removeActiveClass (button) {
        button.classList.remove("active");
    }

    // selecionar a imagem clicada
    const image = button.children[0]
    // actualizar o container de imagem
    const imageContainer = document.querySelector(".orphanage-details > img")
    imageContainer.src = image.src

    // adicionar a classe .active para o button clicado
    button.classList.add("active")

}