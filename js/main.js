new WOW().init();
var mySwiper = new Swiper('.swiper-container',{
    autoplay: {
        delay: 4000,
    },
    pagination: {
        el: '.p-pagination',
        bulletClass: 'p-bullet',
        bulletActiveClass: 'p-bullet-active',
        clickable: true
    },
});

function sendRequest() {
    alert('Мы рады сотрудничать с вами, ваш запрос будет обработан в скором времени :-)')
}