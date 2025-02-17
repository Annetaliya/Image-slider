const next = document.querySelector('#btn1');
const previous = document.querySelector('#btn2')
const images = document.querySelectorAll('img');
let currentIndex = 0;


images.forEach((image, index) => {
    if (index !== currentIndex) {
        image.style.display ='none'
    }
})
next.addEventListener('click', () => {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length
    images[currentIndex].style.display = 'block'
    
   console.log(image)

})
