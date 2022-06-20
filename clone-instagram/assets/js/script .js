const images = document.querySelectorAll('.toggle-image');
let currentImage = 0; 

function toggleImage(image){
    image[currentImage].classList.remove('selected');
    currentImage ++;
    if(currentImage >= images.length) currentImage = 0;
    image[currentImage].classList.add('selected');
}

function start(){
    setInterval(()=>{   
        toggleImage(images);
    }, 3000);
}

window.addEventListener('load', start());