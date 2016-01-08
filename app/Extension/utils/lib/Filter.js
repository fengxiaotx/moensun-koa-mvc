/**
 * Created by fengxiaotx on 2015/12/22.
 */
'use strict';
let _ = require('lodash');
function Filter(){
    if(!(this instanceof Filter)){
        return new Filter;
    }
}

Filter.prototype.param=function(value){
    if(value){
        let patten = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&mdash;—|{}【】‘；：”“'。、？]",'g');
        return value.replace(patten,'');
    }else {
        return null;
    }
}

Filter.prototype.convert= function (object,keys) {

    if(_.isObject(object)){
        let patten = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&mdash;—|{}【】‘；：”“'。、？]",'g');
        _.forEach(object, function (n,key) {
            if(n){
                if(_.contains(keys,key)){
                    object[key] = n.replace(patten,'');
                }
            }
        });
    }
}

module.exports=Filter;