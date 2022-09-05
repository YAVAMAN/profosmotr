// Menu
$('.header__burger').click(function(event) {
    $('.header__burger').toggleClass('active');
    $('.menu').toggleClass('active');
  });
  
  $('.menu, .menu__nav-link').click(function(event) {
    $('.header__burger').toggleClass('active');
    $('.menu').toggleClass('active');
  });
  
  $(".menu__inner").on("click", function(event) {
    event.stopPropagation();
});

// Header
$(window).scroll(function() {
    let scrollPos = $(window).scrollTop();
    console.log(scrollPos);
    if (scrollPos > 0) {
        $(".header__logo").addClass('active');
        $(".header__contact").addClass('active');
        $(".header__nav").addClass('active');
    } else {
        $(".header__logo").removeClass('active');
        $(".header__contact").removeClass('active');
        $(".header__nav").removeClass('active');
    }
});

// Modal

const modalCall = $("[data-modal]");
const modalClose = $("[data-close]");

modalCall.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalId = $this.data('modal');

    $(modalId).addClass('active');
    $("body").addClass('lock');

    setTimeout(function() {
        $(modalId).find(".modal").css({
            opacity: '1'
        });
    }, 200);
});

modalClose.on("click", function(event) {
    event.preventDefault();

    let $this = $(this);
    let modalParent = $this.parents('.modal-mask');

    modalParent.find(".modal").css({
      opacity: '0'
    });

    setTimeout(function() {
        modalParent.removeClass('active');
        $("body").removeClass('lock');
    }, 200);
});

$(".modal-mask").on("click", function(event) {
    let $this = $(this);

    $this.find(".modal").css({
      opacity: '0'
    });

    setTimeout(function() {
        $this.removeClass('active');
        $("body").removeClass('lock');
    }, 200);
});

$(".modal").on("click", function(event) {
    event.stopPropagation();
});