/**
 *
 * Copyright (C), 2013-2014,  Daoyixing Co., Ltd.
 * 杭州道易行电子商务有限公司    版权所有 2013-2015
 *
 * PROPRIETARY RIGHTS of Daoyixing Co., Ltd are involved in the
 * subject matter of this material.  All manufacturing, reproduction, use,
 * and sales rights pertaining to this subject matter are governed by the
 * license agreement.  The recipient of this software implicitly accepts
 * the terms of the license.
 * 本软件文档资料是杭州道易行电子商务有限公司的资产,任何人士阅读和使用本资料必须获得
 * 相应的书面授权,承担保密责任和接受相应的法律约束.
 *
 * File name: cookie
 * Author: Kevin.w       Version: 1.0       Date: 2014-01-08 10:22
 * Description:
 * 1、全站cookie操作
 * 2、
 * 3、
 *
 * History:        
 *   <Date>     <Version>    <Author>    <Modification>
 * 2014-01-08      1.0        Kevin.w     新建文件
 *
 */

/**
 *
 * 获取cookie
 * 查找cookie是否存在，存在则返回cookie值，否则返回空
 * c_name -- cookie名称
 */
function getCookie(c_name) {
    var c_start = 0, c_end = 0;
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != '-1') {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == '-1') c_end = document.cookie.length;
            return decodeURIComponent(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

/**
 *
 * 设置cookie
 * c_name -- cookie名称
 * value -- cookie值
 * expiredays -- 过期天数，如果有则设置，否则不设置
 * path -- "/" 作用域，全站
 */
function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + encodeURIComponent(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString()) + ";path=/";
}

// 商品标题分离 str--传入字符串 type--返回类型,main主标题,sub副标题
var titleSplit = function (str, type) {
    var mainStr = str.split('(');
    if ( type === 'main') {
        return mainStr[0];
    } else {
        if (mainStr[1] !== undefined) {
            var subStr = mainStr[1].split(')');
            return subStr[0];
        } else {
            return '';
        }
    }
}
