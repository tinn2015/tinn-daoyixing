/**
 * Created by Administrator on 2016/10/14.
 */
$('.tab-link').on('tap', function () {
    $('.columns').siblings('a').removeClass('active');
    $(this).addClass('active');
});

$('#colorSelect span').on('click', function () {
    $(this).addClass('active').siblings('span').removeClass('active');
});

$('.numjian').on('click', function () {
    var num = parseInt($('.thisnum').val());
    if (num > 1) {
        num--;
        $('.thisnum').val(num);
    }
});

$('.numjia').on('click', function () {
    var num = parseInt($('.thisnum').val());
    num++;
    $('.thisnum').val(num);
});
$('.tab-link').on('click', function () {
    $('.columns').siblings('a').removeClass('active');
    $(this).addClass('active');
});