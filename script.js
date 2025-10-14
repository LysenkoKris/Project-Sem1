document.addEventListener('DOMContentLoaded', function() {
    
    // Слайдер отзывов
    const track = document.querySelector('.slider-track');
    if (track) {
        const slides = Array.from(track.children);
        const nextButton = document.querySelector('.slider-btn.next');
        const prevButton = document.querySelector('.slider-btn.prev');
        
        let currentIndex = 0;
        
        // Функция для перемещения слайдов
        const moveToSlide = (targetIndex) => {
            const amountToMove = slides[targetIndex].offsetLeft - slides[0].offsetLeft;
            track.style.transform = 'translateX(-' + amountToMove + 'px)';
            currentIndex = targetIndex;
        }

        // Клик на правую кнопку
        nextButton.addEventListener('click', () => {
            let nextIndex = currentIndex + 1;
            if (nextIndex >= slides.length - 2 && window.innerWidth > 992) { // Показываем по 3
                 nextIndex = 0;
            } else if (nextIndex >= slides.length) {
                 nextIndex = 0;
            }
            moveToSlide(nextIndex);
        });

        // Клик на левую кнопку
        prevButton.addEventListener('click', () => {
            let prevIndex = currentIndex - 1;
            if (prevIndex < 0) {
                 prevIndex = slides.length - 1;
                 if(window.innerWidth > 992) prevIndex = slides.length - 3;
            }
            moveToSlide(prevIndex);
        });
    }

    // Мобильное меню (простая реализация)
    const burger = document.getElementById('burger-menu');
    const nav = document.querySelector('.nav-menu');
    // Логику для мобильного меню можно добавить здесь, если потребуется
});

