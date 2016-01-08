/**
 * Created by Bane.Shi on 2015/12/23.
 */
'use strict';
let co =require("co");
let _ = require('lodash');
let methods = require('methods');
let path =require('path');
let coRender = require('co-render');

let kernel = require("../../app/Http/Kernel.js")();
let FolderConfig = require("../../config/folder.js")
let ViewConfig = require(path.join(RootDir,"config/view.js"));

function MSRouter(router){
    if(!(this instanceof MSRouter)){
        return new MSRouter(router);
    }
    if(router){
        this.router=router;
    }
    this.middlewares=[];
    this.groupMiddlewares=[];
}

methods.forEach(function(method){
    MSRouter.prototype[method] = function(routePath,options){
        if(options.uses){
            let me=this;
            let middlewares=[];
            let context={};
            let uses = options.uses.split('@');

            if(uses[0]){context.controller=uses[0]}else {context.controller='IndexController'}
            if(uses[1]){context.action=uses[1]}else {context.action='index'}

            let routeMiddlewares = [];
            if(options.middleware && _.isArray(options.middleware)){
                routeMiddlewares = _.union(me.groupMiddlewares,options['middleware']);
            }else {
                routeMiddlewares = me.groupMiddlewares;
            }

            if(routeMiddlewares && routeMiddlewares.length>0){
                for(let routeMiddleware of routeMiddlewares){
                    middlewares.push(me.routeMiddlewareFun(routeMiddleware,context));
                }
            }


            middlewares.push(this.routerFun(context));

            this.router.register(routePath,[method],middlewares,{
                name:options.name?options.name:routePath
            });
        }
    }
});




MSRouter.prototype.group= function (options,fun) {

    if(options['middleware'] && _.isArray(options['middleware'])){
        this.groupMiddlewares = _.union(this.groupMiddlewares,options['middleware']);
    }
    fun();
    this.groupMiddlewares = [];
}

MSRouter.prototype.routeMiddlewareFun=function(middleware,context){


    return function *(next) {
        let routeMiddlewareModule = kernel.routeMiddleware[middleware];
        let RouteMiddlewareClass = require(path.join(FolderConfig.middleware,routeMiddlewareModule));
        let routeMiddleware = new RouteMiddlewareClass();

        Object.assign(routeMiddleware,this,context);
        let result = yield co(routeMiddleware.handle(next));
        if(result != next){
            this.body = result;
        }else {
            yield next;
        }
    }
}

MSRouter.prototype.routerFun=function(context){
    let me = this;
    return function *(next) {
        let ControllerClass = require(path.join(FolderConfig.controller,context.controller));
        let controller = new ControllerClass();
        Object.assign(this,context);
        controller.init(this);
        let result = yield co(controller[controller.action]());
        if(typeof result == 'function'){
            this.type="html";
            this.response.body = yield result;
        }else {
            this.body=result;
        }
    }
}

module.exports=MSRouter;
