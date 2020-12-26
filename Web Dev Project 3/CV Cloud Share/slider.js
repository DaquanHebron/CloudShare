$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
        slideWidth: 500,
        slideMargin: 20,
        randomStart:true,
        caption:true,
        speed:3000,
        pagerType:'short',
        pagerSelector:'#id_pager'
    });
});
