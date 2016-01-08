/**
 * Created by Bane.Shi on 2015/12/24.
 */
'use strict';
let AppConfig = require('../config/app.js');
let app= require('koa')();
let path = require("path");
let router = require('koa-router')();
let _ = require('lodash');

global.App=app;                                 //The project Object .
global.RootDir = path.join(__dirname,"../");    //The path of project .

let MSRouter = require('../lib/router/MSRouter.js')(router);

global.MSRouter=MSRouter;

require(RootDir+"/bootstrap/autoload.js");     //auto load path


app.use(router.routes()).use(router.allowedMethods());

app.listen(AppConfig.port || 3000);
console.log("start with port "+(AppConfig.port || 3000));