var cookie_provinceId, cookie_provinceName, cookie_cityId, cookie_cityName, cookie_areaId, cookie_areaName;
var mobileRule = /^1\d{10}$/;
var flag = 0; // 0：未选择收获方式   1：门店自提    2：送货上门
var souhuofangshi ;
//保存地址本地
$('.save').on('click', function () {
    if ($.trim($('#dizhiaddshouji').val()).length == 0) {
        $.toast('手机号不能为空');
        return;
    }
    if (!(mobileRule.test($('#dizhiaddshouji').val()))) {
        $.toast('手机号码格式不正确！');
        return;
    }
    if ($.trim($('#dizhiaddxing').val()).length == 0) {
        $.toast('收货人姓不能为空');
        return;
    }
    if ($.trim($('#dizhiaddming').val()).length == 0) {
        $.toast('收货人名不能为空');
        return;
    }
    if ($.trim($('#addresstype').val()).length == 0) {
        $.toast('请选择收货方式');
        return;
    }
    if ($.trim($('#region input').val()).length == 0) {
        $.toast('请选择区域');
        return;
    }

   /* setCookie('dizhiaddxing', $.trim($('#dizhiaddxing').val()));
    setCookie('dizhiaddming', $.trim($('#dizhiaddming').val()));
    setCookie('dizhiaddshouji', $.trim($('#dizhiaddshouji').val()));
    setCookie('merchant_id', $.trim($('#merchant_id').val()));
    setCookie('address', $.trim($('#merchant_address').val()));*/
   if(flag == 1){
        if ($.trim($('#merchant input').val()).length == 0) {
         $.toast('请选择网点');
         return;
         };
        $('#order_detail').html("<ul><li>"+'姓名：'+$.trim($('#dizhiaddxing').val())+$.trim($('#dizhiaddming').val())+"</li>" +
            "<li>"+'手机号：'+$.trim($('#dizhiaddshouji').val())+"</li>" +
            "<li>"+'收货方式：'+$.trim($('#addresstype').val())+"</li>" +
            "<li>"+'收货地址：'+$.trim($('#region input').val())+','+$.trim($('#merchant input').val())+"</li></ul>");

        $.router.load('#order');
    }else if(flag == 2){
       if ($.trim($('#homeaddress input').val()).length == 0) {
        $.toast('请填写详细地址');
        return;
        };
       $('#order_detail').html("<ul><li>"+'姓名：'+$.trim($('#dizhiaddxing').val())+$.trim($('#dizhiaddming').val())+"</li>" +
           "<li>"+'手机号：'+$.trim($('#dizhiaddshouji').val())+"</li>" +
           "<li>"+'收货方式：'+$.trim($('#addresstype').val())+"</li>" +
           "<li>"+'收货地址：'+$.trim($('#region input').val())+','+$.trim($('#homeaddress input').val())+"</li></ul>");

       $.router.load('#order');
    }



    // window.location.href = "";
});

//选择网点
$('#merchant').on('click', function () {
    var address = $('.address').val();
    if (address === '') {
        $.toast('请先选择区域');
    } else {
        $(".city-back").removeClass("icon icon-left");
        $("#address").empty();
        $(".title-change").html("请选择服务网点");
        //获取门店列表
        loadMerchants(cookie_areaId);
    }
});

//获取网点
$('#address').on('click', '.website', function () {
    // $(this).css('border-bottom', '1px solid #0064d2');
    // $(this).siblings().css('border-bottom', '1px solid #eee');
    var m_id      = $(this).attr('m-id');
    var m_name    = $(this).find('.m-name').attr('m-name');
    var m_address = $(this).find('.m-address').attr('m-address');
    $('.show_merchcant_name').val(m_name);
    $('#merchant_id').val(m_id);
    $('#merchant_address').val(m_address);
});

//选择省市区
$(function () {
    var region = null;
    $(function () {
        //每一次打开都是 省
        $("#region").on('click', function () {
           /* var provinceid = 140000;
            var cityid = 140100;*/
            setRegion(region);
        });
        //获得json
        $.ajaxSettings.async = false;
        $.getJSON( "../../build/cityData.min.json", function (data) {
            region = data;
            return region
        });
    });
    //根据ID遍历出省市区
    var _cityData = '';
    var _areaData = '';
    function setRegion(regionData, provinceId, cityId, areaId) {
        var _regionHtml = "";
        if (provinceId === undefined) { // 省
            $(".city-back").removeClass("icon icon-left");
            $(".title-change").html("请选择省");
            $(regionData).each(function (i) {
                _regionHtml += '<li class="city-li" provinceId="' + regionData[i].v + '" provinceName="' + regionData[i].n + '"><a href="#" >' + regionData[i].n + '</a></li>'
            });
        } else if (cityId === undefined) {  // 市
            $(".city-back").addClass("icon icon-left").on("click", function () {
                setRegion(region)
            });
            $(".title-change").html("请选择市");
            $(regionData).each(function (i) {
                if (regionData[i].v === provinceId) {
                    _cityData = regionData[i].s;
                    $(_cityData).each(function (j) {
                        _regionHtml += '<li class="city-li" cityId="' + _cityData[j].v + '" provinceName="' + regionData[i].n + '" cityName="' + _cityData[j].n + '"><a href="#" >' + _cityData[j].n + '</a></li>'
                    });
                }
            });
        } else { // 区
//                $(".city-back").addClass("icon icon-left").on("click", function () {
//                    var str   = cityId.substring(0, 2);
//                    var str_1 = str + '0000';
//                    setRegion(region, str_1)
//                });
            $(".title-change").html("请选择区");
            $(regionData).each(function (i) {
                _cityData = regionData[i].s;  // 得到市
                $(_cityData).each(function (j) {
                    if (_cityData[j].v == cityId) {
                        _areaData = _cityData[j].s;//得到区
                        $(_areaData).each(function (k) {
                            _regionHtml += '<li class="city-li close-panel"  provinceName="' + regionData[i].n + '" cityName="' + _cityData[j].n + '" areaId="' + _areaData[k].v + '" areaName="' + _areaData[k].n + '"><a href="#" >' + _areaData[k].n + '</a></li>'
                        })
                    }
                })
            });
        }
        $("#address").html(_regionHtml);
        regionTap();
    }

    //每个li 点击 得到ID
    var regionTap = function () {
        $('#address').on('click', '.city-li', function () {
            var provinceId   = $(this).attr('provinceId');
            var provinceName = $(this).attr('provinceName');
            var cityId       = $(this).attr('cityId');
            var cityName     = $(this).attr('cityName');
            var areaId       = $(this).attr('areaId');
            var areaName     = $(this).attr('areaName');

            if (provinceId !== undefined && provinceId !== null) {
                setRegion(region, provinceId);
                cookie_provinceId   = provinceId;
                cookie_provinceName = provinceName;
            } else if (cityId !== undefined && cityId !== null) {
                setRegion(region, 0, cityId);
                cookie_cityId   = cityId;
                cookie_cityName = cityName;
            } else {//此时关闭城市切换列表
                cookie_areaId   = areaId;
                cookie_areaName = areaName;
                $(".address").val(cookie_provinceName + ',' + cookie_cityName + ',' + cookie_areaName);
                $('#merchant').addClass('open-panel');
                $('.show_merchcant_name').val('');
                $('#merchant_id').val('');
                $('#merchant_address').val('');
            }
        });
    };

    // 提货方式更改事件绑定
    $('#addresstype').on('change', function() {
        if ($('#addresstype').val() == '门店自提') {
            $('#homeaddress').hide();
            $('#merchant').show();
            flag = 1;
        } else {
            $('#homeaddress').show();
            $('#merchant').hide();
            flag = 2;
        }
    })
});

function loadMerchants(region) {
    $.ajax({
        async: false,
        type: 'get',
        url: context + "area/" + region + "/merchants",
        dataType: "json",
        success: function (data) {
            if ($.trim(data).length == 0) {
                $('#address').empty();
                $(".title-change").html("请选择服务网点");
                $("#address").html('<li>' +
                    '<p style="font-size:.85rem;padding:.5rem .5rem;margin:0 auto; position:absolute; top: 35%;">您所选择的地区暂时没有道易行服务商户！</p>' +
                    '</li>'
                );
            } else {
                var html = '';
                $(data).each(function (i, n) {
                    html += '<li m-id="' + n.id + '-' + n.category + '" class="website close-panel" style="">' +
                        '<p class="m-name" m-name="' + n.name + '" style="font-size:.70rem;">' + n.name + '</p>' +
                        '<p class="m-address" m-address="' + n.address + '" style="font-size:.4rem;">地址：' + n.address + '</p>' +
                        '<p style="font-size:.4rem;">电话：400-8788-676</p>' +
                        '</li>';
                });
                $('#address').append(html);
            }
        }
    });
}

//
$("#addresstype").picker({
    toolbarTemplate: '<header class="bar bar-nav">\
                          <button class="button button-link pull-right close-picker white">确定</button>\
                          <h1 class="title white">请选择收货方式</h1>\
                          </header>',
    cols: [
        {
            textAlign: 'center',
            values: ['门店自提', '送货上门']
        }
    ]
});
//确认去支付
$("#gotopay").on('click',function(){
    if($('#order_detail small').html() === '收货信息'){
        $.toast('请输入收货信息')
    }else{
        $.toast('确认去支付')
    }
});
// 手机check
function mobileCheck() {
    // 如果通过显示设置密码
    $('.pwd').show();
}
