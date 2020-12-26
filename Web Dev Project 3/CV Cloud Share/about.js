$(document).ready(function() {
    $( function() {
        $(".accordion").accordion( { active: false, collapsible: true});
    });

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
    
    $.getJSON("team.json",function (data){
        $.each(data, function () {
                $.each(this, function (key, value) {
                    $("#team").append(
                        "Name: " + value.name + "<br>" +
                        "Title: " + value.title + "<br>" +
                        "Bio: " + value.bio + "<br><br>");
                    });
                });
            });
        });

