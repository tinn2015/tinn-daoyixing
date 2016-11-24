// var mobileRule = /^1\d{10}$/;
//点击登录事件。。
$('#login').on('click',function(){
    if ($.trim($('#loginshouji').val()).length == 0) {
        $.toast('手机号不能为空');
        return;
    }
    if (!(mobileRule.test($('#loginshouji').val()))) {
        $.toast('手机号码格式不正确！');
        return;
    }
    if ($.trim($('#tuxingyzm').val()).length == 0) {
        $.toast('请输入图形验证码');
        return;
    }
    if ($.trim($('#duanxinyzm').val()).length == 0) {
        $.toast('请输入短信验证码');
        return;
    }
});
