document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.image img');
    const carouselLayer = document.getElementById('carouselLayer');
    const carouselInner = document.querySelector('.carousel-inner');
    const closeBtn = document.querySelector('.close');

    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            openCarousel(image.src);
        });
    });

    closeBtn.addEventListener('click', () => {
        carouselLayer.classList.add('d-none');
    });

    function openCarousel(startSrc) {
          carouselInner.innerHTML = '';
        const totalImages = images.length;

        let startIndex = 0;
        for (let i = 0; i < totalImages; i++) {
            if (images[i].src === startSrc) {
                startIndex = i;
                break;
            }
        }

        for (let i = 0; i < totalImages; i++) {
            const index = (startIndex + i) % totalImages;

            const item = document.createElement('div');
            item.classList.add('carousel-item');
            if (i === 0) {
                item.classList.add('active');
            }
            const img = document.createElement('img');
            img.classList.add('d-block', 'w-100', 'carsouelImg');
            img.src = images[index].src;
            img.className = 'carousalImg';
            item.appendChild(img);
            carouselInner.appendChild(item);
        }
        carouselLayer.classList.remove('d-none');
    }
});
