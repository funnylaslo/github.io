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
    if (document.form[name]) {
        
    }
    alert('Мы рады сотрудничать с вами, ваш запрос будет обработан в скором времени :-)')
};

$(function(){
    $("#phone").mask("+375(99)99-99-999");

    $("#email").inputmask("email");
    
  });
  
  window.onbeforeunload = function clear_() {
    document.getElementById('name').value='';
    document.getElementById('phone').value='';
    document.getElementById('email').value='';
    }


//$(function(){    
//    
//  });
//email mask
