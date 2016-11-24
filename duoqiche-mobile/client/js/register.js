// var mobileRule = /^1\d{10}$/;
$('#register').on('click', function () {
    if ($.trim($('#registersj').val()).length == 0) {
        $.toast('手机号不能为空');
        return;
    }
    if (!(mobileRule.test($('#registersj').val()))) {
        $.toast('手机号码格式不正确！');
        return;
    }
    if ($.trim($('#registerx').val()).length == 0) {
        $.toast('收货人姓不能为空');
        return;
    }
    if ($.trim($('#registerm').val()).length == 0) {
        $.toast('收货人名不能为空');
        return;
    }
    if ($.trim($('#registermm1').val()).length == 0) {
        $.toast('请设置密码');
        return;
    }
    if ($.trim($('#registermm2').val()).length == 0) {
        $.toast('请确认密码');
        return;
    }
    if ($.trim($('#registermm1').val()) != $.trim($('#registermm2').val()) ) {
        $.toast('两次密码不一致');
        return;
    }
    if ($.trim($('#registertxyzm').val()).length == 0) {
        $.toast('请输入图形验证码');
        return;
    }
});