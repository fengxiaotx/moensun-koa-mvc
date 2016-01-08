/**
 * Created by Bane.Shi on 11/9/15.
 */
'use strict';
function Value(){
    if(!(this instanceof Value)){
        return new Value;
    }
}
Value.prototype.getStart=function(page,limit){
    return (page-1)*limit;
}
module.exports=Value;