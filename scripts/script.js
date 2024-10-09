$(document).ready(function(){
    const menu = $('.menu-pop-up')

    $('.menu-burger').click(function(){
        menu.css('display','flex');
    });

    $(window).click((e) => {
        if ($(e.target).is(menu)) {
            menu.css({display: 'none'});
        }
    });

    $(".close-menu").click(function(){
        $('.menu-pop-up').css('display','none');
    });

    function getSelectedValue() {
        return  $('input[name="options"]:checked').val();
    }


    $('.product-button').click(function() {
        const productElement = $(this).closest('.product');
        const title = productElement.find('.product-title').text();
        $('#product').val(title + " " + getSelectedValue() + " см")

    });
})