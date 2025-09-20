document.addEventListener('DOMContentLoaded', () => {
    const ransomElements = document.querySelectorAll('.slide-content li');

    ransomElements.forEach(el => {
        const text = el.textContent;
        el.innerHTML = ''; // Clear original text

        text.split('').forEach(char => {
            const span = document.createElement('span');
            span.textContent = char;

            // Add a class for styling and a random class for variety
            span.classList.add('ransom-letter');
            const randomStyle = Math.floor(Math.random() * 5) + 1; // 5 different styles
            span.classList.add(`style-${randomStyle}`);

            el.appendChild(span);
        });
    });
});