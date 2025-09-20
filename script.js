document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.content-slide');
    const totalSlides = slides.length;
    const startSlide = document.getElementById('start-slide');
    const startBtn = document.getElementById('startBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const backgroundMusic = document.getElementById('background-music');

    function startShow() {
        startSlide.classList.remove('active');
        // Show the first content slide
        showSlide(0);
        // Show navigation buttons
        prevBtn.classList.remove('hidden');
        nextBtn.classList.remove('hidden');

        // Play the background music
        backgroundMusic.play();
    }

    function showSlide(n) {
        // Hide all content slides first
        slides.forEach(slide => slide.classList.remove('active'));
        // Then show the target slide
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === n);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    startBtn.addEventListener('click', startShow);
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Initial display
    // The start slide is active by default via HTML class
});