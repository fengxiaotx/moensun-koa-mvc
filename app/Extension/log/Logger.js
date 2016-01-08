/**
 * Created by Bane.Shi on 11/9/15.
 */
'use strict';
let path =require('path');
let log4js = require('log4js');
log4js.configure(path.join(__dirname,'config/log4js.json'));
module.exports={
    Console:log4js.getLogger('console'),
    File:log4js.getLogger('log_file'),
    DateFile:log4js.getLogger('log_date')
}