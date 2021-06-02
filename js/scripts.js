$(document).ready(function() {
  
  	//Закрытие модального окна
  	$('.modal-bg').on('click', function() {
    	$('.modal-for-form').removeClass('open');
    });
  
    //Печатающий текст
    var typed = new Typed('.js-text', {
        strings: ["Дорогие", "Имиджевые", "Яркие", "Ах#енные", "Заветные", "Необычные", "Сочные", "Милые", "Свежие", "Классные"],
        typeSpeed: 40,
        loop: true,
        backDelay: 2500,
        loopCount: Infinity
    });

    //Phone mask
    $(".phone-mask").mask("+7 (999) 999-99-99");

    var windowWidth = $(window).width();
    if (windowWidth > 992) {
        //Image parallax
        var rect = $('#container')[0].getBoundingClientRect();
        var mouse = { x: 0, y: 0, moved: false };
        $("#container").mousemove(function(e) {
            mouse.moved = true;
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        });
        TweenLite.ticker.addEventListener('tick', function() {
            if (mouse.moved) {
                parallaxIt(".slide", -50);
            }
            mouse.moved = false;
        });

        function parallaxIt(target, movement) {
            TweenMax.to(target, 0.3, {
                x: (mouse.x - rect.width / 2) / rect.width * movement,
                y: (mouse.y - rect.height / 2) / rect.height * movement
            });
        }
        $(window).on('resize scroll', function() {
            rect = $('#container')[0].getBoundingClientRect();
        });
    }

    new WOW({mobile: false}).init();
    //Отправка на почту писем
    $('#feedback').submit(function() {
        var form = this;
        var name = $(form).find('[name=name]');
        var phone = $(form).find('[name=phone]');
        if (name.val().length < 2) { name.css('border', '2px solid #F44336'); }
        if (phone.val().length < 4) { phone.css('border', '2px solid #F44336'); }
        if (phone.val().length >= 4 && name.val().length >= 2) {
            var data = $(this).serialize();
            console.log(data);
        }
        return false;
    });

});