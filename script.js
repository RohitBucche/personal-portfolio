let currentIndex = 0;

function slide(direction) {
    const sliderContainer = document.querySelector('.slider-container');
    const cards = document.querySelectorAll('.card');
    const cardWidth = cards[0].offsetWidth + 20; // 20px for margin
    const visibleCards = Math.floor(sliderContainer.offsetWidth / cardWidth);
    const maxIndex = cards.length - visibleCards;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = maxIndex;
    } else if (currentIndex > maxIndex) {
        currentIndex = 0;
    }

    sliderContainer.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

