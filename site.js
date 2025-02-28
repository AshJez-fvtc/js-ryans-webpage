//Creating link to sheet and calling id
const link = document.querySelector('#fork')
//underline text in fork id
link.style.textDecoration = "underline"

const urls = [
    'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/933964/pexels-photo-933964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1251861/pexels-photo-1251861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
].map(url => { (new Image()).src = url; return url })

const images = document.querySelectorAll('#carousel img')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')

let currentImage = 0
const showImages = () => {
    const offset = currentImage % urls.length
    images.forEach((image, index) => {
        const imageIndex = (index + offset + urls.length) % urls.length
        image.src = urls[imageIndex]
    })
}

prevBtn.addEventListener('click', () => {
    currentImage = (currentImage - 1 + urls.length) % urls.length
    showImages()
})

nextBtn.addEventListener('click', () => {
    currentImage = (currentImage + 1) % urls.length
    showImages()
})

setInterval(() => {
    currentImage = (currentImage + 1) % urls.length
    showImages()
}, 5000)

showImages()

