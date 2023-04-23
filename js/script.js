$(document).ready(function () {

    $(".drop-menu").click(function (e) {
        e.stopPropagation();
        $(this).toggleClass("is-active");
        $(".menu-wrap").toggleClass("open");
        $("body, html").toggleClass("overflow");
    });


    $('.product-slider').each(function (key, item) {
        var sliderIdName = 'slider' + key;
        this.id = sliderIdName;
        var sliderId = '#' + sliderIdName;
        var prevBtn = $(sliderId).closest('.product-slider-wrap').find(".slick-prev");
        var nextBtn = $(sliderId).closest('.product-slider-wrap').find(".slick-next");

        $(sliderId).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: true,
            fade: true,
            nextArrow: nextBtn,
            prevArrow: prevBtn
        });
    });


    $('.credit-slider').slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.credit-slider-arrows .slider-navigation .slick-prev'),
        nextArrow: $('.credit-slider-arrows .slider-navigation .slick-next'),
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                }
    },
            {
                breakpoint: 661,
                settings: {
                    slidesToShow: 1,
                }
    },
  ]
    });


    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: false,
        infinite: true,
        asNavFor: '.slider-nav',
        prevArrow: $('.object-slider-wrap .slider-navigation .slick-prev'),
        nextArrow: $('.object-slider-wrap .slider-navigation .slick-next'),
    });
    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        infinite: true,
        variableWidth: true,
        arrows: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    variableWidth: false,
                }
    },
  ]
    });

    $(".description-object .more").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".description-object").find("p").toggleClass("open");
        $(this).find("img").toggleClass("rotate");
    })


    $('.select-wrap select').select2({
        minimumResultsForSearch: 6,
    });

    $(".tab-menu li a").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".tab-menu").find("li").removeClass("active");
        $(this).closest("li").addClass("active");
        var index = $(this).closest("li").index();
        $(".tab-content > .tab-content-item").removeClass("active");
        $(".tab-content > .tab-content-item").eq(index).addClass("active");
    });

    $(".tab-menu1 li a").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".tab-menu-wrap1").find(".tab-menu1 li").removeClass("active");
        $(this).closest("li").addClass("active");
        var index = $(this).closest("li").index();
        $(".tab-content1 .tab-content-item").removeClass("active");
        $(".tab-content1 .tab-content-item").eq(index).addClass("active");
    });

    $(".tab-menu2 li a").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".tab-menu-wrap2").find(".tab-menu2 li").removeClass("active");
        $(this).closest("li").addClass("active");
        var index = $(this).closest("li").index();
        $(".tab-content2 .tab-content-item").removeClass("active");
        $(".tab-content2 .tab-content-item").eq(index).addClass("active");
    });
    
    $(".tab-menu3 li a").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".tab-menu3").find("li").removeClass("active");
        $(this).closest("li").addClass("active");
        var index = $(this).closest("li").index();
        $(".tab-content3 .tab-content-item").removeClass("active");
        $(".tab-content3 .tab-content-item").eq(index).addClass("active");
    });
    
    $(".tab-menu4 li a").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".tab-menu4").find("li").removeClass("active");
        $(this).closest("li").addClass("active");
        var index = $(this).closest("li").index();
        $(".tab-content4 .tab-content-item").removeClass("active");
        $(".tab-content4 .tab-content-item").eq(index).addClass("active");
    });
    

    $(".phone-number-input").inputmask({
		"mask": "+7 999-999-99-99",
	});
    
    $(".my-select-wrap .top").on("click", function(){
        $(this).closest(".my-select-wrap").find(".bottom").toggleClass("open");
        $(this).find("img").toggleClass("rotate");
    });
    
    $(".drop").on("change", function(){
        $(this).closest(".checkbox-wrapper").find(".hide-wrap").toggleClass("open");
    });
    
    $(".search-item a").on("click", function(e){
        e.preventDefault();
        $(this).closest(".search-item").find(".search").toggleClass("open");
    })
    
    


});