const images = [
    {
        src: '/assets/img/gallery/01.jpg',
        alt: 'Blender image 01'
    },
    {
        src: '/assets/img/gallery/02.jpg',
        alt: 'Blender image 02'
    },
    {
        src: '/assets/img/gallery/03.jpg',
        alt: 'Blender image 03'
    },
    {
        src: '/assets/img/gallery/04.jpg',
        alt: 'Blender image 04'
    },
    {
        src: '/assets/img/gallery/05.jpg',
        alt: 'Blender image 05'
    }
];

var counter = 0;




function slideImage(par) {
    if (par === 'prev') {
        if (counter === 0) {
            counter = images.length - 1;
        }
        else {
            counter--;
        }
    }
    else if (par === 'next') {
        if (counter === images.length - 1) {
            counter = 0
        }
        else {
            counter++;
        }
    }
    const gallery = document.getElementById('images-wrapper');
    let image = document.createElement('img');
    console.log(gallery.childNodes)

    image.src = images[counter].src;
    image.alt = images[counter].alt;
    image.classList.add('main-image')
    gallery.appendChild(image);
    function remove() {
        setTimeout(() => {
            gallery.removeChild(gallery.childNodes[1])
        }, 400)
    }
    remove();

};

function detailsSelection(nr) {
    const elements = document.getElementById("details-nav").querySelectorAll('li');
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove('active');
    }
    event.target.classList.add('active');
    const wrapper = document.getElementById('items-wrapper');
    const itemWidth = document.getElementById('detail-item').offsetWidth;
    console.log(itemWidth)
    wrapper.style = `transform: translateX(${-1 * nr * itemWidth}px)`
}