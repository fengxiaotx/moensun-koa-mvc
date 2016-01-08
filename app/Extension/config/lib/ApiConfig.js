/**
 * Created by Bane.Shi on 11/5/15.
 */
'use strict';
let baseConfig = require('./BaseConfig.js');
let baseUrl = baseConfig.HttpType+'://'+baseConfig.Domain+((baseConfig.Port==80)?'':(':'+baseConfig.Port))+'/'+baseConfig.Project+'/'+baseConfig.Version;
module.exports={
    SEARCH_KEYWORDS     :baseUrl+'/keyword/search',         //关键词检索
    DETAIL              :baseUrl+'/detail/',                //详情页
    GET_UPLOAD_URL_OSS  :baseUrl+'/oss/getuploadurl',       //获取OSS的url
    GET_UPLOAD_URL_S3   :baseUrl+'/s3/getuploadurl',        //获取S3的URL
    GET_UPLOAD_URL_CloudFront   :baseUrl+'/cloudFront/getuploadurl',        //获取cloudFront的URL
    GET_URL_SIGN        :baseUrl+'/url/sign',               //获取加密的url
    IMAGE_SEARCH        :baseUrl+'/image/search',           //图片检索，以图搜图
    KEYWORDS_FACET      :baseUrl+'/keyword/facet',          //侧边栏检索
    IMAGE_FACET         :baseUrl+'/image/facet',           //图片侧边栏

    LIKE_GROUP_SEARCH   :baseUrl+'/ncl/search',              //类似群组
    VCL_ALL             :baseUrl+'/vcl/all',                 //所有维也纳分类
    VCL_SEARCH          :baseUrl+'/vcl/search',              //维也纳分类
    NCL_ROOT            :baseUrl+'/ncl/getrootlist',
    NCL_CHILDREN        :baseUrl+'/ncl/getchildren'
}