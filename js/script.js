document.addEventListener('DOMContentLoaded', function() {
    let elms = document.querySelectorAll('.slider');
    for (let i = 0, len = elms.length; i < len; i++) {
        // инициализация elms[i] в качестве слайдера
        new ChiefSlider(elms[i]);

    }
});

