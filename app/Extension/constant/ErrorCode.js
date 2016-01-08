/**
 * Created by Bane.Shi on 2016/1/8.
 */
'use strict';
let codeHash ={
    4001 : '系统忙，请稍后再试',
    4002 : '请上传图片',
    4003 : '后台没有图片返回.',
    4004 : '请提供图片路径',
    4005 : '不存在此商标信息',
    4006 : '请输入关键词',
    4007 : '请提供图片',
    4008 : '系统请求超时',
    4009 : '图片服务器忙碌',
    4010 : '无效图片',
    4011 : '附件不能大于10M',
    4012 : '上传图片的格式不符',
    4013 : '上传失败',
    4014 : '关键词输入不能超过100个字',
    4015 : '参数错误',
    4016 : 'BackendError'
}
function ErrorCode(code){
    if( codeHash[code]==undefined){
        code=4001;
    }
    return {
        "errorCode":code,
        'errorMsg':""
    }
}
module.exports = ErrorCode;