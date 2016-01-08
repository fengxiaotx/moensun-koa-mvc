/**
 * Created by Bane.Shi on 2015/12/24.
 */
'use strict';
function Kernel(){
    if(!(this instanceof Kernel)){
        return new Kernel();
    }
    this.middleware=[];

    this.routeMiddleware={
        "login":"LoginMiddleware",
        "session":"SessionMiddleware"
    };
}
module.exports=Kernel;