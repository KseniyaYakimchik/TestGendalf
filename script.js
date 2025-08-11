document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.news-container');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const cardWidth = document.querySelector('.news-card').offsetWidth + 20; // + gap
    
    nextBtn.addEventListener('click', function() {
        container.scrollBy({
            left: cardWidth,
            behavior: 'smooth'
        });
    });
    
    prevBtn.addEventListener('click', function() {
        container.scrollBy({
            left: -cardWidth,
            behavior: 'smooth'
        });
    });
});