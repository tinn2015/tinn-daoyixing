$(function(){
    $('.pay-method').on('click', function () {
        $(this).find('input[name=way]').prop('checked', true);
        $('.choose-on').hide();
        $(this).find('.choose-on').show()
    });
});