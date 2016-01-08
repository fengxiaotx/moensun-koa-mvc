/**
 * Created by bane on 12/21/15.
 */

'use strict';
function Time(){
    if(!(this instanceof Time)){
        return new Time;
    }
}

Time.prototype.getYearsAll=function(options){
    let nowYear = (new Date()).getFullYear();
    let start = options.start?options.start:1983;
    let end = options.end?options.end:nowYear;

    let years = [];
    for(let i=start;i<=end;i++){
        years.push(i);
    }
    return years;
}


Time.prototype.getYearsPreviousAll= function (options) {
    let nowYear = (new Date()).getFullYear();
    let start = options.start?(nowYear-options.start):1983;
    let end = options.end?(nowYear-options.end):nowYear;
    let years = [];
    for(let i=start;i<=end;i++){
        years.push(i);
    }
    return years;
}

module.exports=Time;