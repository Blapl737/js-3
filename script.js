const slider = document.getElementById('slider');
const thumb = document.getElementById('thumb');
const valueDisplay = document.getElementById('value');
let isDragging = false;
thumb.addEventListener('mousedown', (e) => {
    isDragging = true;
});
document.addEventListener('mouseup', () => {
    isDragging = false;
});
document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const sliderRect = slider.getBoundingClientRect();
        let newLeft = e.clientX - sliderRect.left - (thumb.offsetWidth / 2);
        if (newLeft < 0) {
            newLeft = 0;
        } else if (newLeft > sliderRect.width - thumb.offsetWidth) {
            newLeft = sliderRect.width - thumb.offsetWidth;
        }
        thumb.style.left = newLeft + 'px';
        
        const value = Math.round((newLeft / (sliderRect.width - thumb.offsetWidth)) * 100);
        valueDisplay.textContent = value;
    }
});
