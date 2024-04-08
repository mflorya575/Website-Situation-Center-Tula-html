/* Код скролла карточек в 3 секции в index.html */
document.addEventListener("DOMContentLoaded", function() {
    const wrapper = document.querySelector(".third-section__wrapper");
    let isDown = false;
    let startX;
    let scrollLeft;

    wrapper.addEventListener("mousedown", function(event) {
        isDown = true;
        startX = event.pageX - wrapper.offsetLeft;
        scrollLeft = wrapper.scrollLeft;
    });

    wrapper.addEventListener("mouseleave", function() {
        isDown = false;
    });

    wrapper.addEventListener("mouseup", function() {
        isDown = false;
    });

    wrapper.addEventListener("mousemove", function(event) {
        if (!isDown) return;
        event.preventDefault();
        const x = event.pageX - wrapper.offsetLeft;
        const walk = (x - startX) * 2; // Умножаем на 2 для более быстрой прокрутки
        wrapper.scrollLeft = scrollLeft - walk;
    });
});


/* Код скролла вверх при нажатии на кнопку в футере */
$(document).ready(function(){
    $('#button').click(function(){
        $(window).scrollTop(0);
    });

    $(document).scroll(function(){
        var scroll_pos = $(window).scrollTop();
        if(scroll_pos > 10){
            $('#button').fadeIn();
        } else {
            $('#button').fadeOut();
        }
    });
});
