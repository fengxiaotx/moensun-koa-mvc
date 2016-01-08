/**
 * Created by Bane.Shi on 2015/12/30.
 */
'use strict';
let Logger = require("../../log/Logger.js");
let axios = require("axios");
function HttpRequest(){
    if(!(this instanceof HttpRequest)){
        return new HttpRequest;
    }
}

HttpRequest.prototype.request=function * (options){
    try{
        options= Object.assign({'method':'GET'},options);
        let response = yield axios({
            method:options.method||'GET',
            url:options.url,
            params:options.params
        });

        if(response.status!==200){
            Logger.DateFile.error(response);
            throw 4016;
        }
        return response.data;
    }catch (e){
        Logger.Console.error(e);
        Logger.DateFile.error(e);
        if(e.data && (e.data.numeric_error_code==40401 || e.data.numeric_error_code==40406)){
            throw 4015;
        }
        throw 4016;
    }
}

module.exports=HttpRequest;