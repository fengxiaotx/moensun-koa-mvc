/**
 * Created by Bane.Shi on 2016/1/8.
 */
'use strict';
let path = require("path");
let coRender = require('co-render');
let FolderConfig = require(path.join(RootDir,"config/folder.js"));
let ViewConfig = require(path.join(RootDir,"config/view.js"));
class MSBaseController{

    constructor(){

    }

    init(context){
        Object.assign(this,context);
    }

    render(viewPath,options){
        options = options || {};
        return function * (){
            if(ViewConfig.engine){
                Object.assign(options,{"engine":ViewConfig.engine});
            }
            return coRender(path.join(FolderConfig.views,viewPath+"."+ViewConfig.suffix),options);
        };
    }
}
module.exports = MSBaseController;